import axios from 'axios';
import ApiConfig from './config';

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
	} else if (env === 'production') {
		if (id) {
			res = api.production + '/' + id;
		} else {
			res = api.production;
		}
	} else if (env === 'test') {
		if (id) {
			res = api.production + '/' + id;
		} else {
			res = api.production;
		}
	}
	return res;
}
