"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  type DocumentData,
} from "firebase/firestore";
import { QRCodeCanvas } from "qrcode.react";
import { getDb } from "@/lib/firebase";
import Link from "next/link";

type AgentStatus = "approved" | "double-agent" | "imposter";

type AgentDoc = {
  id: string;
  codename: string;
  status: AgentStatus;
  photoDataUrl?: string;
  story?: string;
};

function statusLabel(status: AgentStatus) {
  switch (status) {
    case "approved":
      return "APPROVED AGENT";
    case "double-agent":
      return "DOUBLE AGENT";
    case "imposter":
      return "IMPOSTER DETECTED";
  }
}

function statusGlow(status: AgentStatus) {
  switch (status) {
    case "approved":
      return "shadow-[0_0_20px_rgba(34,197,94,0.4)]";
    case "double-agent":
      return "shadow-[0_0_20px_rgba(234,179,8,0.4)]";
    case "imposter":
      return "shadow-[0_0_20px_rgba(244,63,94,0.4)]";
  }
}

function mapDoc(doc: DocumentData): AgentDoc {
  const data = doc.data() || {};
  return {
    id: doc.id,
    codename: data.codename ?? "Unknown Agent",
    status: (data.status as AgentStatus) ?? "approved",
    photoDataUrl: data.photoDataUrl,
    story: data.story,
  };
}

