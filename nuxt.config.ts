// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    // can be overridden by NUXT_API_SECRET environment variable
    apiSecret: "123",
    // Keys within public are also exposed client-side
    // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    public: {
      apiHost: "https://api-host.com",
      apiBase: "api",
      apiVersion: "v1",
    },
  },
  modules: [
    //Add @nuxt/test-utils/module to your nuxt.config file (optional). It adds a Vitest integration to your Nuxt DevTools which supports running your unit tests in development.
    '@nuxt/test-utils/module'
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
