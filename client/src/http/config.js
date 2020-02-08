// 对api在本文件中进行管理，配置开发环境访问的mock数据，
const ApiConfig = {
  getHomeApi: {
    development: "home.json",
    production: "/api/blog/posts",
  },
  getBlogListApi: {
    development: "getBlogList.json",
    production: "/api/blog"
  },
  getBlogPageApi: {
    development: "getBlogPage.json",
    production: "/api/blog/"
  }
};

export default ApiConfig;
