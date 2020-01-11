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
