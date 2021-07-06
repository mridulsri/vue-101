<template>
  <div>
    <div><slot name="default"></slot></div>
    <div class="header"><slot name="header">Fallback header</slot></div>
    <div class="content"><slot name="content">Fallback content </slot></div>
    <div class="footer"><slot name="footer">Fallback footer</slot></div>
  </div>
</template>

<script>
export default {
  props: ["table"],
};
</script>

<style scoped>
div {
  width: 900px;
  text-align: center;
}
.header {
  height: 50px;
  background-color: navy;
  color: white;
}
.content {
  height: 200px;
  display: table;
  vertical-align: middle;
}

.footer {
  height: 50px;
  background-color: gray;
  color: white;
}
</style>
