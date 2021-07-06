<template>
  <div class="container pt-4 text-start">
    <div class="row">
      <div class="col-4 text-center">
        <!-- Attribute Bind -->
        <img v-bind:src="src" :alt="item.name" height="200" width="200" />
      </div>
      <div class="col-2" />
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <!-- Text expression by computed property -->
            <h1>{{ title }}</h1>
            <!-- Conditional expression (v-show render the element but based on data property it show or hide using in-build hide show css. will explain in next session)  -->
            <div v-show="onSale" class="ml-2">On Sale</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <strong>Stock:</strong>
            <p>
              <!-- Conditional rendering. (v-if render the only that part which is satisfy the condition. will explain in next session) -->
              <span v-if="inStock > 10" class="success">In stock</span>
              <span v-else-if="inStock > 0 && inStock <= 10">Almost sold</span>
              <span v-else class="error">Out of stock</span>
            </p>
          </div>
          <div class="col-12">
            <div>
              <strong>Color:</strong>
            </div>

            <!-- List rendering -->
            <div
              v-for="(variant, index) in item.variants"
              :key="variant.id"
              class="color-box"
              :style="{ 'background-color': variant.color }"
              v-on:mouseover="changeColor(index)"
            ></div>
          </div>
          <div class="col-12">
            <strong>Size:</strong>
            <ul>
              <li v-for="size in item.sizes" :key="size" class="size-box">
                {{ size }}
              </li>
            </ul>
          </div>
          <div class="col-12">
            <strong>Actions:</strong>
            <!-- Event binding -->
            <p>
              <input
                type="button"
                value="Add to Cart"
                class="btn btn-primary mr-2"
                :disabled="!inStock"
                v-on:click="addToCart"
              />

              <!-- Event binding with attribute binding if cart value is zero the button should disabled -->
              <input
                type="button"
                class="btn btn-secondary m-lg-3"
                value="Remove from Cart"
                v-bind:disabled="insideCart == 0"
                v-on:click="removeToCart"
              />

              <!-- Attribute binding -->
            </p>
            <!-- <p>
              <a v-bind:href="review">Add review</a>
            </p> -->
          </div>
          <div class="col-12">
            <strong>Details:</strong>
            <ul>
              <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
    </div>
    <!-- end-vue-app -->
  </div>
</template>

<script>
export default {
  name: "ProductOverview",
  props: ["item"],
  data() {
    return {
      onSale: false,
      selectedItem: 0,
      insideCart: 0,
    };
  },
  computed: {
    title() {
      return this.item.name + " " + this.item.brand;
    },
    src() {
      return this.item.variants[this.selectedItem].image;
    },
    inStock() {
      return this.item.variants[this.selectedItem].qty;
    },
  },
  methods: {
    addToCart() {
      this.$root.$emit("add-to-cart", this.item.id);
    },
    removeToCart() {
      this.$root.$emit("remove-from-cart", this.item.id);
    },
    // changeColor(src) // changed that to make more realistic example. will discuss in next session
    changeColor(index) {
      // this.image = src;
      // for computed property
      this.selectedItem = index;
    },
  },
  mounted() {
    this.$root.$on("cart-items", (values) => {
      let items = values.filter((id) => id == this.item.id);
      this.insideCart = items.length ?? 0;
    });
  },
};
</script>

<style scoped>
.color-box {
  height: 30px;
  width: 30px;
  margin: 10px;
  cursor: pointer;
  float: left;
}

.size-box {
  height: 40px;
  min-width: 50px;
  margin: 10px;
  cursor: pointer;
  display: inline;
  padding: 0 5px;
  border: 1px solid gray;
}

.selected-size {
  background-color: green;
  color: white;
}

.cart-box {
  padding: 10px;
  border: 1px solid gray;
}

.btnDisabled {
  background-color: gray;
  color: white;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>
