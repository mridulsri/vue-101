<template>
  <div id="app">
    <div class="container pt-4">
      <ProductInfo primaryZ="hello" />
    </div>
  </div>
</template>
<script>
import ProductInfo from "./components/ProductDetail.vue";
export default {
  name: "App",
  components: { ProductInfo },
  data() {
    return {
      primary: {
        name: "Xyz",
        age: "40",
      },
    };
  },
  methods: {
    ClikMe() {
      alert("Hello");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
