import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Loading } from "./plugins/index";
import "./styles/reset.css";
import vuetify from "./plugins/vuetify";
import hljs from "highlight.js";
import 'highlight.js/styles/github.css';
// import "highlight.js/styles/atom-one-dark-reasonable.css";

Vue.config.productionTip = false;

Vue.use(Loading, {
  hint: "loading...",
});

Vue.directive("highlight", (el) => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
