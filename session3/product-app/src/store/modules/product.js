export default {
  namespace: true,
  state: {
    reviews: [
      {
        name: "Mridul Srivastava",
        review: "This is my first review",
        rating: 4,
        gender: "Male",
        opinion: "Share with others",
      },
      {
        name: "Gaurav",
        review: "This is my first review",
        rating: 4,
        gender: "Male",
        opinion: "Share with others",
      },
    ],
  },

  // get props
  getters: {
    GET_REVIEWS(state) {
      return state.reviews;
    },
    // GET_REVIEW_BY_NAME(state) {
    //   return (name) => {
    //     return state.reviews.filter((x) => x.name.toLowerCase().includes(name));
    //   };
    // },

    GET_REVIEW_BY_NAME: (state) => (name) => {
      return state.reviews.filter((x) => x.name.toLowerCase().includes(name));
    },
  },

  // set props
  mutations: {
    SET_REVIEWS(state, payload) {
      state.reviews.push(payload);
    },
  },
  actions: {
    addReviews({ commit }, review) {
      // call some api to get data

      commit("SET_REVIEWS", review);
    },
  },
};
