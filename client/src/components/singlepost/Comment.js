import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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
    display:'flex',
    flexDirection:'row'
  }
   
  }));

const Comment=()=>{
    const classes = useStyles();

    return(
         <ThemeProvider theme={theme}>
            <Paper className={classes.root} >
                comming soon
            </Paper>
                
          </ThemeProvider>
    )
}
export default Comment