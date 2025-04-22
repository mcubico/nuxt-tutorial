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
    const params = useRoute()
    return {
      id: computed(() => params.params?.id),
    };
  },
  name: 'PostDetailPage',
});
