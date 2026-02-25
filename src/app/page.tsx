"use client";

import { useCallback, useState } from "react";
import Link from "next/link";

type SetItem = {
  id: number;
  codeName: string;
  title: string;
  approxTime?: string;
  note?: string;
};

type Mission = {
  id: number;
  title: string;
  description: string;
};

const SETLIST: SetItem[] = [
  {
    id: 1,
    codeName: "Cold Open",
    title: "First contact with the audience",
    approxTime: "≈ 6:00 PM",
    note: "Stay sharp — this is your first impression op.",
  },
  {
    id: 2,
    codeName: "Operation Throwback",
    title: "Classic In The Buff charts",
    approxTime: "≈ 6:10 PM",
    note: "Identify any alumni agents singing along.",
  },
  {
    id: 3,
    codeName: "Deep Cover Solos",
    title: "Feature solos from undercover agents",
    approxTime: "≈ 6:25 PM",
    note: "Your mission: do not blow their cover by screaming their real names.",
  },
  {
    id: 4,
    codeName: "Intermission Debrief",
    title: "Short break for snacks and intel gathering",
    approxTime: "≈ 6:40 PM",
    note: "Hydrate. Stretch. Strategize your favorite moment so far.",
  },
  {
    id: 5,
    codeName: "Phase Two",
    title: "New arrangements and secret weapons",
    approxTime: "≈ 6:55 PM",
    note: "Listen for code phrases hidden in the lyrics.",
  },
  {
    id: 6,
    codeName: "Final Transmission",
    title: "Encore & classified goodbyes",
    approxTime: "≈ 7:20 PM",
    note: "Mission complete. Extract safely, humming the last chord.",
  },
];

const MISSIONS: Mission[] = [
  {
    id: 1,
    title: "Silent Applause Protocol",
    description:
      "During one quiet intro, try applauding just by snapping or tapping your fingers.",
  },
  {
    id: 2,
    title: "Codenames Only",
    description:
      "For one full song, refer to your friends only by spy-style codenames.",
  },
  {
    id: 3,
    title: "Eyes Only Intel",
    description:
      "Spot your favorite harmony line and lock eyes with someone when you hear it.",
  },
];

