import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Category from './Category';
import NewPost from './NewPost';

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
    
  
   
  }));

const Sidebar=()=>{
    const classes = useStyles();

    return(
         <ThemeProvider theme={theme}>
         <Grid item container md={3} direction='column'>
           <Category />
           <NewPost />
          
         </Grid>
          </ThemeProvider>
    )
}
export default Sidebar