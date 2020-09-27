/**
 * 对dev-server进行配置
 */
const fs = require("fs");
const path = require("path");
// put static file out of public to solve hmr hot.update.json
const basePath = path.join(__dirname, "mock");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// 生产环境配置cdn
let cdn = {
	js: [
		// TODO 动态版本号
		"//cdn.bootcss.com/vue/2.6.10/vue.runtime.min.js",
		"//cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
		"//cdn.bootcss.com/vuex/3.1.2/vuex.min.js",
		"//cdn.bootcss.com/axios/0.19.0/axios.min.js",
		"//cdn.bootcdn.net/ajax/libs/marked/1.1.1/marked.min.js",
	],
};

let webpackConfig = {
	publicPath: "/",
	outputDir: "dist",
	assetsDir: "assets",
	productionSourceMap: false,
	// 它支持webPack-dev-server的所有选项
	devServer: {
		// host: "0.0.0.0",
		port: 8080, // 端口号
		https: false, // https:{type:Boolean}
		open: false, //配置自动启动浏览器
	},
};

if (process.env.NODE_ENV === "development") {
	webpackConfig["devServer"] = {
		port: 8080, // 端口号
		https: false, // https:{type:Boolean}
		open: false, //配置自动启动浏览器
	};
}

if (process.env.NODE_ENV === "test") {
	webpackConfig["devServer"] = {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:6000",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	};
}

if (process.env.NODE_ENV === "huidu") {
	webpackConfig["devServer"] = {
		proxy: {
			"/api": {
				// target: 'http://127.0.0.1:6000',
				target: "http://www.abandon.work/api",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	};
}

// 配置生产环境CDN
if (process.env.NODE_ENV === "production") {
	webpackConfig["chainWebpack"] = (config) => {
		config.plugin("html").tap((args) => {
			args[0].cdn = cdn;
			return args;
		});
	};
	webpackConfig["configureWebpack"] = (config) => {
		config["externals"] = {
			vue: "Vue",
			vuex: "Vuex",
			"vue-router": "VueRouter",
			axios: "axios",
			marked: "marked",
		};
		config["optimization"].minimizer.push(new UglifyJsPlugin());
		config["plugins"].push(new BundleAnalyzerPlugin());
		config["plugins"].push(
			new CompressionPlugin({
				test: /\.js$|\.css$/,
				threshold: 10240,
				deleteOriginalAssets: false,
			})
		);
	};
}

module.exports = webpackConfig;
