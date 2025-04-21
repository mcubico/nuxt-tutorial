//#region Imports

// VUE
import { defineComponent } from 'vue';

// Vendors
// Hooks
// Models
// Helpers
// Components

//#endregion

export default defineComponent({
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const appConfig = useAppConfig()

    console.debug("runtimeConfig.public =>", runtimeConfig.public);
    console.debug("appConfig =>", appConfig);
    console.debug('import.meta.server =>', import.meta.server);

    if (import.meta.server) {
      const newPrimaryColor = { theme: { colors: { primary: "#c3c3c3" } } }
      updateAppConfig(newPrimaryColor);
      console.debug("appConfig =>", appConfig);
      console.debug("API secret:", runtimeConfig.apiSecret);
    }

    return {}
  },
  name: 'IndexPage',
});
