<template>
  <div>
    <h3>User information</h3>
    <p>
      <strong>First Name: </strong>
      <input type="text" v-model="firstName" />
      {{ firstName }}
    </p>
    <p>
      <strong>Last Name: </strong>
      <input type="text" v-model="lastName" />
      {{ lastName }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      firstName: null,
      lastName: null,
    };
  },
};
</script>

<style scoped></style>
