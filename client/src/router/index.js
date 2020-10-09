import Vue from "vue";
import VueRouter from "vue-router";
import BlogList from "../views/Blog/index.vue";
import BlogContent from "../views/Blog/contents.vue";
// const ContentPage = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Blog.vue');
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "blog",
		component: BlogList,
	},
	{
		path: "/blog/:id",
		name: "content",
		component: BlogContent,
		props: true,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
