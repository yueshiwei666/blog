import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
Vue.config.productionTip = false;

new Vue({
  $,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
