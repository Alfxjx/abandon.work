import { axiosInstance } from "./api";

export function getBlogList() {
	return axiosInstance.get("/blog");
}

export function getBlogById(id) {
	return axiosInstance.get(`/blog/${id}`);
}
