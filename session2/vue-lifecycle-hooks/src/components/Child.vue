<template>
  <div class="myborder">
    <div class="text">
      <h1>I am child</h1>
      <p>
        {{ msg }}
        <input type="button" value="Parent Funtion call" @click="msg" />
      </p>
      <input type="text" v-model="name" />
      <input type="button" value="Send to Parent" @click="onClick" />
    </div>

    <ChildOfChild :childmsg="message" />
  </div>
</template>

<script>
import ChildOfChild from "./ChildOfChild";
export default {
  name: "Child",
  // Option-1
  props: ["msg"],
  components: {
    ChildOfChild,
  },
  data() {
    return {
      message: "From child...!",
      name: null,
    };
  },

  methods: {
    onClick() {
      this.$emit("notify", this.name);
      this.$emit("update-from-child", this.message + " => " + Math.random());
    },
  },
};
</script>

<style scoped>
.myborder {
  border: 1px solid green;
  padding: 20px;
  margin: 20px;
}
.text {
  color: green;
}
</style>
