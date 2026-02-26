"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  type DocumentData,
} from "firebase/firestore";
import { AGENT_TEMPLATES, type AgentTemplate } from "@/data/agent-templates";
import { getDb } from "@/lib/firebase";
import Link from "next/link";

type AgentStatus = "approved" | "double-agent" | "imposter";

function pickTemplate(usedCodeNames: string[]): AgentTemplate {
  const available = AGENT_TEMPLATES.filter(
    (t) => !usedCodeNames.includes(t.code_name)
  );
  const pool = available.length > 0 ? available : AGENT_TEMPLATES;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

async function optimizeImageToPassport(file: File): Promise<string> {
  const MAX_WIDTH = 480; // roughly passport ratio 3:4
  const MAX_HEIGHT = 640;
  const QUALITY = 0.7;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const targetRatio = MAX_WIDTH / MAX_HEIGHT;
        const srcRatio = img.width / img.height;

        let sx = 0;
        let sy = 0;
        let sWidth = img.width;
        let sHeight = img.height;

        if (srcRatio > targetRatio) {
          // Source is wider than target: crop left/right
          sHeight = img.height;
          sWidth = img.height * targetRatio;
          sx = (img.width - sWidth) / 2;
          sy = 0;
        } else {
          // Source is taller than target: crop top/bottom
          sWidth = img.width;
          sHeight = img.width / targetRatio;
          sx = 0;
          sy = (img.height - sHeight) / 2;
        }

        canvas.width = MAX_WIDTH;
        canvas.height = MAX_HEIGHT;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas not supported"));
          return;
        }

        ctx.drawImage(
          img,
          sx,
          sy,
          sWidth,
          sHeight,
          0,
          0,
          MAX_WIDTH,
          MAX_HEIGHT
        );

        const dataUrl = canvas.toDataURL("image/jpeg", QUALITY);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Image load error"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("File read error"));
    reader.readAsDataURL(file);
  });
}

function generateStatus(): AgentStatus {
  const roll = Math.random();
  if (roll < 0.65) return "approved";
  if (roll < 0.85) return "double-agent";
  return "imposter";
}

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

export default function AgentPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [codename, setCodename] = useState<string | null>(null);
  const [status, setStatus] = useState<AgentStatus | null>(null);
  const [usedCodeNames, setUsedCodeNames] = useState<string[]>([]);

  // Load already-used codenames so we can prefer unused templates
  useEffect(() => {
    const db = getDb();
    if (!db) return;

    const load = async () => {
      try {
        const snap = await getDocs(collection(db, "agents"));
        const names: string[] = [];
        snap.forEach((doc) => {
          const data = doc.data() as DocumentData;
          if (data?.codename && typeof data.codename === "string") {
            names.push(data.codename);
          }
        });
        setUsedCodeNames(Array.from(new Set(names)));
      } catch (err) {
        console.error("Failed to load existing agent codenames", err);
      }
    };

    void load();
  }, []);

  const disabled = useMemo(() => loading || !file, [loading, file]);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selected = event.target.files?.[0];
      if (!selected) return;

      if (!selected.type.startsWith("image/")) {
        setError("Please upload an image file.");
        setFile(null);
        setPreviewUrl(null);
        return;
      }

      setError(null);
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
      setCodename(null);
      setStatus(null);
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (!file) return;

      try {
        setLoading(true);
        setError(null);

        const template = pickTemplate(usedCodeNames);
        const newCodename = template.code_name;
        const newStatus = generateStatus();

        const db = getDb();
        if (!db) {
          throw new Error("Firestore is not configured");
        }

        const optimizedPhoto = await optimizeImageToPassport(file);

        await addDoc(collection(db, "agents"), {
          codename: newCodename,
          status: newStatus,
          photoDataUrl: optimizedPhoto,
          story: template.story,
          achievementTitle: template.achievement_title,
          createdAt: serverTimestamp(),
        });

        // Simulate a short "scanning" delay for effect
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setCodename(newCodename);
        setStatus(newStatus);
        setUsedCodeNames((prev) =>
          prev.includes(newCodename) ? prev : [...prev, newCodename]
        );
      } catch (err) {
        console.error(err);
        setError(
          "Secure channel error. Check that Firebase Firestore is configured and try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [file, usedCodeNames]
  );

  return (
    <div className="scanlines min-h-screen bg-black text-slate-100">
      <main className="mx-auto flex min-h-screen w-full max-w-lg flex-col gap-6 px-4 pb-10 pt-6 md:max-w-2xl md:gap-8 md:px-6 lg:max-w-3xl lg:px-8">
        <header className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 backdrop-blur">
          <div className="space-y-0.5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-300/80">
              In The Buff
            </p>
            <p className="text-sm font-semibold text-emerald-100 md:text-base">
              Agent Clearance Scanner
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Station 02
            </p>
            <Link
              href="/"
              className="text-[11px] font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Back to briefing
            </Link>
          </div>
        </header>

        <section className="hud-card rounded-3xl border border-emerald-500/25 bg-slate-900/60 px-4 py-5 backdrop-blur md:px-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
            Step 1 — Upload
          </p>
          <h1 className="mt-2 text-2xl font-semibold leading-snug text-slate-50 md:text-3xl">
            Drop your face into the system.
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            We&apos;ll generate a classified codename and decide if you&apos;re
            a trusted operative, a double agent, or an imposter.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <label
              htmlFor="photo"
              className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-600 bg-slate-950/60 px-4 py-6 text-center text-xs text-slate-300 transition hover:border-emerald-400/70 hover:bg-slate-900/70"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-32 w-32 rounded-xl border border-emerald-500/40 object-cover shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-600 text-2xl text-slate-500">
                  +
                </span>
              )}
              <div className="space-y-1">
                <p className="font-medium text-slate-100">
                  Tap to upload a photo
                </p>
                <p className="text-[11px] text-slate-400">
                  Face clearly visible. No sunglasses. No disguises. (Okay,
                  maybe a little disguise.)
                </p>
              </div>
              <input
                id="photo"
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            <button
              type="submit"
              disabled={disabled}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-emerald-500/70 bg-emerald-500/20 px-4 py-2.5 text-sm font-semibold text-emerald-50 shadow-[0_0_18px_rgba(16,185,129,0.6)] transition hover:border-emerald-300 hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/60"
            >
              {loading ? "Scanning..." : "Scan for clearance"}
            </button>

            {error && (
              <p className="text-xs text-rose-300">
                {error}
              </p>
            )}
          </form>
        </section>

        {codename && status && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                Step 2 — Results
              </h2>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] ${statusColorClasses(
                  status
                )}`}
              >
                {statusLabel(status)}
              </span>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-4 md:flex-row md:items-center md:px-5">
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Agent"
                  className="h-24 w-24 rounded-xl border border-slate-600 object-cover md:h-28 md:w-28"
                />
              )}
              <div className="space-y-2 text-xs text-slate-200 md:text-sm">
                <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">
                  Assigned Codename
                </p>
                <p className="text-lg font-semibold text-emerald-200 md:text-xl">
                  {codename}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Status: {statusLabel(status)}
                </p>
                <p className="mt-1 text-[11px] text-slate-300 md:text-xs">
                  Memorize your codename. This will be your identifier when you join the agency.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
