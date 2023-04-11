import axios from 'axios';
import { IPost } from '../../interface';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: any) => axios.post<IPost>(url, newPost);
