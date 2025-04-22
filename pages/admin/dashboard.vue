<script setup lang="ts">
import auth from "~/middleware/auth";

definePageMeta({
  middleware: auth,
});

useHead({
  title: "Admin | Dashboard",
});
</script>

<template>
  <!-- ========== DashboardPage ========== -->
  <div>
    <h1>Admin Dashboard</h1>
  </div>
</template>
