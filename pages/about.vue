<script setup lang="ts">
import { changeColorState } from "~/store/shared/actions";

useHead({
  title: "About",
});

const colorState = useColor();

const setTimerColor = (color: string, sleepTime: number = 2000) =>
  setTimeout(() => {
    changeColorState(color);
  }, sleepTime);

setTimerColor("yellow", 3000);
setTimerColor("blue");
</script>

<template>
  <!-- ========== AboutPage ========== -->
  <div>
    <h1>About</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <pre>{{ colorState }}</pre>
  </div>
</template>
