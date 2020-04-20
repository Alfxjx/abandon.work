import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Test from '../views/test.vue';
// import Blog from "../views/Blog/Blog.vue";
// import ContentPage from '../views/Blog/ContentPage.vue';
// import Tech from "../views/Blog/Tech.vue";
const ContentPage = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/ContentPage.vue');
Vue.use(VueRouter);

const routes = [
	{
		path: '/about',
		name: 'test',
		component: Test,
	},
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/:id',
		component: ContentPage,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
