<template>
  <div>
    <h1>Life Cycle Hook (Mount)</h1>
    <hr />
    <br />
    <div v-show="flag">Loading......!</div>
  </div>
</template>

<script>
export default {
  name: "BaseHooks",
  data() {
    return {
      flag: false,
    };
  },
  beforeMount() {
    // called before template render.
    console.log("beforeMount called", this.$el);
    this.flag = true;
  },
  mounted() {
    // called before template render.
    console.log("mounted called", this.$el);
    // simulation of api call
    setTimeout(
      function () {
        this.flag = false;
      }.bind(this),
      5000
    );
  },
};
</script>

<style lang="scss" scoped></style>
