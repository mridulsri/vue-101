<template>
  <app-page>
    <div v-if="loading" class="text-center justify-content-center">
      <h1>Loading.........!</h1>
    </div>
    <product-overview v-if="!loading && item != null" :item="item" />
  </app-page>
</template>

<script>
import ProductOverview from "../components/ProductOverview.vue";
import AppPage from "../layout/AppPage.vue";
import { products } from "../products";
export default {
  name: "ProductDetail",
  components: {
    ProductOverview,
    AppPage,
  },
  data() {
    return {
      loading: false,
      id: this.$route.params.id,
      item: null,
    };
  },
  mounted() {
    this.loading = true;
    this.item = products.find((x) => x.id == this.id);
    setTimeout(() => (this.loading = false), 2000);
  },
  //   watch: {
  //     $route(to, from) {
  //       if (to.params.id != from.params.id) this.id = to.params.id;
  //     },
  //   },
  //   beforeRouteUpdate(to, from, next) {
  //     if (to.params.id != from.params.id) this.id = to.params.id;
  //     next();
  //   },
};
</script>

<style lang="scss" scoped></style>
