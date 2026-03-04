## In The Buff — Operation Classified

This project powers a live, spy–themed experience for the In The Buff audience. It has two main faces:

- **Home briefing (`/`)**: a narrative landing page that explains the “operation”, the concert program, and how the audience interacts with the system.
- **Screens (`/screen` and `/agent`)**: high–fidelity “tactical UI” surfaces designed to feel like a classified surveillance console.

The goal is to make the show feel like a live mission control room, where every phone scan and agent photo becomes part of a living roster on the big screen.

---

## Main routes

### `/` — Briefing / Home

- Explains the concept of *Operation Classified* and how to participate.
- Links out to:
  - **Agent Check–In (`/agent`)** for uploading a photo.
  - **Big Screen Roster (`/screen`)** for the venue display.
- Written as an in–universe briefing so the rest of the UI feels diegetic, not like a regular website.

### `/agent` — Agent Check–In

- Minimal, phone–friendly flow used at check–in stations or by scanning QR codes.
- Lets a user:
  - Upload a face photo.
  - Optionally enter a **name or agent alias** (stored as `agentAlias`).
    - If left blank, the system records this as **`CLASSIFIED`** so the big screen never shows an empty label.
- The app:
  - Crops and resizes the image into a **passport–style 3:4 portrait**.
  - Picks a codename and story from `src/data/agent-templates.ts`.
  - Assigns a status (`approved`, `double-agent`, `imposter`).
  - Writes a document to Firestore’s `agents` collection:

    ```ts
    {
      codename: string;
      status: "approved" | "double-agent" | "imposter";
      photoDataUrl: string;       // optimized 3:4 JPEG data URL
      story: string;
      achievementTitle: string;
      agentAlias: string;         // user-entered alias or "CLASSIFIED"
      createdAt: serverTimestamp();
    }
    ```

### `/screen` — Big Screen Agent Roster

This is the venue-facing display, designed to be run full screen on a projector.

- **Continuous data wall**
  - Shows small agent dossier cards in a **10-wide grid** (on large screens).
  - The grid is **vertically auto-scrolling** to give a “live feed” vibe.
  - Data is duplicated until there are at least **60 agents**, and the list length is rounded up to a multiple of 10 so **every row is full**.
  - The array is then doubled again in memory so the `translateY(-50%)` animation can loop seamlessly with no visible “jump”.

- **Center focus card**
  - A larger, glowing dossier floats above the grid and cycles through agents.
  - Shows:
    - Codename and achievement.
    - **Agent alias** (or `CLASSIFIED` if the user withheld their name).
    - Threat–level bar, coordinates, and mission text.
  - The card uses chamfered, glowing borders and camera–lens styling to match the sci–fi HUD aesthetic.

- **Other UI layers**
  - Fixed header with program title, simulated grid reference, and clock.
  - Stepped footer with waveform, shell–style prompt, and QR code for check–in.
  - Hex–grid, scanlines, and subtle parallax to keep the screen feeling “alive”.

## Architecture overview

### Tech stack

- **Framework**: Next.js App Router (`src/app/*`).
- **UI**: Tailwind CSS plus a small set of custom FUI utility classes in `globals.css` (scanlines, hex grid, glow, etc.).
- **Fonts**: Geist for general UI, JetBrains Mono for the “terminal” look (`--font-fui-mono`).
- **Data**: Firebase Firestore, using the browser SDK in client components.

### Data model

- Single primary collection: **`agents`**.
- Documents are written by `/agent` and consumed by `/screen` for the live roster + focus card.
- The roster derives additional, purely visual state on the client:
  - `focusedIndex` for the center card.
  - `mouseTilt`, clock, and fake coordinates for ambience.
  - `scrollAgents`, a derived array that:
    - Starts from Firestore data.
    - Ensures a minimum of 60 entries.
    - Pads to a multiple of 10 for full rows.
    - Is then doubled for infinite scrolling.

### Design intent

- **Diegetic UI**: Everything is styled as if you’re inside a secure ops console—no generic web widgets.
- **Resilient display**:
  - If Firestore isn’t configured, `/screen` shows a clear offline message instead of crashing.
  - If users skip their alias, the UI intentionally renders `CLASSIFIED` so there are no blank labels.
  - The roster animation is built around duplication and masking so it looks continuous at any roster size.
- **Single source of truth**: All visual surfaces pull from the same Firestore `agents` data, which keeps the briefing, screen, and utility pages in sync.

---

## Getting started (local)

```bash
npm install
npm run dev
```

Then open:

- `http://localhost:3000/` for the briefing.
- `http://localhost:3000/agent` on a phone / scanner station.
- `http://localhost:3000/screen` on the big display.

For deployment details and required Firebase env vars, see `DEPLOYMENT.md`.

