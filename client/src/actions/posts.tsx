import * as api from '../api';
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_BY_SEARCH,
} from '../constants/actionTypes';
import { IPost, ISearchQuery } from '../../interface';

// action creators

// i have no idea what type this could be, sorry
export const getPosts = (page: number) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts(page);
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    reportError({ message });
  }
};

export const getPostsBySearch =
  (searchQuery: ISearchQuery) => async (dispatch: any) => {
    try {
      const {
        data: { data },
      } = await api.fetchPostsBySearch(searchQuery);
      dispatch({
        type: FETCH_BY_SEARCH,
        payload: data,
      });
    } catch (error) {
      console.log(error);
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
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    reportError({ message });
  }
};

export const updatePost =
  (id: string, post: IPost) => async (dispatch: any) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      reportError({ message });
    }
  };

export const deletePost = (id: string) => async (dispatch: any) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    reportError({ message });
  }
};

export const likePost = (id: string) => async (dispatch: any) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    reportError({ message });
  }
};
