import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
import { IPost, IFormData } from '../../interface';

export const signin =
  (formData: IFormData, navigate: any) => async (dispatch: any) => {
    try {
      // log in

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

      navigate('/');
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      reportError({ message });
    }
  };
