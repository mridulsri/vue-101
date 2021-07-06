<template>
  <div>
    <h1>Dynamic component</h1>
    <hr />
    <br />
    <div>
      <span :class="['tab', { active: tabIndex == 1 }]" @click="onClick(1)"
        ><strong>Personal info</strong></span
      >
      <span :class="['tab', { active: tabIndex == 2 }]" @click="onClick(2)"
        ><strong>Contact info</strong></span
      >
    </div>
    <div>
      <keep-alive>
        <component v-bind:is="tabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
export default {
  name: "TabComponent",
  components: {
    TabA,
    TabB,
  },
  data() {
    return {
      tabComponent: TabA,
      tabIndex: 1,
    };
  },
  methods: {
    onClick(index) {
      this.tabIndex = index;
      if (index == 1) {
        this.tabComponent = TabA;
      } else {
        this.tabComponent = TabB;
      }
    },
  },
};
</script>

<style scoped>
.tab {
  width: 50px;
  height: 20px;
  padding: 10px 50px;
  background: lightgray;
  border: 1px solid gray;
  cursor: pointer;
}
.active {
  color: navy !important;
  background: lightblue;
}
</style>
