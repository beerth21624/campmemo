import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { PostContextSaveProvider } from './context/postContextSave/PostContextSave';
import { GetUserContextProvider } from './context/getUserContext/GetUserContext';
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextSaveProvider>
        <GetUserContextProvider>
          <App />
        </GetUserContextProvider>
      </PostContextSaveProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
