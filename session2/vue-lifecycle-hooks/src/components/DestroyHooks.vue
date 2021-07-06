<template>
  <div>
    <h1>Life Cycle Hook (Destroy)</h1>
    <hr />
    <br />
    <h1 id="msg">{{ message }}</h1>
    <input type="button" value="Call API" @click="onClick" />
  </div>
</template>

<script>
var prevReportInterval = null;
export default {
  name: "BaseHooks",
  data() {
    return {
      message: "Hello world.!",
    };
  },
  methods: {
    onClick() {
      if (prevReportInterval == null) {
        prevReportInterval = setInterval(
          function () {
            console.log("Call every second...!");
          }.bind(this),
          1000
        );
      }
    },
  },
  beforeDestroy() {
    // called before the component going to destoried
    console.log("beforeDestroy called");

    // example
    if (prevReportInterval) {
      clearInterval(prevReportInterval);
    }
  },
  destroyed() {
    // called after the component destroyed
    console.log("destroyed called");
  },
};
</script>

<style lang="scss" scoped></style>
