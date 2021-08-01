import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme,ThemeProvider } from '@material-ui/core/styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
          <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

