import React, { useEffect, useState } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ItemFeature from './ItemFeature';
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
    gap: '1rem',
    paddingLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
      gap: '2rem',
    },
  },
}));

export default function Feature2() {
  const classes = useStyles();
  const [Post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const post = await axios.get('/api/post/header');
      setPost(post.data);
    };
    fetchPost();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Grid item container direction="column" md={6} className={classes.root}>
        {Post.map((post) => (
          <ItemFeature key={post._id} post={post} />
        ))}
      </Grid>
    </ThemeProvider>
  );
}
