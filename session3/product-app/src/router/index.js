import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "child1",
        component: () =>
          import(
            /* webpackChunkName: "about-child1" */ "../views/AboutChild1.vue"
          ),
      },
      {
        path: "child2",
        component: () =>
          import(
            /* webpackChunkName: "about-child2" */ "../views/AboutChild2.vue"
          ),
      },
    ],
  },
  {
    path: "/product/:id",
    // redirect: { name: "About" },
    name: "ProductDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/ProductDetail.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history", // 'hash'
  routes,
});

export default router;
