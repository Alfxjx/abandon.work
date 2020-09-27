import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Loading } from './plugins/index';
import './styles/reset.css';
Vue.config.productionTip = false;

Vue.use(Loading, {
	hint: 'loading...',
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
