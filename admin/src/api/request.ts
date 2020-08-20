import { axiosInstance } from "./config";
import qs from 'qs';

export const getBlogList = () => {
    return axiosInstance.get('/blog');
}

export const getUserList = () => {
    return axiosInstance.get('/user');
}

export const postLogin = (loginInstance: any) => {
    return axiosInstance.post('/user/login', qs.stringify(loginInstance));
}

export const postNewBlog = (blog: any) => {
    return axiosInstance.post('/blog', qs.stringify(blog))
}