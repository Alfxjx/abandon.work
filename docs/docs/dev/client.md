# 前端设计

## 前端接口 mock 设计

根据判断环境，

-   当是 development 的时候，走 webpack 的 devServer，访问项目的 json 文件；
-   test 环境，访问`http://localhost:3000`
-   production 访问对应的 api 域名

### mock.json

mock 文件夹的 json 数据按照测试返回的 data 安排

### api 封装

api 的封装是基于`Promise && axios` 的二次封装，在`src/http/api.js`中，

> 需要添加拦截器和 loading 动画

### 多环境的配置

在 package.json 中设置这个 `--mode`即可
`"serve:test":"vue-cli-service serve --mode localTest",`
在根目录新建一个`.env.localTest`,内容为：

```
NODE_ENV = test
VUE_APP_URI='test'
```

这样就可以访问`process.env.NODE_ENV`了。

---

## 页面结构设计

一个典型的个人网站需要内容输出界面以及交流模块，目前的设计是博客和留言板，之后会添加其他的一些展示模块，诸如动态展示等。

另外还可以添加自己方便使用的功能，比如网络剪贴板。

### 博客

-   博客列表
-   单独博客详情
-   点赞
-   评论
-   文章 TOC
-   图片的优化

### 留言板

-   留言板的内容
-   账号
-   admin 可以删除

### 登录、注册

1. 账号登录
2. 邮箱登录
3. oAuth 登录

---

## 美观与优化

### loading

添加全局的 loading 和 notify

### 静态资源优化

#### 优化

2020-1-31 的提交对生产环境的包进行了优化 TODO 待整理


