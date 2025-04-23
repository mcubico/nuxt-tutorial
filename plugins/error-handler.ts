export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // Send to webhook or api
    console.error(error, instance, info);
  }

  nuxtApp.hook("vue:error", (error, instance, info) => {
    // Send to webhook or api
    console.error(error, instance, info);
  });
})
