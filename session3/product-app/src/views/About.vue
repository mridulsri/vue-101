<template>
  <app-page>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <div id="nav">
      <router-link to="about/child1">Child-1</router-link>
      <router-link to="/about/child2">Child-2</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </app-page>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$router.push({ name: "About.child1" });
    },
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
  margin-left: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
