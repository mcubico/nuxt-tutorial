<script setup lang="ts">
useHead({
  title: "Posts",
});
</script>

<template>
  <!-- ========== AboutPage ========== -->
  <div>
    <h1>Posts</h1>

    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/blog/posts/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/blog/posts/2">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
