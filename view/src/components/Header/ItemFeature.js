import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  paper: {
    height: '35vh',
    display: 'flex',
    borderRadius: '24px',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      height: '21vh',
    },
    [theme.breakpoints.only('sm')]: {
      height: '28vh',
    },
  },
  media: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: '0',
    left: 0,
    zIndex: 10,
    color: 'white',
    [theme.breakpoints.only('xs')]: {
      paddingTop: '5rem',
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: '8rem',
    },
    [theme.breakpoints.only('md')]: {
      paddingTop: '11rem',
    },
    [theme.breakpoints.only('lg')]: {
      paddingTop: '10rem',
    },
    [theme.breakpoints.only('xl')]: {
      paddingTop: '11rem',
    },
  },
  title: {
    width: '50%',
    overflow: 'hidden',
    textOverflow: 'hidden',
    wordBreak: 'break-all',
    lineHeight: 1.4,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  author: {
    display: 'flex',
    justifyContent: 'row',
  },
}));

export default function ItemFeature({ post }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item>
        <Link to={'/post/' + post._id}>
          <Card className={classes.paper}>
            <CardActionArea>
              <CardMedia className={classes.media} image={post.photo} />
              <CardContent className={classes.content}>
                <Box display="flex" flexDirection="column">
                  <div>
                    <Typography
                      variant="caption"
                      style={{ backgroundColor: 'tomato', padding: '3px' }}
                    >
                      {post.category}
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      {post.title}
                    </Typography>
                  </div>
                  <div className={classes.author}>
                    <Typography variant="caption">
                      By <span>{post.author}</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ marginLeft: '10px' }}
                    >
                      {new Date(post.createdAt).toDateString()}
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </ThemeProvider>
  );
}

// font-family: "Varela Round", sans-serif;
//   font-size: 14px;
//   color: #444;
//   line-height: 24px;
//   margin-top: 15px;
//   overflow: auto;
//   word-break: break-all;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 4;
//   -webkit-box-orient: vertical;
