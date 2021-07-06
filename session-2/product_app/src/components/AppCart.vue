<template>
  <div></div>
</template>

<script>
export default {
  name: "AppCart",
  data() {
    return {
      carts: [],
    };
  },
  mounted() {
    this.$root.$on("update-cart", (obj) => {
      this.carts.push(obj);
    });
  },
};
</script>

<style lang="scss" scoped></style>
