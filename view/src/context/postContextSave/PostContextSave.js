import React, { createContext, useState } from 'react';

export const PostContextSave = createContext();

export const PostContextSaveProvider = ({ children }) => {
  const [saveContent, setSaveContent] = useState({});
  return (
    <PostContextSave.Provider
      value={{
        saveContent,
        setSaveContent,
      }}
    >
      {children}
    </PostContextSave.Provider>
  );
};
