import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    background:
      'linear-gradient(rgba( 0, 0, 0, 0.5), rgba( 0,0,0,0.1)),url(https://images.unsplash.com/photo-1485809052957-5113b0ff51af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '24px',
    padding: '3rem',
    marginBottom: '30px',
    [theme.breakpoints.only('xs')]: {
      height: '30vh',
    },
    [theme.breakpoints.only('sm')]: {
      height: '45vh',
    },
  },
  title: {
    flexGrow: 1,
    color: 'white',
    [theme.breakpoints.up('xs')]: {
      fontSize: '44px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '74px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '84px',
    },
  },
  box: {},
}));

export default function Feature1() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item md={6}>
        <Paper className={classes.root} elevation={24}>
          <div className={classes.title}>Share your camping story...</div>
          <Box display="flex" flexDirection="column" className={classes.box}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              style={{ borderRadius: '40px' }}
            >
              <Typography color="textSecondary">CREATE YOUR POST</Typography>
            </Button>
            {/* <Link href="#" variant="body2" style={{color:'white'}}>
                  {"Don't have an account? Sign Up"}
                </Link> */}
          </Box>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
}
