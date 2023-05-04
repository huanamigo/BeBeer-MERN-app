import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state: any = { authData: null }, action: any) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      return state;
    default:
      return state;
  }
};

export default authReducer;
