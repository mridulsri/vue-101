<template>
  <div style="padding: 20px">
    <!-- <h2>Count: {{ count }}</h2> -->
    <input type="button" :value="`Count (${count})`" @click="count += 1" />
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
