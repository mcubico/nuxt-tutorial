<script setup lang="ts">
const { id } = useRoute().params;

useHead({
  title: "Post Detail",
});
</script>

<template>
  <!-- ========== PostDetailPage ========== -->
  <div>
    <h1>Post Detail {{ id }}</h1>
  </div>
</template>
