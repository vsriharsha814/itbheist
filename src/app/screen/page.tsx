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

// 16 non-overlapping slots: min ~18% apart so cards (8.5rem) never touch. Max 16 scattered = 1 focused + 16 scattered.
const SCATTER_SLOTS = [
  { left: 18, top: 20 },
  { left: 38, top: 18 },
  { left: 58, top: 20 },
  { left: 78, top: 22 },
  { left: 85, top: 38 },
  { left: 82, top: 56 },
  { left: 72, top: 72 },
  { left: 52, top: 80 },
  { left: 32, top: 78 },
  { left: 18, top: 68 },
  { left: 12, top: 52 },
  { left: 14, top: 36 },
  { left: 28, top: 48 },
  { left: 50, top: 48 },
  { left: 68, top: 50 },
  { left: 50, top: 64 },
];
const MAX_SCATTERED = SCATTER_SLOTS.length;

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

  // Cycle focus within displayed set only (capped so scattered count ≤ slots = no overlap)
  useEffect(() => {
    const n = Math.min(agents.length, MAX_SCATTERED + 1);
    if (n <= 1) return;
    const id = setInterval(() => {
      setFocusedIndex((i) => (i + 1) % n);
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

  const latestAgents = useMemo(
    () => agents.slice(0, MAX_SCATTERED + 1),
    [agents]
  );

  const effectiveFocusedIndex =
    latestAgents.length > 0
      ? Math.min(focusedIndex, latestAgents.length - 1)
      : 0;

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
                if (i === effectiveFocusedIndex) return null;
                const slotIdx = i < effectiveFocusedIndex ? i : i - 1;
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
                {/* Small FUI cards — compact version of AgentCard */}
                {latestAgents.map((agent, i) => {
                  if (i === effectiveFocusedIndex) return null;
                  const unfocusedRank = i < effectiveFocusedIndex ? i : i - 1;
                  const slotIdx = unfocusedRank;
                  const slot = SCATTER_SLOTS[slotIdx];
                  const isHovered = hoveredCardId === agent.id;
                  const isDimmed =
                    hoveredCardId != null && hoveredCardId !== agent.id;
                  const isImposter = agent.status === "imposter";
                  const statusDisplay =
                    agent.status === "approved"
                      ? "APPROVED"
                      : agent.status === "imposter"
                        ? "IMPOSTER"
                        : "PENDING";
                  const statusColor =
                    agent.status === "double-agent"
                      ? "text-amber-400 border-amber-500/50"
                      : isImposter
                        ? "text-red-500 border-red-500/50"
                        : "text-cyan-400 border-cyan-500/50";
                  const hexGlow =
                    agent.status === "double-agent"
                      ? "shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                      : isImposter
                        ? "shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                        : "shadow-[0_0_10px_rgba(34,211,238,0.4)]";

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
                        className={`fui-bloom border bg-slate-950/90 backdrop-blur-md ${
                          isImposter
                            ? "border-red-500/60 fui-imposter-flicker"
                            : "border-cyan-500/40"
                        } ${isDimmed ? "opacity-50 blur-[1px]" : ""}`}
                        style={{
                          transform: `perspective(420px) rotateX(${2 - (slotIdx % 5) * 0.6}deg) rotateY(${(slotIdx % 3) * 0.9}deg)${isHovered ? " scale(1.05)" : ""}`,
                          transition: "transform 0.2s ease",
                          fontFamily: "var(--font-fui-mono)",
                          clipPath:
                            "polygon(0% 12px, 12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%)",
                        }}
                        onMouseEnter={() => setHoveredCardId(agent.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                      >
                        {/* Tab: Agent ID + small indicator diamonds */}
                        <div className="flex items-center justify-between border-b border-cyan-900/40 bg-cyan-500/10 px-2 py-1">
                          <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300/80 uppercase">
                            ID:{agent.id.slice(-6)}
                          </span>
                          <div className="flex gap-0.5">
                            {[1, 2].map((j) => (
                              <div
                                key={j}
                                className="h-1 w-1 rotate-45 bg-cyan-500/60"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start gap-2 px-2 py-2">
                          {/* Hex photo + scan ring */}
                          <div className="relative shrink-0">
                            <div
                              className={`h-10 w-10 bg-cyan-500/20 p-[2px] ${hexGlow}`}
                              style={{
                                clipPath:
                                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              }}
                            >
                              {agent.photoDataUrl ? (
                                <img
                                  src={agent.photoDataUrl}
                                  alt={agent.codename}
                                  className="h-full w-full object-cover"
                                  style={{
                                    clipPath:
                                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                  }}
                                />
                              ) : (
                                <div
                                  className="flex h-full w-full items-center justify-center text-[9px] text-slate-500"
                                  style={{
                                    clipPath:
                                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                  }}
                                >
                                  —
                                </div>
                              )}
                            </div>
                            <div
                              className="fui-scan-ring pointer-events-none absolute -inset-1 rounded-full border border-dashed border-cyan-500/30"
                              style={{ animationDuration: "10s" }}
                            />
                          </div>

                          {/* Codename + status */}
                          <div className="min-w-0 flex-1">
                            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-400">
                              Codename
                            </p>
                            <p className="truncate text-[11px] font-semibold uppercase tracking-tight text-cyan-50">
                              {agent.codename}
                            </p>
                            <div
                              className={`mt-1 inline-block rounded-sm border px-2 py-0.5 text-[8px] font-bold ${statusColor}`}
                            >
                              {statusDisplay}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Focused FUI card (center) — reference AgentCard layout */}
                {latestAgents[effectiveFocusedIndex] && (() => {
                  const agent = latestAgents[effectiveFocusedIndex];
                  const isImposter = agent.status === "imposter";
                  const statusDisplay =
                    agent.status === "approved"
                      ? "APPROVED"
                      : agent.status === "imposter"
                        ? "IMPOSTER"
                        : "PENDING"; // double-agent shown as PENDING
                  const statusColor =
                    agent.status === "double-agent"
                      ? "text-amber-400 border-amber-500/50"
                      : isImposter
                        ? "text-red-500 border-red-500/50"
                        : "text-cyan-400 border-cyan-500/50";
                  const hexGlow =
                    agent.status === "double-agent"
                      ? "shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                      : isImposter
                        ? "shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                        : "shadow-[0_0_15px_rgba(34,211,238,0.4)]";
                  return (
                    <div
                      className={`absolute left-1/2 top-1/2 z-20 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-[1px] ${
                        isImposter ? "bg-red-500/30 fui-imposter-flicker" : "bg-cyan-500/30"
                      }`}
                      style={{
                        clipPath:
                          "polygon(0% 15px, 15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%)",
                      }}
                    >
                      <div
                        className="bg-slate-950/90 backdrop-blur-xl p-4 flex flex-col gap-4 md:p-6"
                        style={{
                          clipPath:
                            "polygon(0% 14px, 14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%)",
                          fontFamily: "var(--font-fui-mono)",
                        }}
                      >
                        {/* Top ID Tab */}
                        <div className="flex justify-between items-center border-b border-cyan-900/50 pb-2">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-500/70 uppercase">
                            AGENT_REF_ID: {agent.id.slice(-8)}
                          </span>
                          <div className="flex gap-1">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-cyan-500/50 rotate-45"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          {/* Hexagon Image + Scan Ring */}
                          <div className="relative shrink-0">
                            <div
                              className={`w-24 h-24 bg-cyan-500/20 p-1 ${hexGlow}`}
                              style={{
                                clipPath:
                                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              }}
                            >
                              {agent.photoDataUrl ? (
                                <img
                                  src={agent.photoDataUrl}
                                  alt={agent.codename}
                                  className="w-full h-full object-cover"
                                  style={{
                                    clipPath:
                                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                  }}
                                />
                              ) : (
                                <div
                                  className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 text-xs"
                                  style={{
                                    clipPath:
                                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                  }}
                                >
                                  —
                                </div>
                              )}
                            </div>
                            <div
                              className="fui-scan-ring absolute -top-1 -left-1 -right-1 -bottom-1 border border-dashed border-cyan-500/30 rounded-full pointer-events-none"
                              style={{ animationDuration: "10s" }}
                            />
                          </div>

                          {/* Details */}
                          <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                              Codename
                            </span>
                            <h2 className="text-xl font-bold text-white tracking-tighter uppercase leading-none md:text-2xl">
                              {agent.codename}
                            </h2>
                            <div
                              className={`mt-2 inline-block px-3 py-1 text-[10px] font-bold border rounded-sm bg-black/20 animate-pulse ${statusColor}`}
                            >
                              {statusDisplay} AGENT
                            </div>
                          </div>
                        </div>

                        {/* Description Section */}
                        <div className="relative mt-2 border-t border-cyan-900/50 pt-4">
                          {agent.story && (
                            <p className="font-mono text-xs leading-relaxed text-slate-300 antialiased">
                              <span className="text-cyan-500 mr-2 opacity-50">
                                &gt;&gt;
                              </span>
                              {agent.story}
                            </p>
                          )}
                          <div className="absolute bottom-0 right-0 w-8 h-8 opacity-20 border-r border-b border-cyan-400" />
                        </div>

                        {/* System Source Footer */}
                        <div className="flex justify-between items-center opacity-30 font-mono text-[8px] text-cyan-500 uppercase mt-2">
                          <span>SRC: DB.ALPHA_V.2.0</span>
                          <span className="flex items-center gap-2">
                            <div className="w-8 h-[1px] bg-cyan-500" />
                            GRID_REF_029
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
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
