import React, { useEffect, useState } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Box } from '@material-ui/core';
import CategoryCard from '../components/MediemCard';
import Footer from '../components/footer/Footer';
import Category from '../components/sidebar/Category';
import NewPost from '../components/sidebar/NewPost';
import { Link, useLocation } from 'react-router-dom';
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
    backgroundColor: '#F3F3F3',
  },
  container: {
    backgroundColor: 'white',
    minHeight: '100vh',
    paddingTop: '3vh',
  },
  button: {
    margin: '0.5rem',
    width: '22%',
    height: '50px',
    border: 'none',
    '&:hover': {
      border: 'none',
    },
    color: 'white',
    backgroundPosition: 'center',
    background:
      'linear-gradient(rgba( 0, 0, 0, 0.8), rgba( 0,0,0,0.1)),url(https://images.unsplash.com/photo-1615393904572-b3469d50cac3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: '0.5rem 0',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '40%',
    },
    mainContainer: {
      marginTop: '3vh',
    },
  },
}));

const CategoryShow = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const cats = await axios.get('/category/' + path);
      setCat(cats.data);
    };
    fetchCat();
  }, [path]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <AssignmentIcon style={{ fontSize: '2.5rem' }} />
            <Typography variant="h4">Category:</Typography>
          </Box>
          <Box textAlign="center" margin="3vh 0">
            <Link to="/category/camping" className="link">
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                camping
              </Button>
            </Link>
            <Link to="/category/trekking" className="link">
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                trekking
              </Button>
            </Link>
            <Link to="/category/climbing" className="link">
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                climbing
              </Button>
            </Link>
            <Link to="/category/fishing" className="link">
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                fishing
              </Button>
            </Link>
          </Box>
          <Grid container className={classes.mainContainer}>
            <Grid item md={9}>
              {cat.map((post) => (
                <CategoryCard post={post} />
              ))}
            </Grid>
            <Grid item md={3}>
              <Category />
              <NewPost />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default CategoryShow;
