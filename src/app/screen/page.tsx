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
  achievementTitle?: string;
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
    achievementTitle: data.achievementTitle,
  };
}

const PARALLAX_SENSITIVITY = 0.012;
const FOCUS_CYCLE_MS = 8000;

function SmallAgentCard({ agent }: { agent: AgentDoc }) {
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
      ? "shadow-[0_0_8px_rgba(251,191,36,0.35)]"
      : isImposter
        ? "shadow-[0_0_8px_rgba(239,68,68,0.35)]"
        : "shadow-[0_0_8px_rgba(34,211,238,0.35)]";
  return (
    <div
      key={agent.id}
      className={`min-h-[9rem] min-w-[7rem] p-[1px] ${
        isImposter
          ? "bg-red-500/30 fui-imposter-flicker"
          : agent.status === "double-agent"
            ? "bg-amber-500/25"
            : "bg-cyan-500/30"
      }`}
      style={{
        clipPath:
          "polygon(0% 8px, 8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%)",
      }}
    >
      <div
        className="fui-bloom bg-slate-950/90 backdrop-blur-md"
        style={{
          fontFamily: "var(--font-fui-mono)",
          clipPath:
            "polygon(0% 7px, 7px 0%, 100% 0%, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0% 100%)",
        }}
      >
        <div className="flex justify-between items-center border-b border-cyan-900/50 py-0.5 px-1.5">
          <span className="font-mono text-[6px] tracking-[0.1em] text-cyan-500/70 uppercase break-all">
            {agent.id.slice(-6)}
          </span>
          <div className="flex gap-0.5">
            {[1, 2].map((j) => (
              <div
                key={j}
                className="h-0.5 w-0.5 rotate-45 bg-cyan-500/50"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-1.5 p-1.5">
          <div className="relative shrink-0">
            <div
              className={`h-9 w-9 bg-cyan-500/20 p-[1px] ${hexGlow}`}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {agent.photoDataUrl ? (
                <img
                  src={agent.photoDataUrl}
                  alt=""
                  className="h-full w-full object-cover"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center text-[6px] text-slate-500"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  —
                </div>
              )}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[6px] text-slate-400 uppercase">
              Codename
            </p>
            <p className="font-mono text-[7px] font-bold uppercase tracking-tight text-cyan-50 break-words">
              {agent.codename}
            </p>
            <p className="mt-0.5 font-mono text-[6px] uppercase text-cyan-500/80">
              Achievement
            </p>
            <p className="font-mono text-[6px] text-cyan-200/90">
              {agent.achievementTitle ?? "—"}
            </p>
            <div
              className={`mt-1 inline-block rounded border px-1 py-0.5 text-[6px] font-bold bg-black/20 ${statusColor}`}
            >
              {statusDisplay} AGENT
            </div>
          </div>
        </div>
        <div className="relative min-h-[3rem] border-t border-cyan-900/50 py-1 px-1.5 flex flex-col">
          <div className="flex-1 min-h-0">
            {agent.story ? (
              <p className="font-mono text-[6px] leading-tight text-slate-300 whitespace-pre-wrap break-words">
                <span className="text-cyan-500 mr-0.5 opacity-50">&gt;&gt;</span>{" "}
                {agent.story}
              </p>
            ) : (
              <p className="font-mono text-[6px] text-slate-500">
                <span className="text-cyan-500 mr-0.5 opacity-50">&gt;&gt;</span> —
              </p>
            )}
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 opacity-20 border-r border-b border-cyan-400" />
        </div>
        <div className="flex justify-between items-center px-1.5 py-1 opacity-30 font-mono text-[5px] text-cyan-500 uppercase border-t-2 border-cyan-500/50 bg-cyan-950/30">
          <span>SRC: DB.ALPHA</span>
          <span>GRID_REF</span>
        </div>
      </div>
    </div>
  );
}

export default function ScreenPage() {
  const [agents, setAgents] = useState<AgentDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [qrValue, setQrValue] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [clock, setClock] = useState("");
  const [coords, setCoords] = useState("0.00 / 0.00");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (typeof document === "undefined") return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const base =
      process.env.NEXT_PUBLIC_APP_URL?.trim() || window.location.origin;
    setQrValue(`${base.replace(/\/$/, "")}/agent`);
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

  // Cycle center card through agents in order
  useEffect(() => {
    if (agents.length <= 1) return;
    const id = setInterval(() => {
      setFocusedIndex((i) => (i + 1) % agents.length);
    }, FOCUS_CYCLE_MS);
    return () => clearInterval(id);
  }, [agents.length]);

  const effectiveFocusedIndex =
    agents.length > 0 ? focusedIndex % agents.length : 0;
  const focusedAgent = agents[effectiveFocusedIndex];

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
      {/* Data noise: scrolling hex strip — right above the footnote text (can be cut off by step at QR) */}
      <div
        className="pointer-events-none fixed left-0 right-0 z-30 overflow-hidden border-t border-cyan-500/20 bg-slate-950/60 py-1 font-[var(--font-fui-mono)] text-[9px] tracking-[0.3em] text-cyan-400/50"
        style={{ fontFamily: "var(--font-fui-mono)", bottom: "2.25rem" }}
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

      {/* Header: fixed to viewport (outside tilt so it doesn’t tilt) */}
      <header
        className="fixed left-0 right-0 top-0 z-30 flex shrink-0 items-center justify-between border-b border-cyan-500/25 bg-slate-950/95 px-4 py-2 backdrop-blur-md md:px-6"
        style={{ fontFamily: "var(--font-fui-mono)" }}
      >
        <div className="flex items-center gap-2">
          <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-40" />
          </span>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100"
            style={{ fontFamily: "var(--font-fui-mono)" }}
          >
            IN THE BUFF — AGENT ROSTER
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-cyan-400/50 bg-cyan-500/5 text-cyan-400/60 transition hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-400/80"
            title={isFullscreen ? "Exit full screen" : "Full screen"}
            aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
          >
            {isFullscreen ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
          <Link
            href="/"
            className="rounded border border-cyan-400/60 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
            style={{ fontFamily: "var(--font-fui-mono)" }}
          >
            View Program
          </Link>
        </div>
      </header>

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

          {/* Background: left/right panels so center card doesn't cover any; center overlay cycles. */}
          <section className="relative flex flex-1 overflow-hidden pb-28 pt-11">
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
            ) : agents.length === 0 ? (
              <div className="flex min-h-[40vh] items-center justify-center">
                <p
                  className="max-w-sm text-center text-sm text-slate-400"
                  style={{ fontFamily: "var(--font-fui-mono)" }}
                >
                  NO AGENTS CLEARED. SCAN QR TO JOIN.
                </p>
              </div>
            ) : (
              (() => {
                const mid = Math.ceil(agents.length / 2);
                const leftAgents = agents.slice(0, mid);
                const rightAgents = agents.slice(mid);
                return (
                  <>
                    {/* Left panel: cards never sit under the center overlay */}
                    <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden px-1 md:px-2">
                      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {leftAgents.map((agent) => (
                          <SmallAgentCard key={agent.id} agent={agent} />
                        ))}
                      </div>
                    </div>
                    {/* Right panel: same, center stays clear */}
                    <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden px-1 md:px-2">
                      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {rightAgents.map((agent) => (
                          <SmallAgentCard key={agent.id} agent={agent} />
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()
            ) }
          </section>
        </main>
      </div>

      {/* Footer: single stepped platform — one clip-path, one background, QR inside the same block */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-30 flex h-[120px] flex-row items-end border-t-2 border-cyan-500/50 bg-slate-950/95 backdrop-blur-md"
        style={{
          fontFamily: "var(--font-fui-mono)",
          clipPath:
            "polygon(0% 100%, 0% 70%, calc(100% - 124px) 70%, calc(100% - 124px) 0%, 100% 0%, 100% 100%)",
        }}
      >
        {/* Left: thin strip — waveform beside footnote text, text vertically centered */}
        <div className="flex min-h-0 min-w-0 flex-1 items-center gap-3 pb-2 pl-4 pr-2 md:pl-6">
          <div className="flex h-12 shrink-0 items-end gap-1">
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
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-cyan-300/90 leading-tight">
              <span className="text-emerald-400/90">USER</span>
              <span className="text-cyan-500">@</span>
              <span className="text-cyan-400">ROSTER</span>
              <span className="text-slate-500">:~$</span>
              <span className="ml-1 text-cyan-200/90">SCAN_TO_REGISTER_</span>
              <span className="animate-pulse text-cyan-400">▌</span>
            </p>
            <p className="mt-0.25 text-[9px] text-slate-400 leading-tight">
              Input required: scan QR with device camera to open Agent Scanner.
            </p>
          </div>
        </div>
        {/* Right: tall block is same footer — QR frame lives inside this platform */}
        <div className="relative flex h-full w-[124px] shrink-0 items-center justify-center">
          <div className="fui-qr-rotate-frame relative flex h-[108px] w-[108px] items-center justify-center overflow-hidden rounded border border-cyan-400/40 bg-slate-900/90">
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
          </div>
          <p className="absolute bottom-2 left-0 right-0 text-center text-[7px] uppercase tracking-widest text-cyan-400/50">
            SYSTEM_ACCESS
          </p>
        </div>
      </footer>

      {/* Center card: outside tilt container so fixed is viewport-relative; left/top 50% + translate for true center */}
      {!loading && !error && agents.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-10">
          <div className="pointer-events-auto absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4">
            {focusedAgent && (() => {
              const agent = focusedAgent;
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
                  ? "shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                  : isImposter
                    ? "shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                    : "shadow-[0_0_15px_rgba(34,211,238,0.4)]";
              return (
                <div
                  className={`p-[1px] ${
                    isImposter
                      ? "bg-red-500/30 fui-imposter-flicker"
                      : agent.status === "double-agent"
                        ? "bg-amber-500/25"
                        : "bg-cyan-500/30"
                  }`}
                  style={{
                    clipPath:
                      "polygon(0% 15px, 15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%)",
                  }}
                >
                  <div
                    className="fui-bloom bg-slate-950/95 backdrop-blur-xl"
                    style={{
                      fontFamily: "var(--font-fui-mono)",
                      clipPath:
                        "polygon(0% 14px, 14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%)",
                    }}
                  >
                    <div className="flex justify-between items-center border-b border-cyan-900/50 pb-2 pt-1.5 px-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-500/70 uppercase">
                        AGENT_REF_ID: {agent.id.slice(-8)}
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((j) => (
                          <div
                            key={j}
                            className="h-1 w-1 rotate-45 bg-cyan-500/50"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 p-4">
                      <div className="relative shrink-0">
                        <div
                          className={`h-24 w-24 bg-cyan-500/20 p-1 ${hexGlow}`}
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
                              className="flex h-full w-full items-center justify-center text-slate-500 text-xs"
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
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                          Codename
                        </p>
                        <h2 className="text-xl font-bold uppercase tracking-tighter text-cyan-50 leading-tight md:text-2xl">
                          {agent.codename}
                        </h2>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-cyan-500/80">
                          Achievement
                        </p>
                        <p className="text-sm font-medium text-cyan-200/90">
                          {agent.achievementTitle ?? "—"}
                        </p>
                        <div
                          className={`mt-2 inline-block rounded-sm border px-3 py-1 text-[10px] font-bold bg-black/20 ${statusColor}`}
                        >
                          {statusDisplay} AGENT
                        </div>
                      </div>
                    </div>
                    <div className="relative border-t border-cyan-900/50 pt-3 px-4 pb-2">
                      {agent.story ? (
                        <p className="font-mono text-xs leading-relaxed text-slate-300">
                          <span className="text-cyan-500 mr-1.5 opacity-50">
                            &gt;&gt;
                          </span>
                          {agent.story}
                        </p>
                      ) : (
                        <p className="font-mono text-xs text-slate-500">
                          <span className="text-cyan-500 mr-1.5 opacity-50">
                            &gt;&gt;
                          </span>
                          —
                        </p>
                      )}
                      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-20 border-r border-b border-cyan-400" />
                    </div>
                    <div className="flex justify-between items-center px-4 py-1 opacity-30 font-mono text-[8px] text-cyan-500 uppercase border-t-2 border-cyan-500/50 bg-cyan-950/30">
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
          </div>
        </div>
      )}

    </div>
  );
}
