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
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('/post/61209b1b729b867bfcff2ad4');
        setSinglePost(res);
      } catch (err) {}
    };
    fetchPost();
  }, []);

  const data = JSON.parse(singlePost);
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#f3f3f3', paddingBottom: '40px' }}>
        <Container maxWidth="xl" className={classes.root}>
          <Grid container md={12} direction="row">
            <Author />
            <MainPostSingle post={singlePost} />
            <PostSidebar />
          </Grid>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
export default Post;
