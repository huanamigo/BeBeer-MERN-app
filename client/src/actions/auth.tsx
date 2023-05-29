import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
import { IPost, IFormData } from '../../interface';

export const signin =
  (formData: IFormData, navigate: any) => async (dispatch: any) => {
    try {
      // log in
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });

      navigate('/');
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      reportError({ message });
    }
  };

export const signup =
  (formData: IFormData, navigate: any) => async (dispatch: any) => {
    try {
      // sign up

      const { data } = await api.signUp(formData);

      dispatch({ type: AUTH, data });

      navigate('/');
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      reportError({ message });
    }
  };
