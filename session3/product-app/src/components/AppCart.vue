<template>
  <div>
    <span class="cart-box"
      >Cart<span class="cart-value">({{ items.length }})</span></span
    >
  </div>
</template>

<script>
export default {
  name: "AppCart",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$root.$on("add-to-cart", (id) => {
      this.items.push(id);
    });
    this.$root.$on("remove-from-cart", (id) => {
      let index = this.items.indexOf(id);
      if (index > -1) this.items.splice(index, 1);
    });
  },
  watch: {
    items() {
      this.$root.$emit("cart-items", this.items);
    },
  },
};
</script>

<style scoped>
.cart-box {
  border: 1px solid gray;
  padding: 10px;
}
.cart-value {
  color: #42b983;
  margin-left: 5px;
  font-weight: 700;
}
</style>
