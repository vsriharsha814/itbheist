"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  type DocumentData,
} from "firebase/firestore";
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

function safeFileName(codename: string, id: string, index: number): string {
  const base = codename.replace(/[^a-zA-Z0-9-_]/g, "_").slice(0, 32) || "agent";
  return `${base}_${id.slice(-6)}_${index}.png`;
}

function downloadDataUrl(dataUrl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function ScreenDownloadPage() {
  const [agents, setAgents] = useState<AgentDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const db = getDb();
    if (!db) {
      setError("Firestore is not configured. Check your Firebase env vars.");
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
        setError("Could not load agents from Firestore.");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const withPhotos = agents.filter((a) => a.photoDataUrl);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-lg font-mono uppercase tracking-wider text-cyan-400">
            Roster — Export pictures
          </h1>
          <Link
            href="/screen"
            className="text-sm font-mono text-cyan-500 hover:text-cyan-400 underline"
          >
            ← Back to roster
          </Link>
        </div>

        {loading && (
          <p className="font-mono text-sm text-slate-500">Loading…</p>
        )}
        {error && (
          <p className="font-mono text-sm text-rose-400">{error}</p>
        )}
        {!loading && !error && withPhotos.length === 0 && (
          <p className="font-mono text-sm text-slate-500">
            No agents with photos yet.
          </p>
        )}
        {!loading && !error && withPhotos.length > 0 && (
          <>
            <p className="font-mono text-xs text-slate-500 mb-4">
              {withPhotos.length} picture{withPhotos.length !== 1 ? "s" : ""}.
              Click a link to download.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {withPhotos.map((agent, index) => (
                <li
                  key={agent.id}
                  className="rounded border border-slate-700 bg-slate-900/80 overflow-hidden"
                >
                  <div className="aspect-[3/4] bg-slate-800 relative">
                    {agent.photoDataUrl && (
                      <img
                        src={agent.photoDataUrl}
                        alt={agent.codename}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-2">
                    <p className="font-mono text-xs text-cyan-300 truncate">
                      {agent.codename}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        agent.photoDataUrl &&
                        downloadDataUrl(
                          agent.photoDataUrl,
                          safeFileName(agent.codename, agent.id, index)
                        )
                      }
                      className="font-mono text-[10px] text-cyan-500 hover:text-cyan-400 underline mt-1"
                    >
                      Download
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
