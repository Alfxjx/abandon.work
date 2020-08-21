import axios from 'axios';

export const baseUrl: string = 'http://www.abandon.work/api';

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
});

// 图片
const axiosPicInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'content-type': 'multipart/form-data'
    }
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);

axiosPicInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);

export {
    axiosInstance,
    axiosPicInstance
};