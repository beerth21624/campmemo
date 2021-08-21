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
      paddingTop: '4rem',
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: '6rem',
    },
    [theme.breakpoints.only('md')]: {
      paddingTop: '8rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '10rem',
    },
    //   overflow:'auto',
    // wordBreak: 'break-all',
    // textOverflow: 'ellipsis',
  },
  title: {},
  author: {
    display: 'flex',
    justifyContent: 'row',
  },
}));

export default function ItemFeature() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item>
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent className={classes.content}>
              <Box display="flex" flexDirection="column">
                <div className={classes.title}>
                  <Typography
                    variant="caption"
                    style={{ backgroundColor: 'tomato', padding: '3px' }}
                  >
                    camping
                  </Typography>
                  <Typography variant="h5">Lorem Ipsum</Typography>
                </div>
                <div className={classes.author}>
                  <Typography variant="caption">By Beerdosan</Typography>
                  <Typography variant="caption" style={{ marginLeft: '10px' }}>
                    11 Nov 2021
                  </Typography>
                </div>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
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