import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Comment from './Comment';
import EditorJs from 'react-editor-js';

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
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '30px',
    padding: '40px',
  },
  title: {
    fontSize: '2.3rem',
  },
  coverPic: {
    width: '100%',
    maxHeight: '40vh',
    borderRadius: '20px',
    margin: '20px 0',
  },
  desc: {
    fontSize: '1.3rem',
  },
  comment: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '30px',
    padding: '40px',
    marginTop: '20px',
  },
}));

const MainPostSingle = ({ post }) => {
  const classes = useStyles();
  console.log(post.category);
  return (
    <ThemeProvider theme={theme}>
      <Grid item container md={7} className={classes.root}>
        <Paper width="30vh" className={classes.paper}>
          <strong className={classes.title}>{post.title}</strong>
          <img className={classes.coverPic} src={post.photo} alt="" />
          <p className={classes.desc}>{post.desc}</p>
        </Paper>
        <Paper width="30vh" className={classes.comment}>
          <Typography variant="h6">Comment</Typography>
          <Comment />
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};
export default MainPostSingle;
