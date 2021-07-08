<template>
  <app-page>
    <div v-if="loading" class="text-center justify-content-center">
      <h1>Loading.........!</h1>
    </div>
    <input type="text" v-model="counter" />
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
      counter: 1,
      obj: {
        x: {
          y: 1,
        },
      },
    };
  },
  computed: {
    calc() {
      return this.counter * 10;
    },
  },
  methods: {
    loadProduct() {
      this.loading = true;
      this.item = products.find((x) => x.id == this.id);
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  mounted() {
    this.loadProduct();
  },

  watch: {
    counter(oldVal, newVal) {
      // deep:true,
      // handler(newVal, oldVal){

      // }
      console.log(oldVal, newVal);
    },
    $route(to, from) {
      debugger;
      if (to.params.id != from.params.id) {
        this.id = to.params.id;
        this.loadProduct();
      }
    },
  },

  // beforeRouteUpdate(to, from, next) {
  //   if (to.params.id != from.params.id) {
  //     this.id = to.params.id;
  //     this.loadProduct();
  //   }
  //   next();
  // },
};
</script>

<style lang="scss" scoped></style>
