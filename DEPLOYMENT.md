# Deploying to Vercel

## 1. Push your code

Make sure your repo is pushed to GitHub, GitLab, or Bitbucket.

## 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New** → **Project** and import your `itbheist` repo.
3. Leave **Root Directory** as the repo root (blank). The Next.js app lives at the root.
4. Leave **Framework Preset** as Next.js (auto-detected). Build and Output settings can stay default.

## 3. Add environment variables

1. In the project, go to **Settings** → **Environment Variables**.
2. Add each variable from `.env.example` for **Production** (and optionally Preview/Development):

   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

3. Use the same values as in your Firebase Console (Project settings → Your apps → Web app config).

Without these, the site still builds and deploys; the main briefing page works, and the **Agent Check-In** (`/agent`) page will show a clear message asking you to add the Firebase env vars and redeploy.

## 4. Deploy

1. Go to the **Deployments** tab and click **Redeploy** on the latest deployment (or push a new commit to trigger a deploy).
2. After the build finishes, open the generated URL to test the site.

## Optional: Deploy from the CLI

From the repo root:

```bash
cd /path/to/itbheist
npm install
npx vercel
```
