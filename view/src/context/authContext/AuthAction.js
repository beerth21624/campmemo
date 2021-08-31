export const loginStart = () => ({
  type: 'LOGIN_START',
});
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFail = (error) => ({
  type: 'LOGIN_FAIL',
  payload: error,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const registerStart = () => ({
  type: 'REGISTER_START',
});
export const registerFail = (error) => ({
  type: 'REGISTER_FAIL',
  payload: error,
});
