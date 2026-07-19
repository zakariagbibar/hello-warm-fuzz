// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// DEPLOY_TARGET controls the Nitro build preset.
//   - default (unset)      -> cloudflare (Lovable hosting)
//   - DEPLOY_TARGET=vercel -> vercel (Vercel serverless functions)
//   - DEPLOY_TARGET=node   -> node-server (self-hosted Node)
const preset =
  process.env.DEPLOY_TARGET === "vercel"
    ? "vercel"
    : process.env.DEPLOY_TARGET === "node"
      ? "node-server"
      : undefined;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  ...(preset ? { nitro: { preset } } : {}),
});
