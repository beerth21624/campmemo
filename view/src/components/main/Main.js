import React from 'react';
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

const Main = ({ posts }) => {
  const classes = useStyles();
  console.log(posts);

  return (
    <ThemeProvider theme={theme}>
      <Grid item container md={9} className={classes.root}>
        <Grid container md={12} direction="row">
          <AssistantIcon fontSize="large" />
          <Typography variant="h4" gutterBottom>
            <b>Today's top highlights</b>
          </Typography>
        </Grid>
        {posts.map((post, index) => (
          <MainPost key={index} post={post} />
        ))}
        <Box display="flex" width="100%" marginTop="50px">
          <div style={{ margin: 'auto' }}>
            <Pagination count={10} color="primary" />
          </div>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};
export default Main;
