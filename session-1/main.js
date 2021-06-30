const message = "message";
const app = new Vue({
  el: "#app",
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
      variants: [
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
      ],
      sizes: ["L", "M", "S", "XS"], // ch
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
    src(index) {
      return this.variants[this.selectedItem].image;
    },
    inStock() {
      return this.variants[this.selectedItem].qty;
    },
  },
  methods: {
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
  },
});
