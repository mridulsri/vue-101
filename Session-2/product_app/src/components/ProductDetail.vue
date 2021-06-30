<template>
  <div>
    <div>
      <h1>From App Comonent:{{ primaryZ }}</h1>
      <input type="button" value="Click me" @click="primaryZ" />
    </div>
    <div class="row">
      <div class="col-4 text-center">
        <!-- Attribute Bind -->
        <img v-bind:src="src" height="200" width="200" />
      </div>
      <div class="col-8 text-start">
        <div class="row">
          <div class="col-10">
            <!-- Text expression by data property -->
            <h1>{{ brand }} {{ product }}</h1>
            <!-- Conditional expression (v-show render the element but based on data property it show or hide using in-build hide show css. will explain in next session)  -->
            <span v-show="onSale" class="error">On Sale</span>
            <!-- Text expression by computed property -->
            <h6>
              <strong>{{ title }}</strong>
            </h6>
          </div>
          <div class="col-2">
            <span>Cart ({{ cart }})</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <strong>Description:</strong>
            <p>
              <!-- Text expression by data property -->
              {{ description }}
            </p>
          </div>
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
              v-for="(variant, index) in variants"
              :key="variant.id"
              class="color-box"
              :style="{ 'background-color': variant.color }"
              v-on:mouseover="changeColor(index)"
            ></div>
          </div>
          <div class="col-12">
            <div><strong>Size:</strong></div>

            <ul>
              <li
                v-for="size in sizes"
                :key="size"
                :class="[
                  'size-box',
                  selectedSize == size ? 'selected-size' : '',
                ]"
                @click="selectSize(size)"
              >
                {{ size }}
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div>
              <strong>Actions:</strong>
            </div>
            <div>
              <!-- Event binding -->

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
                class="btn btn-secondary"
                style="margin-left: 20px"
                value="Remove from Cart"
                v-bind:disabled="cart == 0"
                v-on:click="removeToCart"
              />
            </div>
          </div>
          <div class="col-12">
            <strong>Details:</strong>
            <ul>
              <li v-for="detail in details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
          <div class="col-12">
            <!-- Attribute binding -->
            <div>
              <a v-bind:href="review">Add review</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  // way-1
  //props: ["primaryZ"],

  props: {
    primaryZ: {
      type: [Function, String],
    },
  },
  data() {
    return {
      brand: "U.S. Polo",
      product: "T-Shirt",
      description: "Men Cotton T-Shirt", // ch
      image:
        "https://5.imimg.com/data5/HB/VQ/MY-44811379/men-black-plain-t-shirt-500x500.jpg",

      review: "http://google.com",

      inventory: 20,
      //  inStock: true,
      onSale: true, // Ch

      details: ["100% cotton", "home wash", "No Iron"],
      variants: [],
      sizes: ["L", "M", "S", "XS"],
      selectedSize: null,
      cart: 0,

      // style
      fontSize: "24px",
      colorProperty: "red",

      styleObj1: {
        fontSize: "30px",
        color: "green",
      },
      styleObj2: {
        fontWeight: 700,
      },

      // class
      btnDisabled: "btnDisabled",
      btn: "btn",

      successClass: false,
      errorClass: true,

      classObj: {
        success: false,
        error: true,
      },

      //computed
      selectedItem: 0, // Use in computed property
    };
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    src() {
      return this.selectedItem != 0
        ? this.variants[this.selectedItem].image
        : this.image;
    },
    inStock() {
      return this.selectedItem != 0 ? this.variants[this.selectedItem].qty : 0;
    },
  },
  methods: {
    loadData() {
      this.variants = [
        {
          id: 101,
          color: "Red",
          image:
            "https://i.pinimg.com/originals/d5/b0/ba/d5b0ba6f029f142c2ff8358ea8baca2d.png",
          qty: 10,
        },
        {
          id: 102,
          color: "Blue",
          image: "https://5.imimg.com/data5/BG/UM/MY-23375112/61-500x500.jpg",
          qty: 11,
        },
        {
          id: 103,
          color: "Green",
          image:
            "https://sc01.alicdn.com/kf/HTB1FeWMOFXXXXXmaXXXq6xXFXXXf/229557187/HTB1FeWMOFXXXXXmaXXXq6xXFXXXf.jpg",
          qty: 0,
        },
        {
          id: 104,
          color: "Black",
          image:
            "https://5.imimg.com/data5/HB/VQ/MY-44811379/men-black-plain-t-shirt-500x500.jpg",
          qty: 5,
        },
      ];
    },

    addToCart() {
      this.cart += 1;
    },
    // changeColor(src) // changed that to make more realistic example. will discuss in next session
    changeColor(index) {
      // this.image = src;
      // for computed property
      this.selectedItem = index;
    },
    removeToCart() {
      this.cart -= 1;
    },
    selectSize(size) {
      this.selectedSize = size;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped></style>
