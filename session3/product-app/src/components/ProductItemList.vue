<template>
  <div><product-item v-for="item in items" :key="item.id" :item="item" /></div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductItemList",
  props: ["items"],
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped></style>
