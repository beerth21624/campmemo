import { createContext, useReducer, useEffect } from 'react';
import AuthReducer from './AuthReducer';
import React from 'react';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: false,
  errorMsg: '',
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
    if (!state.user) {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        errorMsg: state.errorMsg,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
