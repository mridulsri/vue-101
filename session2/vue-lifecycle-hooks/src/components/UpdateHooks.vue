<template>
  <div>
    <h1>Life Cycle Hook (Update)</h1>
    <hr />
    <br />
    <div ref="cnt">{{ counter }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseHooks",
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeUpdate() {
    // called before v-dom is not re-rendered or patched`
    console.log("beforeUpdate called");
    // console.log(this.counter);
    console.log("counter :>> ", this.$refs["cnt"].textContent, this.counter);
    console.log(+this.$refs["cnt"].textContent === this.counter);
  },
  updated() {
    console.log("updated called");
    console.log("counter :>> ", this.$refs["cnt"].textContent, this.counter);
    console.log(+this.$refs["cnt"].textContent === this.counter);
  },
};
</script>

<style lang="scss" scoped></style>
