import axios from "axios";

const URL = "https://khoa-blog-app-v1-api.herokuapp.com/";

export const fetchPosts = () => axios.get(`${URL}/posts`);

export const createPost = (payload) => axios.post(`${URL}/posts`, payload);

export const updatePost = (payload) => axios.patch(`${URL}/posts`, payload);
