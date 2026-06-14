// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set STATIC_BUILD=1 to produce a fully pre-rendered, static-only site
// (no server/worker) suitable for Cloudflare Pages or any static host.
// In that mode we:
//   - disable nitro so no Cloudflare Worker / server bundle is emitted,
//   - prerender every route to HTML (crawlLinks follows the in-app nav),
//   - keep an SPA shell so client-side navigation still works after load.
const STATIC_BUILD = process.env.STATIC_BUILD === "1";

export default defineConfig({
  // Skip nitro in static mode — we want plain HTML + assets, not a server bundle.
  ...(STATIC_BUILD ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(STATIC_BUILD
      ? {
          // Crawl from "/" and write static HTML for every reachable route.
          // (No SPA shell: every route is prerendered, so each gets its own
          // index.html — including the root "/". The router still does
          // client-side navigation after the initial HTML hydrates.)
          prerender: {
            enabled: true,
            crawlLinks: true,
            // Belt-and-suspenders: explicitly seed every known route in case a
            // link isn't discoverable by the crawler.
            pages: [
              { path: "/" },
              { path: "/sobre" },
              { path: "/servicos" },
              { path: "/projetos" },
              { path: "/eventos" },
              { path: "/noticias" },
              { path: "/apoiar" },
              { path: "/contactos" },
            ],
          },
        }
      : {}),
  },
});
