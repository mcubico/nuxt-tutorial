<template>
  <!-- ========== DefaultLayout ========== -->
  <div>
    <OrganismsHeader />
    <slot />
    <OrganismsFooter />
  </div>
</template>

<style scoped>
div {
  background-color: lightgreen;
  padding: 20px;
  height: 100vh;
}
</style>
