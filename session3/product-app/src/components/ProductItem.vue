<template>
  <div
    class="card"
    style="width: 18rem; margin: 20px; float: left; cursor: pointer"
    @click="onClick(item.id)"
  >
    <img :src="item.image" class="card-img-top" :alt="item.name" height="300" />
    <div class="card-body">
      <h5 class="card-title">{{ `${item.name} ${item.brand}` }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["item"],
  methods: {
    onClick(idx) {
      console.log(this.$router);
      console.log(this.$route);
      // plain
      this.$router.push("/product/" + idx);
      // object
      // this.$router.push({ path: "product/" + idx });
      // named route
      // this.$router.push({ name: "ProductDetail", params: { id: idx } });
      // with query, resulting in //product?premium=true
      // this.$router.push({
      //   name: "ProductDetail",
      //   params: { id: idx },
      //   query: { premium: true },
      // });
    },
  },
};
</script>

<style scoped></style>
