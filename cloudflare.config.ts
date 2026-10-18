import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "36429b0761be48e1ad616696ba3fb3b7",
  worker: defineWorker({
    name: "marcello-orla-web",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-18",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      SUPABASE_URL: bindings.text("https://gpbkbszchibjtdmkliah.supabase.co"),
      SUPABASE_PUBLISHABLE_KEY: bindings.secret(),
    },
  }),
});
