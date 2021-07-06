<template>
  <div>
    <h1>Slot Example</h1>
    <hr />
    <!-- <default-slot><strong>XYZ</strong></default-slot> -->

    <!-- <named-slot>
      <template v-slot:default> Default Slot value</template>
      <template v-slot:header>this is from header</template>
      <template #content>this is from content</template>
      <template v-slot:footer>this is from footer</template>
    </named-slot> -->

    <scoped-slot>
      <template v-slot:default="slotProps">
        <p><strong>First Name</strong> {{ slotProps.user.firstName }}</p>
        <p><strong>Last Name</strong> {{ slotProps.user.lastName }}</p>
      </template>
    </scoped-slot>
    <!-- <scoped-slot>
      <template v-slot:default="{ user }">
        <p><strong>First Name</strong> {{ user.firstName }}</p>
        <p><strong>Last Name</strong> {{ user.lastName }}</p>
      </template>
    </scoped-slot> -->
  </div>
</template>

<script>
// import DefaultSlot from "./DefaultSlot.vue";
// import NamedSlot from "./NamedSlot.vue";
import ScopedSlot from "./ScopedSlot.vue";

export default {
  name: "Slots",
  components: {
    // DefaultSlot,
    // NamedSlot,
    ScopedSlot,
  },
};
</script>

<style lang="scss" scoped></style>
