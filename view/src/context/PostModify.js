import React, { createContext, useState } from 'react';

export const PostModify = createContext();

export const PostModifyProvider = ({ children }) => {
  const [modify, setModify] = useState(true);
  console.log(modify);
  return (
    <PostModify.Provider
      value={{
        modify,
        setModify,
      }}
    >
      {children}
    </PostModify.Provider>
  );
};
