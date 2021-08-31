import React, { useEffect, useState } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MainPost from './MainPost';
import { Typography } from '@material-ui/core';
import AssistantIcon from '@material-ui/icons/Assistant';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';
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
    marginTop: '40px',
  },
}));

const Main = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/api/post?page=' + page);
      setPosts(res.data.data);
      setPageCount(res.data.pages);
    };
    fetchPost();
  }, [page]);

  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid item container md={9} className={classes.root}>
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          marginBottom="30px"
        >
          <AssistantIcon fontSize="large" />
          <Typography variant="h4">
            <b>Today's top highlights</b>
          </Typography>
        </Box>
        {posts.map((post, index) => (
          <MainPost key={index} post={post} />
        ))}
        <Box display="flex" width="100%" marginTop="50px">
          <div style={{ margin: 'auto' }}>
            <Pagination
              count={pageCount}
              color="primary"
              onChange={handleChange}
            />
          </div>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};
export default Main;
