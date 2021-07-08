<template>
  <div>
    <div class="card text-start">
      <div class="class-body">
        <h5 class="card-title">Add review:</h5>
        <div>
          <form @submit.prevent="onSubmit">
            <div v-if="errors.length" class="error">
              <b>Please correct the error(s): </b>
              <ul>
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <p>
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="name" />
            </p>

            <p>
              <label for="review">Review:</label>
              <textarea id="review" v-model.number="review" />
            </p>

            <p>
              Gender:
              <ul>
                  <li><input type="radio" id="Male" value="Male" v-model="gender" />
              <label for="Male">Male</label></li>
                  <li> <input type="radio" id="Female" value="Female" v-model="gender" />
              <label for="Female">Female</label></li>
              </ul>
              
             
            </p>

            <div>
              Opinion:
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="likeit"
                    value="Like it"
                    v-model="opinion"
                  />
                  <label for="likeit">Like it</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="shareWithOther"
                    value="Share with others"
                    v-model="opinion"
                  />
                  <label for="shareWithOther">Share with others</label>
                </li>
              </ul>
            </div>

            <p>
              <label for="rating">Ratings:</label>
              <select id="rating" v-model="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <p><input type="submit" value="Submit" /></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewForm",
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      opinion: [],
      gender: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating && this.gender) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          gender: this.gender,
          opinion: this.opinion,
        };
        // ********************************* Use of Vuex Store ************************************ */
        // Use of mutations
        // this.$store.commit('SET_REVIEWS',productReview);

        // actions
        this.$store.dispatch('addReviews',productReview) // dispatch to store actions
        // this.$store.dispatch('myModule/addReviews',productReview) // dispatch to store module  actions

        // *************************************************************************************** */
        this.name = null;
        this.review = null;
        this.rating = null;
        this.gender = null;
        this.opinion = [];
        this.errors = [];
      } else {
        if (!this.name) this.errors.push("Name required.");
        if (!this.review) this.errors.push("Review required.");
        if (!this.gender) this.errors.push("Gender required.");
        if (!this.rating) this.errors.push("Rating required.");
      }
    },
    
  },
};
</script>

<style scoped>
.error
{
    color:red;
}
</style>
