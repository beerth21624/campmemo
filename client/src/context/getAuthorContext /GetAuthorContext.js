//ไม่ใช้

import React, { createContext, useState } from 'react';

export const GetUserContext = createContext();

export const GetUserContextProvider = ({ children }) => {
  const [getUser, setGetuser] = useState({});
  return (
    <GetUserContext.Provider
      value={{
        getUser,
        setGetuser,
      }}
    >
      {children}
    </GetUserContext.Provider>
  );
};
