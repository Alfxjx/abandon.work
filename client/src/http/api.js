import axios from "axios";
import Vue from "vue";
import store from "../store/index.js";
const { NODE_ENV } = process.env;

export const baseUrl =
	NODE_ENV === "development"
		? "http://localhost:8080/api"
		: "http://www.abandon.work/api";

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
	baseURL: baseUrl,
	headers: {
		"content-type": "application/x-www-form-urlencoded",
		// 'Access-Control-Request-Headers':'Authorization'
	},
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		Vue.prototype.$loading.show();
		store.commit("addHttpStatus", {
			type: "request",
			method: config.method,
			url: config.url,
		});
		return config;
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
	function(response) {
		// 对响应数据做点什么
		store.commit("addHttpStatus", {
			type: "response",
			status: response.status,
			statusText: response.statusText,
		});
		Vue.prototype.$loading.hide();
		return response.data;
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

export { axiosInstance };