// Fake sparkline data (mini activity curve) — deterministic from id
function sparkPath(id: string): string {
  const seed = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const points: string[] = [];
  const w = 60;
  const h = 16;
  for (let i = 0; i < 12; i++) {
    const r =
      Math.sin((seed + i) * 0.7) * 0.4 + Math.cos((seed + i) * 0.3) * 0.3;
    const p = 50 + Math.round(r * 50);
    const x = (i / 11) * w;
    const y = h - (p / 100) * h;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

const SCATTER_SLOTS = [
  { left: 6, top: 10 },
  { left: 22, top: 6 },
  { left: 38, top: 8 },
  { left: 54, top: 6 },
  { left: 70, top: 12 },
  { left: 86, top: 22 },
  { left: 90, top: 42 },
  { left: 84, top: 62 },
  { left: 72, top: 78 },
  { left: 52, top: 84 },
  { left: 32, top: 80 },
  { left: 16, top: 64 },
  { left: 8, top: 44 },
  { left: 12, top: 24 },
  { left: 28, top: 42 },
  { left: 62, top: 40 },
];

const FOCUS_DURATION_MS = 8000;
const PARALLAX_SENSITIVITY = 0.012;

export default function ScreenPage() {
  const [agents, setAgents] = useState<AgentDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [qrValue, setQrValue] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [clock, setClock] = useState("");
  const [coords, setCoords] = useState("0.00 / 0.00");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQrValue(`${window.location.origin}/agent`);
    }
  }, []);

  useEffect(() => {
    const db = getDb();
    if (!db) {
      setError(
        "Display offline. Firestore is not configured. Check your Firebase env vars."
      );
      setLoading(false);
      return;
    }
    const agentsRef = collection(db, "agents");
    const q = query(agentsRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setAgents(snapshot.docs.map(mapDoc));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError("Secure channel error. Could not load agents from Firestore.");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (agents.length <= 1) return;
    const id = setInterval(() => {
      setFocusedIndex((i) => (i + 1) % agents.length);
    }, FOCUS_DURATION_MS);
    return () => clearInterval(id);
  }, [agents.length]);

  // Parallax: subtle 3D tilt from mouse
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (clientX / w - 0.5) * 2;
    const y = (clientY / h - 0.5) * 2;
    setMouseTilt({
      x: y * PARALLAX_SENSITIVITY * 8,
      y: -x * PARALLAX_SENSITIVITY * 8,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setMouseTilt({ x: 0, y: 0 });
  }, []);

  // Peripheral: digital clock with ms
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = d.getHours().toString().padStart(2, "0");
      const m = d.getMinutes().toString().padStart(2, "0");
      const s = d.getSeconds().toString().padStart(2, "0");
      const ms = d.getMilliseconds().toString().padStart(3, "0");
      setClock(`${h}:${m}:${s}.${ms}`);
    };
    tick();
    const id = setInterval(tick, 100);
    return () => clearInterval(id);
  }, []);

  // Peripheral: scrolling coords (simulated)
  useEffect(() => {
    const id = setInterval(() => {
      setCoords(
        `${(Math.random() * 2 + 41).toFixed(2)} / ${(Math.random() * 2 + 17).toFixed(2)}`
      );
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const latestAgents = useMemo(() => agents.slice(0, 20), [agents]);

  const transformStyle = useMemo(
    () => ({
      transform: `perspective(1200px) rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)`,
      transition: "transform 0.15s ease-out",
    }),
    [mouseTilt.x, mouseTilt.y]
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#030712]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Glassmorphism canvas: deep gradient + hex grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 140% 90% at 50% 40%, #0c1929 0%, #05101a 45%, #030712 70%, #000 100%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 fui-hex-grid" />
      {/* Slow-moving scan line over background */}
      <div className="pointer-events-none fixed inset-0 fui-bg-scanline" />
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,182,212,0.03) 0%, transparent 50%, rgba(6,182,212,0.02) 100%)",
        }}
      />
      {/* Data noise: scrolling hex strip (seamless loop) */}
      <div
        className="pointer-events-none fixed left-0 right-0 z-30 overflow-hidden border-t border-cyan-500/20 bg-slate-950/60 py-1 font-[var(--font-fui-mono)] text-[9px] tracking-[0.3em] text-cyan-400/50"
        style={{ fontFamily: "var(--font-fui-mono)", bottom: "4.25rem" }}
        aria-hidden
      >
        <div className="fui-hex-scroll flex w-max">
          {Array.from({ length: 3 }).map((_, block) => (
            <span key={block} className="whitespace-nowrap pr-32">
              {Array.from({ length: 64 }).map((_, i) => (
                <span key={i}>
                  {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"][
                    (i * 7) % 16
                  ]}
                  {(i + 1) % 4 === 0 ? " " : ""}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 3D tilt container */}
      <div
        className="relative min-h-screen will-change-transform"
        style={transformStyle}
      >
        <main className="relative flex min-h-screen flex-col">
          {/* Peripheral: top-left coords */}
          <div
            className="fixed left-3 top-3 z-40 font-[var(--font-fui-mono)] text-[10px] uppercase tracking-widest text-cyan-400/70"
            style={{ fontFamily: "var(--font-fui-mono)" }}
          >
            <div>GRID.REF</div>
            <div className="mt-0.5 text-cyan-300/90">{coords}</div>
          </div>

          {/* Peripheral: top-right clock */}
          <div
            className="fixed right-3 top-3 z-40 font-[var(--font-fui-mono)] text-[11px] tabular-nums tracking-wider text-cyan-300/90"
            style={{ fontFamily: "var(--font-fui-mono)" }}
          >
            {clock}
          </div>

          {/* Peripheral: bottom-left waveform (pulsing bars) */}
          <div className="fixed bottom-20 left-3 z-40 flex h-8 items-end gap-0.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-sm bg-cyan-500/50"
                style={{
                  height: "60%",
                  animation: "fui-wave 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <header className="flex shrink-0 items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]">
                <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-40" />
              </span>
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100"
                style={{ fontFamily: "var(--font-fui-mono)" }}
              >
                IN THE BUFF — AGENT ROSTER
              </p>
            </div>
            <Link
              href="/"
              className="rounded border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
              style={{ fontFamily: "var(--font-fui-mono)" }}
            >
              View Program
            </Link>
          </header>

          {/* Circuit traces: center to each card (more visible, moving dash) */}
          {latestAgents.length > 0 && (
            <svg
              className="pointer-events-none fixed inset-0 z-0 h-full w-full"
              style={{ opacity: 0.38 }}
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.5)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.08)" />
                </linearGradient>
              </defs>
              {latestAgents.map((_, i) => {
                const idx = i === focusedIndex ? latestAgents.length : i;
                const slotIdx = idx > focusedIndex ? idx - 1 : idx;
                const slot = SCATTER_SLOTS[slotIdx % SCATTER_SLOTS.length];
                const cx = 50;
                const cy = 45;
                const x2 = slot.left;
                const y2 = slot.top;
                return (
                  <line
                    key={i}
                    x1={`${cx}%`}
                    y1={`${cy}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.6"
                    strokeDasharray="4 3"
                    className="fui-circuit-line"
                  />
                );
              })}
            </svg>
          )}

          {/* Canvas: cards */}
          <section className="relative flex-1 px-2 pb-28 pt-2 md:px-4">
            {loading ? (
              <div className="flex min-h-[40vh] items-center justify-center">
                <p
                  className="text-sm text-slate-400"
                  style={{ fontFamily: "var(--font-fui-mono)" }}
                >
                  SYNCING INTEL…
                </p>
              </div>
            ) : error ? (
              <div className="flex min-h-[40vh] items-center justify-center">
                <p className="text-sm text-rose-300">{error}</p>
              </div>
            ) : latestAgents.length === 0 ? (
              <div className="flex min-h-[40vh] items-center justify-center">
                <p
                  className="max-w-sm text-center text-sm text-slate-400"
                  style={{ fontFamily: "var(--font-fui-mono)" }}
                >
                  NO AGENTS CLEARED. SCAN QR TO JOIN.
                </p>
              </div>
            ) : (
              <>
                {/* Small FUI cards */}
                {latestAgents.map((agent, i) => {
                  if (i === focusedIndex) return null;
                  const unfocusedRank = i < focusedIndex ? i : i - 1;
                  const slotIdx = unfocusedRank % SCATTER_SLOTS.length;
                  const slot = SCATTER_SLOTS[slotIdx];
                  const isHovered = hoveredCardId === agent.id;
                  const isDimmed =
                    hoveredCardId != null && hoveredCardId !== agent.id;

                  return (
                    <div
                      key={agent.id}
                      className="agent-float absolute z-10"
                      style={{
                        left: `${slot.left}%`,
                        top: `${slot.top}%`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${(slotIdx % 6) * 2.5}s`,
                        width: "8.5rem",
                      }}
                    >
                      <div
                        className={`fui-chamfer-asymmetric fui-bloom border bg-slate-900/80 backdrop-blur-md ${
                          agent.status === "imposter"
                            ? "border-rose-500/50 fui-imposter-flicker"
                            : "border-cyan-500/40 screen-glow"
                        } ${isDimmed ? "opacity-50 blur-[1px]" : ""}`}
                        style={{
                          transform: `perspective(420px) rotateX(${2 - (slotIdx % 5) * 0.6}deg) rotateY(${(slotIdx % 3) * 0.9}deg)${isHovered ? " scale(1.05)" : ""}`,
                          transition: "transform 0.2s ease",
                          fontFamily: "var(--font-fui-mono)",
                        }}
                        onMouseEnter={() => setHoveredCardId(agent.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                      >
                      {/* Tab: Agent ID */}
                      <div className="border-b border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[9px] uppercase tracking-widest text-cyan-200/90">
                        ID.{agent.id.slice(-6)}
                      </div>
                      <div className="p-2">
                        {/* Hex photo + scan ring */}
                        <div className="relative mx-auto h-14 w-14">
                          <div
                            className={`fui-scan-ring absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/50 ${
                              agent.status === "approved"
                                ? "border-emerald-400/50"
                                : agent.status === "imposter"
                                ? "border-rose-400/50"
                                : "border-amber-400/50"
                            }`}
                          />
                          <div className="absolute inset-1 overflow-hidden rounded-full bg-slate-800 fui-hex-mask">
                            {agent.photoDataUrl ? (
                              <img
                                src={agent.photoDataUrl}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-500">
                                —
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="mt-1 truncate text-center text-[10px] font-semibold tracking-wide text-cyan-100">
                          {agent.codename}
                        </p>
                        {/* Status: pulse dot (approved) or static (others) */}
                        <div className="mt-1 flex items-center justify-center gap-1">
                          {agent.status === "approved" ? (
                            <span className="relative fui-pulse-ring h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          ) : agent.status === "imposter" ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          )}
                          <span className="text-[8px] uppercase text-slate-400">
                            {statusLabel(agent.status)}
                          </span>
                        </div>
                        {/* Micro sparkline */}
                        <svg
                          className="mx-auto mt-1 h-4 w-14"
                          viewBox="0 0 60 16"
                          preserveAspectRatio="none"
                        >
                          <polyline
                            fill="none"
                            stroke="rgba(6,182,212,0.5)"
                            strokeWidth="0.8"
                            points={sparkPath(agent.id)}
                          />
                        </svg>
                      </div>
                      </div>
                    </div>
                  );
                })}

                {/* Focused FUI card (center) — styled like reference Whisper-26 card */}
                {latestAgents[focusedIndex] && (
                  <div
                    className={`absolute left-1/2 top-1/2 z-20 w-[min(92vw,24rem)] -translate-x-1/2 -translate-y-1/2 fui-chamfer-asymmetric border-2 bg-slate-950/90 p-4 backdrop-blur-xl md:p-5 ${
                      latestAgents[focusedIndex].status === "imposter"
                        ? "border-rose-500/70 fui-imposter-flicker"
                        : "border-cyan-400/60 screen-glow-breathe"
                    }`}
                    style={{
                      fontFamily: "var(--font-fui-mono)",
                      backgroundImage:
                        "linear-gradient(rgba(15,23,42,0.9), rgba(15,23,42,0.9)), linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)",
                      backgroundSize: "auto, 12px 12px, 12px 12px",
                    }}
                  >
                    {/* Tab */}
                    <div className="mb-3 inline-flex max-w-full border border-cyan-500/40 bg-slate-950/90 px-4 py-1.5 text-[9px] uppercase tracking-[0.24em] text-cyan-200">
                      AGENT_{latestAgents[focusedIndex].codename.replace(/\s/g, "_")}
                    </div>

                    <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                      {/* Hex profile on the left */}
                      <div className="relative h-28 w-28 shrink-0 md:h-32 md:w-32">
                        <div
                          className={`fui-scan-ring absolute -inset-2 rounded-full border-2 border-dashed ${
                            latestAgents[focusedIndex].status === "approved"
                              ? "border-emerald-400/70"
                              : latestAgents[focusedIndex].status === "imposter"
                              ? "border-rose-400/70"
                              : "border-amber-400/70"
                          }`}
                        />
                        <div
                          className={`fui-hex-mask absolute inset-0 overflow-hidden bg-slate-800 ${statusGlow(
                            latestAgents[focusedIndex].status
                          )}`}
                        >
                          {latestAgents[focusedIndex].photoDataUrl ? (
                            <img
                              src={latestAgents[focusedIndex].photoDataUrl}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-slate-500">
                              —
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Copy on the right */}
                      <div className="min-w-0 flex-1 text-center md:text-left">
                        <p className="text-[9px] uppercase tracking-[0.32em] text-cyan-400/80">
                          CODENAME
                        </p>
                        <p
                          className="mt-1 text-2xl font-semibold tracking-wide text-cyan-50 md:text-3xl"
                          style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                          {latestAgents[focusedIndex].codename}
                        </p>

                        <div className="mt-3 flex items-center justify-center gap-2 md:justify-start">
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                              latestAgents[focusedIndex].status === "approved"
                                ? "bg-emerald-500 text-emerald-950 shadow-[0_0_22px_rgba(16,185,129,0.8)]"
                                : latestAgents[focusedIndex].status === "double-agent"
                                ? "bg-amber-400 text-amber-950 shadow-[0_0_22px_rgba(251,191,36,0.8)]"
                                : "bg-rose-500 text-rose-950 shadow-[0_0_22px_rgba(244,63,94,0.8)]"
                            }`}
                          >
                            {statusLabel(latestAgents[focusedIndex].status)}
                          </span>
                        </div>

                        {/* Divider line */}
                        <div className="mt-4 h-px w-full bg-slate-700/80" />

                        {latestAgents[focusedIndex].story && (
                          <p className="mt-3 text-xs leading-relaxed text-slate-200 md:text-sm">
                            {latestAgents[focusedIndex].story}
                          </p>
                        )}

                        <div className="mt-2 flex items-center justify-between text-[9px] text-slate-500">
                          <span>SRC: DB.ALPHA</span>
                          <svg
                            className="h-3 w-10 text-cyan-500/70"
                            viewBox="0 0 40 12"
                            preserveAspectRatio="none"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.7"
                              points="0,10 4,6 9,8 14,4 20,6 26,2 32,5 38,1"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Footer: command-prompt style + System Access (QR) module */}
          <footer
            className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-6 border-t border-cyan-500/25 bg-slate-950/95 px-4 py-3 backdrop-blur-md md:px-6"
            style={{ fontFamily: "var(--font-fui-mono)" }}
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-cyan-300/90">
                <span className="text-emerald-400/90">USER</span>
                <span className="text-cyan-500">@</span>
                <span className="text-cyan-400">ROSTER</span>
                <span className="text-slate-500">:~$</span>
                <span className="ml-1 text-cyan-200/90">SCAN_TO_REGISTER_</span>
                <span className="animate-pulse text-cyan-400">▌</span>
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400">
                Input required: scan QR with device camera to open Agent Scanner.
              </p>
            </div>
            {/* System Access module: QR + scanning beam + rotating frame */}
            <div className="fui-qr-rotate-frame relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-cyan-400/50 bg-slate-900/95 p-2.5 shadow-[0_0_28px_rgba(6,182,212,0.35)]">
              <div className="fui-qr-scan-beam" />
              {qrValue ? (
                <QRCodeCanvas
                  value={qrValue}
                  size={100}
                  bgColor="#0f172a"
                  fgColor="#67e8f9"
                  includeMargin
                />
              ) : (
                <div className="h-[100px] w-[100px] animate-pulse rounded bg-slate-800" />
              )}
              <p className="absolute -bottom-1 left-1 right-1 text-center text-[8px] uppercase tracking-widest text-cyan-400/70">
                SYSTEM_ACCESS
              </p>
            </div>
          </footer>
        </main>
      </div>

    </div>
  );
}
