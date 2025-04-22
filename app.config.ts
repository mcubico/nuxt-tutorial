export default defineAppConfig({
  title: "Bitcubico Nuxt Tutorial",
  description: "Main description",
  tags: "tag_1, tag_2, tag_3,...",
  lang: "es",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000",
    },
  },
  pageTransition: {
    name: "page",
    mode: "out-in", // default
  },
  layoutTransition: {
    name: "layout",
    mode: "out-in", // default
  },
});
