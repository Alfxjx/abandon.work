import axios from "axios";
import ApiConfig from "./config";

export function uniformRequest(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: params.method,
      url: parseUrl(params.url),
      data: params.data
    })
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
export function getJuejinLikeList(pageNum) {
  const defaultPageSize = 20;
  let juejinBaseUrl =
    "https://user-like-wrapper-ms.juejin.im/v1/user/5bb5eb00e51d453eb93d896d/like/entry";
  return axios({
    headers: {
      "X-Juejin-Src": "web",
      "Access-Control-Allow-Origin": "http://localhost:8080"
    },
    method: "get",
    url: `${juejinBaseUrl}?page=${pageNum}&pageSize=${defaultPageSize}`
  });
}

function parseUrl(link) {
  let env = process.env.NODE_ENV;
  let api = ApiConfig[link];
  let res = "";
  if (env === "development") {
    res = api.development;
  } else if (env === "production") {
    res = api.production;
  } else if (env === "test") {
    res = api.test;
  }
  return res;
}
