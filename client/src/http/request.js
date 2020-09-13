import { axiosInstance } from "./api";

export function getBlog(){
  return axiosInstance.get('/blog');
}