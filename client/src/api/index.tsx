import axios from 'axios';
import { IPost } from '../../interface';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: any) => axios.post<IPost>(url, newPost);
export const updatePost = (id: string, updatedPost: IPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
export const likePost = (id: string) => axios.patch(`${url}/${id}/likePost`);
