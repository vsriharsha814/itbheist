# Deploying to Vercel

## 1. Push your code

Make sure your repo is pushed to GitHub, GitLab, or Bitbucket.

## 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New** → **Project** and import your `ITBHeist` repo.
3. **Important:** Set **Root Directory** to `web`.
   - After importing, open the project → **Settings** → **General**.
   - Under **Root Directory**, click **Edit**, enter `web`, and save.
4. Leave **Framework Preset** as Next.js (auto-detected). Build and Output settings can stay default.

## 3. Add environment variables

1. In the project, go to **Settings** → **Environment Variables**.
2. Add each variable from `web/.env.example` for **Production** (and optionally Preview/Development):

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

## Optional: Deploy from the repo root

If you prefer to run Vercel CLI from the repo root:

```bash
cd /path/to/ITBHeist
npx vercel
```

When prompted, set the root directory to `web`, or link the project in the Vercel dashboard with Root Directory set to `web` as above.
