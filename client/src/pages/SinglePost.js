import React, { useEffect, useState } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import PostSidebar from '../components/singlepost/PostSidebar';
import MainPostSingle from '../components/singlepost/MainPostSingle';
import Footer from '../components/footer/Footer';
import Author from '../components/singlepost/Author';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

const Post = () => {
  const classes = useStyles();
  const [Post, setPost] = useState({});

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('/post/' + path);
        setPost(res.data);
      } catch (err) {}
    };
    fetchPost();
  }, [path]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#f3f3f3', paddingBottom: '40px' }}>
        <Container maxWidth="lg" className={classes.root}>
          <Grid container md={12} direction="row" justifyContent="center">
            <Author author={Post.author} />
            <MainPostSingle post={Post} />
            <PostSidebar />
          </Grid>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
export default Post;
