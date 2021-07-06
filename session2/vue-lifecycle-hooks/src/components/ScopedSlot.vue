<template>
  <div>
    <p>
      <slot v-bind:user="userInfo"
        ><strong
          >{{ userInfo.firstName }} - {{ userInfo.lastName }}
        </strong></slot
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "ScopedSlot",
  data() {
    return {
      userInfo: {
        firstName: "Mridul",
        lastName: "Srivatstava",
      },
    };
  },
};
</script>

<style scoped></style>
