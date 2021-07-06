<template>
  <div>
    <h1>Form binding</h1>
    <hr />
    <br />
    <div class="container">
      <div class="text-start">
        <div>
          <div>
            <div class="row" v-if="errors.length" style="color: red">
              <b>Please correct the error(s): </b>
              <ul>
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <br />
            <div class="row">
              <label class="mr-2" for="name">Name:</label>
              <input type="text" id="name" v-model="form.name" />
            </div>
            <br />
            <div class="row">
              <label for="review">Review:</label>
              <textarea id="review" v-model="form.review" />
            </div>
            <br />
            <div class="row">
              Gender:
              <ul>
                <li>
                  <input
                    type="radio"
                    id="Male"
                    value="Male"
                    v-model="form.gender"
                  />
                  <label class="ml-2" for="Male">Male</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="Female"
                    value="Female"
                    v-model="form.gender"
                  />
                  <label class="ml-2" for="Female">Female</label>
                </li>
              </ul>
            </div>
            <br />
            <div class="row">
              Opinion:
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="likeit"
                    value="Like it"
                    v-model="form.opinion"
                  />
                  <label class="ml-2" for="likeit">Like it</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="shareWithOther"
                    value="Share with others"
                    v-model="form.opinion"
                  />
                  <label class="ml-2" for="shareWithOther"
                    >Share with others</label
                  >
                </li>
              </ul>
            </div>
            <br />
            <div class="row">
              <label for="rating">Ratings:</label>
              <select id="rating" v-model="form.rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <br />
            <p><input type="submit" value="Submit" @click="onSubmit" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormBinding",
  data() {
    return {
      form: {
        name: null,
        review: null,
        rating: null,
        opinion: [],
        gender: null,
      },

      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (
        this.form.name &&
        this.form.review &&
        this.form.rating &&
        this.form.gender
      ) {
        let productReview = {
          name: this.form.name,
          review: this.form.review,
          rating: this.form.rating,
          gender: this.form.gender,
          opinion: this.form.opinion,
        };

        this.form.name = null;
        this.form.review = null;
        this.form.rating = null;
        this.form.gender = null;
        this.form.opinion = [];
        this.form.errors = [];
      } else {
        if (!this.form.name) this.errors.push("Name required.");
        if (!this.form.review) this.errors.push("Review required.");
        if (!this.form.gender) this.errors.push("Gender required.");
        if (!this.form.rating) this.errors.push("Rating required.");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
