<template>
  <div>
    <h1>Component communication</h1>
    <hr />
    <br />
    <div class="myborder">
      <div class="text">
        <h1>I am parent</h1>
        <p>
          {{ title }}
        </p>
      </div>
      <Child
        ref="mychild"
        :msg="title"
        v-on:update-from-child="updateTitle"
        @notify="HandleNotify"
      />
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  data() {
    return {
      title: "From Parent...!",
    };
  },
  components: {
    Child,
  },
  methods: {
    updateTitle(val) {
      this.title = val;
    },
    HandleNotify(msg) {
      alert(msg);
    },
  },

  mounted() {
    this.$root.$on("update-from-childOfChild", (args) => {
      this.title = args;
    });

    this.title = this.$refs.mychild.message;
  },
  // it shpuld be always
  beforeDestroy() {
    this.$root.$off("update-from-childOfChild");
  },
};
</script>

<style scoped>
.myborder {
  border: 1px solid blue;
  padding: 20px;
}
.text {
  color: blue;
}
</style>
