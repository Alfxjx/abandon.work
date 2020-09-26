import Vue from 'vue';
import VueRouter from 'vue-router';
import BlogList from '../views/Blog/index.vue';
// const ContentPage = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Blog.vue');
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'blog',
		component: BlogList,
	},
	
];

const router = new VueRouter({
	routes,
});

export default router;
