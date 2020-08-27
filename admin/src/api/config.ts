import axios from 'axios';

export const baseUrl: string = 'http://localhost:3000/api';


//axios 的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Request-Headers':'Authorization'
    }
});

// 图片
const axiosPicInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'content-type': 'multipart/form-data'
    }
})

const axiosLoginInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `${localStorage.getItem('jwt')}` || '',
        // 'Access-Control-Request-Headers':'Authorization'
    }
})
const axiosDelInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `${localStorage.getItem('jwt')}` || '',
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

axiosLoginInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);

axiosDelInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);

export {
    axiosInstance,
    axiosPicInstance,
    axiosLoginInstance,
    axiosDelInstance
};