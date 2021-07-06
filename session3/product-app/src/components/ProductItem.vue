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
    onClick(id) {
      // plain
      // this.$router.push("/product/" + id);
      // object
      // this.$router.push({ path: "product/" + id });
      // named route
      // this.$router.push({ name: "ProductDetail", params: { id: id } });
      // with query, resulting in //product?premium=true
      this.$router.push({
        name: "ProductDetail",
        params: { id: id },
        query: { premium: true },
      });
    },
  },
};
</script>

<style scoped></style>
