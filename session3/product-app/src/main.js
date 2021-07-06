import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./assets/bootstrap.min.css";

import AppPage from "./layout/AppPage.vue";
Vue.component("app-page", AppPage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
