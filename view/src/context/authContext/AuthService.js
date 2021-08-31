import axios from 'axios';
import {
  loginStart,
  loginSuccess,
  loginFail,
  registerStart,
  registerFail,
} from './AuthAction';

//login
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const userToken = await axios.post('auth/login', user);
    dispatch(loginSuccess(userToken.data.token));
    // console.log(userData);
  } catch (err) {
    dispatch(loginFail(err.response.data.error));
  }
};

//register
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const userToken = await axios.post('auth/register', user);
    dispatch(loginSuccess(userToken.data.token));
  } catch (err) {
    dispatch(registerFail(err.response.data.error));
  }
};
