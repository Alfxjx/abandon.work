import { axiosInstance } from "./api";

export function getBlogList(){
  return axiosInstance.get('/blog');
}