<script setup lang="ts">
import appConfig from "./app.config";

const { meta } = useRoute();

useHead({
  meta: [{ property: "og:title", content: `${appConfig.title} | ${meta.title}` }],
  titleTemplate: (titleChunk: unknown) => {
    console.debug("titleChunk =>", titleChunk);
    return titleChunk !== appConfig.title
      ? `${titleChunk} %separator %siteName`
      : "%siteName";
  },
  templateParams: {
    siteName: appConfig.title,
    separator: "|",
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
