"use client";

import { useEffect, useMemo, useState } from "react";
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

function statusColorClasses(status: AgentStatus) {
  switch (status) {
    case "approved":
      return "border-emerald-400 text-emerald-200 bg-emerald-500/10";
    case "double-agent":
      return "border-yellow-400 text-yellow-200 bg-yellow-500/10";
    case "imposter":
      return "border-rose-400 text-rose-200 bg-rose-500/10";
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

export default function ScreenPage() {
  const [agents, setAgents] = useState<AgentDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [qrValue, setQrValue] = useState<string | null>(null);

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

  const latestAgents = useMemo(() => agents.slice(0, 12), [agents]);

  return (
    <div className="scanlines min-h-screen bg-black text-slate-100">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-4 pb-10 pt-6 md:gap-8 md:px-6 lg:gap-10 lg:px-8">
        <header className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 backdrop-blur md:px-5 md:py-4">
          <div className="space-y-0.5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-300/80">
              In The Buff
            </p>
            <p className="text-sm font-semibold text-emerald-100 md:text-base">
              Agent Roster — Live Feed
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Screen • Control Room
            </p>
            <Link
              href="/"
              className="text-[11px] font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              View Program
            </Link>
          </div>
        </header>

        <section className="flex-1 rounded-3xl border border-emerald-500/25 bg-slate-900/70 px-4 py-4 backdrop-blur md:px-6 md:py-6">
          {loading ? (
            <p className="text-sm text-slate-300">Syncing agent intel…</p>
          ) : error ? (
            <p className="text-sm text-rose-300">{error}</p>
          ) : latestAgents.length === 0 ? (
            <p className="text-sm text-slate-300">
              No agents cleared yet. Once someone scans in, their ID card will
              appear here.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-4 shadow-[0_0_24px_rgba(15,23,42,0.9)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-slate-600 bg-slate-900">
                      {agent.photoDataUrl ? (
                        <img
                          src={agent.photoDataUrl}
                          alt={agent.codename}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
                          No photo
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">
                        Agent Codename
                      </p>
                      <p className="text-lg font-semibold text-emerald-200 md:text-xl">
                        {agent.codename}
                      </p>
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] ${statusColorClasses(
                          agent.status
                        )}`}
                      >
                        {statusLabel(agent.status)}
                      </span>
                    </div>
                  </div>
                  {agent.story && (
                    <p className="text-xs text-slate-300 md:text-sm">
                      {agent.story}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-2 flex items-center justify-between gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/90 px-4 py-3 text-[11px] text-slate-300 md:px-5">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">
              Join The Operation
            </p>
            <p className="text-xs text-slate-300 md:text-sm">
              Scan this QR code to open the Agent Clearance Scanner on your
              phone, take a photo, and get your codename.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 p-2">
            {qrValue ? (
              <QRCodeCanvas
                value={qrValue}
                size={96}
                bgColor="#020617"
                fgColor="#e5e7eb"
                includeMargin
              />
            ) : (
              <div className="h-24 w-24 animate-pulse rounded-lg bg-slate-800" />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

