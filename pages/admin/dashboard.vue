<script setup lang="ts">
import auth from "~/middleware/auth";

definePageMeta({
  middleware: auth,
});
</script>

<template>
  <!-- ========== DashboardPage ========== -->
  <h1>Admin Dashboard</h1>
</template>
