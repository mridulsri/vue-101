<template>
  <app-page>
    <review-form />
    <br />
    <hr />
    <br />
    <div v-if="items.length > 0">
      <div v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </div>
  </app-page>
</template>

<script>
import ReviewForm from "../components/ReviewForm.vue";
import AppPage from "../layout/AppPage.vue";
// import { mapGetters } from "vuex";
// import { mapState } from "vuex";

export default {
  name: "review",
  components: {
    ReviewForm,
    AppPage,
  },
  computed: {
    items() {
      return this.$store.state.reviews; // direct access of store

      // return this.$store.getters.GET_REVIEWS; // without param
      // return this.$store.getters.GET_REVIEW_BY_NAME("mridul"); // by input param

      // return this.$store.state.<myModule>.<store_property_name>;
      // return this.$store.getters['myModule/getters-name'](params)
    },
    // ...mapState(["reviews"]),
    // ...mapState({ myReviews: "reviews" }),

    //...mapGetters(["GET_REVIEWS"]), // name should be the same as getter name
    //...mapGetters({ myItems: "GET_REVIEWS" }),
  },
};
</script>

<style lang="scss" scoped></style>
