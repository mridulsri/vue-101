<template>
  <div>
    <h1>Life Cycle Hook (Create)</h1>
    <hr />
    <br />
    <h1 id="msg">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "BaseHooks",
  data() {
    return {
      message: "Hello world.!",
      id: 1,
    };
  },
  methods: {
    name() {
      console.log("object :>>");
    },
  },
  beforeCreate() {
    // called after component inti but before data and event set
    console.log("beforeCreate called", this.message, this.name);
  },
  created() {
    // called after data and event set.
    console.log("created called", this.message, this.name);
  },
};
</script>

<style lang="scss" scoped></style>
