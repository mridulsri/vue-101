<template>
  <div>
    <h3>Contact details</h3>
    <p>
      <strong>Email: </strong>
      <input type="text" v-model="email" />
      {{ email }}
    </p>
    <p>
      <strong>Mobile: </strong>
      <input type="text" v-model="mobile" />
      {{ mobile }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      email: null,
      mobile: null,
    };
  },
};
</script>

<style scoped></style>
