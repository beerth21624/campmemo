import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { PostContextSaveProvider } from './context/postContextSave/PostContextSave';
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextSaveProvider>
        <App />
      </PostContextSaveProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
