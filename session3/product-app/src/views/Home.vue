<template>
  <app-page><product-item-list :items="items" /></app-page>
</template>

<script>
import ProductItemList from "../components/ProductItemList.vue";
import { products } from "../products";
// @ is an alias to /src
export default {
  name: "Home",
  components: { ProductItemList },
  data() {
    return {
      items: products,
    };
  },
};
</script>
