import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Blog from "../views/Blog/Blog.vue";
// import Tech from "../views/Blog/Tech.vue";
// 路由懒加载 博客分块
// const Blog = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Blog.vue');
// const Tech = () => import(/* webpackChunkName: "group-blog" */ '../views/Blog/Tech.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // TODO 上线记得改一下
    component: Blog
  },
  {
    path: "/blog",
    component: Blog
  }
];

const router = new VueRouter({
  routes
});

export default router;
