import axios from 'axios';
import { IPost, IFormData } from '../../interface';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (JSON.parse(localStorage.getItem('profile') || '{}').token) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile') || '{}').token
    }`;
  } else if (JSON.parse(localStorage.getItem('profile') || '{}').decoded) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile') || '{}').decoded.sub
    }`;
  } else {
    req.headers.Authorization = null;
  }
  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost: any) => API.post<IPost>('/posts', newPost);
export const updatePost = (id: string, updatedPost: IPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id: string) => API.delete(`/posts/${id}`);
export const likePost = (id: string) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData: IFormData) =>
  API.post('/user/signin', formData);
export const signUp = (formData: IFormData) =>
  API.post('/user/signup', formData);
