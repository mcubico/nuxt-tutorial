// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Bitcubico Nuxt Tutorial",
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    // can be overridden by NUXT_API_SECRET environment variable
    apiSecret: "123",
    // Keys within public are also exposed client-side
    // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    public: {
      apiHost: "https://api-host.com",
      apiBase: "api",
      apiVersion: "v1"
    },
  },
});
