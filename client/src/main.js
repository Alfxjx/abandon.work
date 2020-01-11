import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { get, post } from "./http/api";

Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
