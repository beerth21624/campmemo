const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: false,
      };
    case 'LOGIN_FAIL':
      return {
        user: null,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: false,
      };
    case 'REGISTER_START':
      return {
        user: null,
        loading: true,
        error: false,
      };
    case 'REGISTER_FAIL':
      return {
        user: null,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
