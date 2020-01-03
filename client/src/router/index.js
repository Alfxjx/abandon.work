import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from "../views/Home.vue";
// import Blog from "../views/Blog.vue";
// 路由懒加载 博客分块
const Blog = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Blog.vue');
const Tech = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Tech.vue');
const Life = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Life.vue');

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		// TODO 上线记得改一下
		component: Blog,
	},
	{
		path: '/blog',
		name: 'blog',
		component: Blog,
		children: [
			{
				path: 'tech',
				component: Tech,
			},
			{
				// 不能加上“/”，会检查不到。
				path: 'life',
				component: Life,
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
