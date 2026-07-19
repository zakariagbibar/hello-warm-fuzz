# Deployment

## Project structure

```
src/
├── routes/                     # File-based routing (TanStack Router)
│   ├── __root.tsx              # Root layout, <head>, providers
│   └── index.tsx               # "/" — thin route, delegates to a feature
├── features/                   # Feature-scoped code (scalable domain slices)
│   └── landing/
│       ├── LandingPage.tsx     # Page composition
│       ├── components/         # Feature-only UI
│       └── lib/data.ts         # Feature-only data
├── components/ui/              # Shared shadcn/ui primitives
├── hooks/                      # Cross-feature hooks
├── integrations/supabase/      # Auto-generated Supabase clients (do not edit)
├── lib/                        # Cross-cutting utilities
├── server.ts                   # SSR entry (Nitro)
├── start.ts                    # TanStack Start config + global middleware
└── styles.css                  # Tailwind v4 theme
```

Add a new feature by creating `src/features/<name>/` with its own
`components/`, `lib/`, `hooks/`, and page composition file, then a thin
route file under `src/routes/` that renders it.

## Deploy to Vercel

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project in Vercel — the included `vercel.json` sets the
   build command and output directory. Framework preset: **Other**.
3. Set an environment variable on the Vercel project:

   | Key              | Value    |
   | ---------------- | -------- |
   | `DEPLOY_TARGET`  | `vercel` |

   This switches the Nitro build preset from `cloudflare` (Lovable) to
   `vercel` so the output is a Vercel serverless function.

4. Add your Supabase env vars (copy from `.env`):

   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (only if you add server functions that need admin access)

5. Deploy. Vercel will run `bun install` then `bun run build`, and serve
   the SSR output from `.output/`.

## Local build for Vercel target

```bash
DEPLOY_TARGET=vercel bun run build
```
