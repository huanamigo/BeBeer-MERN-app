import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state: any = { authData: null }, action: any) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      if (action.data.decoded) {
        localStorage.setItem(
          'profile',
          JSON.stringify({ ...action?.data.decoded })
        );
      } else {
        localStorage.setItem(
          'profile',
          JSON.stringify({ ...action?.data.result })
        );
      }

      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.setItem('profile', JSON.stringify({}));
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