export default function Home() {
  const [expandedSetId, setExpandedSetId] = useState<number | null>(1);
  const [completedMissions, setCompletedMissions] = useState<
    Record<number, boolean>
  >({});

  const toggleMission = useCallback((id: number) => {
    setCompletedMissions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  const scrollToOrder = useCallback(() => {
    const el = document.getElementById("operation-order");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="scanlines min-h-screen bg-black text-slate-100">
      <main className="mx-auto flex min-h-screen w-full max-w-lg flex-col gap-6 px-4 pb-10 pt-6 md:max-w-2xl md:gap-8 md:px-6 lg:max-w-4xl lg:gap-10 lg:px-8">
        <header className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 backdrop-blur md:px-5 md:py-4">
          <div className="space-y-0.5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-300/80">
              In The Buff
            </p>
            <p className="text-sm font-semibold text-emerald-100 md:text-base">
              Operation: Classified Briefing
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-xs text-emerald-200/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)] pulse-dot" />
              <span>System Online</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Tonight • Live
            </p>
          </div>
        </header>

        <section className="hud-card rounded-3xl border border-emerald-500/25 bg-slate-900/60 px-4 py-5 backdrop-blur md:px-6 md:py-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
            Mission Briefing
          </p>
          <h1 className="mt-2 text-2xl font-semibold leading-snug text-slate-50 md:text-3xl">
            <span className="text-emerald-300">Your cover:</span> concert
            guest, trusted operative.
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Keep this secure line open to track the live set order, decode
            intel, and accept audience missions. No screenshots. No spoilers.
          </p>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Location
              </p>
              <p>CU Boulder • MATH 100</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Status
              </p>
              <p>Operation in progress</p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToOrder}
            className="mt-5 inline-flex w-full items-center justify-between rounded-2xl border border-emerald-500/50 bg-emerald-500/20 px-3 py-2 text-xs font-medium text-emerald-50 shadow-[0_0_18px_rgba(16,185,129,0.6)] transition hover:border-emerald-300 hover:bg-emerald-500/30 active:scale-[0.99]"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              View operation order
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-emerald-100/80">
              Access
            </span>
          </button>
        </section>

        <section id="operation-order" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
              Operation Order
            </h2>
            <span className="rounded-full border border-emerald-500/40 px-2 py-0.5 text-[10px] text-emerald-200">
              {SETLIST.length} events
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Tap an operation to reveal the intel. Content and timing are
            approximate — real spies improvise.
          </p>

          <div className="space-y-2.5">
            {SETLIST.map((item, index) => {
              const isExpanded = expandedSetId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setExpandedSetId(isExpanded ? null : item.id)
                  }
                  className="group relative flex w-full items-stretch gap-3 rounded-2xl border border-emerald-500/25 bg-slate-950/60 px-3.5 py-3 text-left transition hover:border-emerald-400/70 hover:bg-slate-900/80 active:scale-[0.99]"
                >
                  <div className="flex flex-col items-center pt-0.5">
                    <span className="text-[10px] font-semibold text-emerald-300/90">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 h-10 w-px bg-gradient-to-b from-emerald-400/70 via-emerald-500/10 to-transparent" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                        {item.codeName}
                      </p>
                      {item.approxTime ? (
                        <p className="text-[11px] text-slate-400">
                          {item.approxTime}
                        </p>
                      ) : null}
                    </div>
                    <p className="text-sm font-medium text-slate-50">
                      {item.title}
                    </p>
                    {isExpanded ? (
                      <p className="mt-1.5 text-xs text-slate-300">
                        {item.note}
                      </p>
                    ) : (
                      <p className="mt-1.5 line-clamp-1 text-xs text-slate-500">
                        Tap to declassify details.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="rounded-full border border-emerald-500/40 px-1.5 py-0.5 text-[10px] text-emerald-200/90 group-hover:border-emerald-300 group-hover:text-emerald-100">
                      {isExpanded ? "Hide" : "Intel"}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {isExpanded ? "CHANNEL OPEN" : "CHANNEL CLOSED"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
              Audience Missions
            </h2>
            <span className="text-[10px] text-slate-400">
              Optional, but highly encouraged.
            </span>
          </div>
          <div className="space-y-2">
            {MISSIONS.map((mission) => {
              const done = completedMissions[mission.id];
              return (
                <button
                  key={mission.id}
                  type="button"
                  onClick={() => toggleMission(mission.id)}
                  className="flex w-full items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-3 text-left text-xs text-slate-200 transition hover:border-emerald-400/60 hover:bg-slate-900/80 active:scale-[0.99]"
                >
                  <div
                    className={`mt-0.5 flex h-4 w-4 items-center justify-center rounded-sm border text-[10px] ${
                      done
                        ? "border-emerald-400 bg-emerald-500/80 text-slate-950 shadow-[0_0_14px_rgba(16,185,129,0.9)]"
                        : "border-slate-600 bg-slate-950/80 text-slate-500"
                    }`}
                  >
                    {done ? "✓" : ""}
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-emerald-100">
                      {mission.title}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {mission.description}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Tap to mark as completed.
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-1 rounded-2xl border border-slate-700/80 bg-slate-950/80 px-3.5 py-3 text-[11px] text-slate-300">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold uppercase tracking-[0.24em] text-slate-400">
              Field Notes
            </p>
            <span className="rounded-full border border-emerald-500/40 px-2 py-0.5 text-[10px] text-emerald-200/90">
              Eyes only
            </span>
          </div>
          <p className="mt-2">
            If a moment tonight makes you laugh, cry, or forget you&apos;re in
            MATH 100, mentally bookmark it. That&apos;s classified intel
            you can debrief about with your fellow agents after the show.
          </p>
        </section>

        <section className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/90 px-3.5 py-3 text-[11px] text-slate-300">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
              Bonus Station
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Want a spy codename? Get scanned by the system.
            </p>
          </div>
          <Link
            href="/agent"
            className="rounded-full border border-emerald-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-500/10"
          >
            Agent Check-In
          </Link>
        </section>

        <footer className="mt-auto flex flex-col items-start justify-between gap-1 pt-2 text-[10px] text-slate-500 md:flex-row md:items-center">
          <span>In The Buff A Cappella</span>
          <span className="uppercase tracking-[0.18em] text-slate-500">
            End of briefing
          </span>
        </footer>
      </main>
    </div>
  );
}
