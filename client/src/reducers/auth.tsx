import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state: any = { authData: null }, action: any) => {
  switch (action.type) {
    case AUTH:
      console.log(action);

      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case LOGOUT:
      console.log(action);
      localStorage.setItem('profile', JSON.stringify({}));
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
