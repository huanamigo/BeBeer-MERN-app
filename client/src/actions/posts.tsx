import * as api from '../api';
import { IPost } from '../../interface';

// action creators

// i have no idea what type this could be, sorry
export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    reportError({ message });
  }
};

export const createPost = (post: IPost) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);

    console.log(data);

    dispatch({
      type: 'CREATE',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
