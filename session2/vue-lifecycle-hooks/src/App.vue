<template>
  <div id="app">
    <!-- <FormBinding /> -->

    <!-- <LifeCycleHooks /> -->
    <!-- <CreateHooks /> -->
    <!-- <MountHooks /> -->
    <!-- <UpdateHooks /> -->

    <div v-if="flag">
      <DestroyHooks />
    </div>
    <br />
    <input type="button" value="Toggle" @click="toggle" />

    <!-- Event communication -->
    <!-- <Parent /> -->
    <!-- <BasicComponent />
    <Counter />
    <Counter /> -->

    <!-- <slots></slots> -->

    <!-- <DynamicAsyncComponent></DynamicAsyncComponent> -->
  </div>
</template>

<script>
// import FormBinding from "./components/FormBinding.vue";

// import LifeCycleHooks from "./components/LifeCycleHooks.vue";
// import CreateHooks from "./components/CreateHooks.vue";
// import MountHooks from "./components/MountHooks.vue";
// import UpdateHooks from "./components/UpdateHooks.vue";
import DestroyHooks from "./components/DestroyHooks.vue";

// import Parent from "./components/Parent.vue";

// import Slots from "./components/Slots.vue";

// import DynamicAsyncComponent from "./components/DynamicAsyncComponent.vue";

export default {
  name: "App",
  components: {
    // FormBinding,
    // LifeCycleHooks,
    // CreateHooks,
    // MountHooks,
    // UpdateHooks,
    DestroyHooks,
    // Parent,
    // BasicComponent,
    // Slots,
    // DynamicAsyncComponent,
  },
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
