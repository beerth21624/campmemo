import React, { createContext, useReducer } from 'react';
import PostReducer from './PostReducer';
const INITIAL_STATE = {
  title: '',
  data: [],
  photo: '',
  userId: '',
  loding: false,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider
      value={{
        title: state.title,
        data: state.data,
        photo: state.photo,
        userId: state.userId,
        loding: state.loding,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
