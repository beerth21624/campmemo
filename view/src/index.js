import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { GetUserContextProvider } from './context/getUserContext/GetUserContext';
import { PostModifyProvider } from './context/PostModify';
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GetUserContextProvider>
        <PostModifyProvider>
          <App />
        </PostModifyProvider>
      </GetUserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
