import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { get, post } from './http/api';
import { Loading } from './plugins/index';
Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.use(Loading);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
