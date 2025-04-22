<script setup lang="ts">
import { changeColorState } from "~/store/shared/actions";

useHead({
  title: "Home",
});

const colorState = useColor();

const setTimerColor = (color: string, sleepTime: number = 2000) =>
  setTimeout(() => {
    changeColorState(color);
  }, sleepTime);

setTimerColor("white", 3000);
setTimerColor("black");
</script>

<template>
  <!-- ========== IndexPage ========== -->
  <div>
    <h1>Home</h1>
    <pre>{{ colorState }}</pre>
  </div>
</template>
