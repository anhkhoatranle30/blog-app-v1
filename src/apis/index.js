import axios from "axios";

const URL = "http://localhost:3001";

export const fetchPosts = () => axios.get(`${URL}/posts`);

export const createPost = (payload) => axios.post(`${URL}/posts`, payload);

export const updatePost = (payload) => axios.patch(`${URL}/posts`, payload);
