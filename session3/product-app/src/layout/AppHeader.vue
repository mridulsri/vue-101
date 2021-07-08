<template>
  <header class="container fixed-top">
    <div id="nav" class="text-start float-start" style="width: 50%">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/review">Review</router-link>
    </div>
    <div class="text-end float-end" style="width: 50%; padding: 30px">
      <AppCart />
    </div>
  </header>
</template>

<script>
import AppCart from "../components/AppCart.vue";
export default {
  name: "AppHeader",
  components: {
    AppCart,
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
