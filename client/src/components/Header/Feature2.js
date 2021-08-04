import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import itemFeature from './ItemFeature'
import ItemFeature from './ItemFeature';

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
  root:{
    gap:'1rem',
    paddingLeft:'20px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft:'0',
      gap:'2rem'
    },
  },
 
  
}));

export default function Feature2() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
      <Grid item container direction='column' md={6} className={classes.root} >
        <ItemFeature />
        <ItemFeature />
      </Grid>
    </ThemeProvider>
  );
}