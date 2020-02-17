import axios from 'axios';
import ApiConfig from './config';
import Vue from 'vue';

// 添加请求拦截器
axios.interceptors.request.use(
	function(config) {
    // 在发送请求之前做些什么
    Vue.prototype.$loading.show();
		return config;
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
axios.interceptors.response.use(
	function(response) {
    // 对响应数据做点什么
    Vue.prototype.$loading.hide();
		return response;
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);


// id 是请求的链接可能需要用
export function get(url, data, id) {
	return new Promise((resolve, reject) => {
		axios
			.get(parseUrl(url, id), {
				params: data,
			})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

// id 是请求的链接可能需要用
export function post(url, data, id) {
	return new Promise((resolve, reject) => {
		axios
			.post(parseUrl(url, id), data)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

// 获取掘金的点赞列表
// TODO 搬到服务端 建议
// export function getJuejinLikeList(pageNum) {
//   const defaultPageSize = 20;
//   let juejinBaseUrl =
//     "https://user-like-wrapper-ms.juejin.im/v1/user/5bb5eb00e51d453eb93d896d/like/entry";
//   return axios({
//     headers: {
//       "X-Juejin-Src": "web",
//       "Access-Control-Allow-Origin": "http://localhost:8080"
//     },
//     method: "get",
//     url: `${juejinBaseUrl}?page=${pageNum}&pageSize=${defaultPageSize}`
//   });
// }

function parseUrl(link, id) {
	let env = process.env.NODE_ENV;
	let api = ApiConfig[link];
	let res = '';
	if (env === 'development') {
		res = api.development;
	} else {
		if (id) {
			res = api.production + '/' + id;
		} else {
			res = api.production;
		}
	}
	return res;
}
