// 对api在本文件中进行管理，配置开发环境访问的mock数据，
const ApiConfig = {
  getHomeApi: {
    development: "home.json",
    test: "/api/blog/posts",
    production: "todo"
  },
  getBlogListApi: {
    development: "getBlogList.json",
    test: "/api/blog/posts",
    production: "todo"
  },
  getBlogPageApi: {
    development: "getBlogPage.json",
    // TODO 需要拼接一个id上去
    test: "/api/blog/posts/",
    production: "todo"
  }
};

export default ApiConfig;
