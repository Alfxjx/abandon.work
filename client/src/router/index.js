import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Blog from "../views/Blog/Blog.vue";
// import ContentPage from '../views/Blog/ContentPage.vue';
// import Tech from "../views/Blog/Tech.vue";
// 路由懒加载 博客分块
const Blog = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Blog.vue');
const ContentPage = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/ContentPage.vue');
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/blog',
		component: Blog,
	},
	{
		path: '/blog/:id',
		component: ContentPage,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
