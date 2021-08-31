import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Copyright from '../Copyright';

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
    height: '25vh',
    backgroundColor: '#191a1f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: '20px',
  },
  copyright: {
    // bottom: 20,
    // left: '43%',
    // position: 'absolute',
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid md={12}>
        <Paper className={classes.root} square>
          <div className={classes.copyright}>
            <Copyright color="#FFFFFF" />
          </div>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};
export default Main;
