import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Category from '../sidebar/Category';
import NewPost from '../sidebar/NewPost';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E9967A',
    },
    secondary: {
      main: '#a36955',
    },
  },
});

const PostSidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item container md={3} direction="column">
        <Category />
        <NewPost />
      </Grid>
    </ThemeProvider>
  );
};
export default PostSidebar;
