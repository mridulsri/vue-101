<template>
  <div>
    <h1>Life Cycle Hooks</h1>
    <hr />
    <br />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "LifeCycleHooks",
  data() {
    return {
      message: "this is initial message",
    };
  },
  beforeCreate() {
    console.log("beforeCreate called ");
  },
  created() {
    console.log("created called");
  },
  beforeMount() {
    console.log("beforeMount called");
  },
  mounted() {
    console.log("mounted called ");
  },
  beforeUpdate() {
    console.log("beforeUpdate called");
  },
  updated() {
    console.log("updated called");
  },
  beforeDestroy() {
    console.log("beforeDestroy called");
  },
  destroyed() {
    console.log("destroyed called");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: maroon;
}
</style>
