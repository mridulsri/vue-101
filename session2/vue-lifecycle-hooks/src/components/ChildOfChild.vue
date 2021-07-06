<template>
  <div class="myborder">
    <div class="text">
      <h1>I am child of child</h1>
      <p>{{ childmsg }}</p>
    </div>

    <input type="button" value="Send to Parent" @click="onClick" />
  </div>
</template>

<script>
export default {
  name: "Child",
  // Option-1
  // props: ["msg"],
  // Option-2
  props: {
    childmsg: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      childOfChildMessage: "From child of child....!",
    };
  },
  methods: {
    onClick() {
      this.$root.$emit(
        "update-from-childOfChild",
        this.childOfChildMessage + " => " + Math.random()
      );
    },
  },
};
</script>
<style scoped>
.myborder {
  border: 1px solid maroon;
}
.text {
  color: maroon;
}
</style>
