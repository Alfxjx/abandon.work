import { axiosInstance } from "./config";

export const getBlogList = () => {
    return axiosInstance.get('/blog');
}

export const getUserList = ()=>{
    return axiosInstance.get('/user');
}