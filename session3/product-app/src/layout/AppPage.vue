<template>
  <!-- Begin page content -->
  <main role="main" class="container">
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  margin-top: 60px;
}
main > .container {
  width: auto;
  max-width: 680px;
  padding: 60px 15px 0;
}

/* .container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
} */
</style>
