import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Loading } from "./plugins/index";
import "./styles/reset.css";
import vuetify from "./plugins/vuetify";
import "./plugins/directives/hljs";

Vue.config.productionTip = false;

Vue.use(Loading, {
	hint: "loading...",
});

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
