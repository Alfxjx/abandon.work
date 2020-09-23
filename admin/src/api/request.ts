import { axiosInstance, axiosPicInstance, axiosLoginInstance, axiosDelInstance } from "./config";
import qs from 'qs';

export const getBlogList = () => {
    return axiosInstance.get('/blog');
}

export const getBlogById = (id:string)=>{
  return axiosInstance.get(`blog/${id}`);
}

export const getUserList = () => {
    return axiosInstance.get('/user');
}

export const postLogin = (loginInstance: any) => {
    return axiosInstance.post('/user/login', qs.stringify(loginInstance));
}

// @note no use 
export const postNewPicture = (picture: any) => {
    return axiosPicInstance.post('/picture', picture);
}

export const postNewBlog = (blog: any) => {
    return axiosLoginInstance.post('/blog', qs.stringify(blog))
}

export const deleteOneBlog = (id: string) => {
    return axiosDelInstance.delete(`/blog/delete${id}`)
}