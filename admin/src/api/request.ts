import { axiosInstance } from "./config";

export const getBlogList = () => {
    return axiosInstance.get('/blog');
}

export const getUserList = () => {
    return axiosInstance.get('/user');
}

export const postLogin = (loginInstance: any) => {
    return axiosInstance.post('/user/login', loginInstance);
}