import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { amber } from '@material-ui/core/colors';

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
      flex:'1',
      textAlign:"left"
    },
    btn:{
        marginRight:"10px"
    }
  
   
  }));

const Navbar=()=>{
    const classes = useStyles();

    return(
        
        <AppBar position="static">
        <Toolbar style={{backgroundColor:"white",zIndex:99,boxShadow:"0px 0px 6px 0px rgba(0,0,0,0.25)"}}>
         <div className={classes.root}>
            <img src="/images/logo.png" alt="" style={{height:'60px',width:'140px'}} />
         </div>
         <ThemeProvider theme={theme}>
          <Button className={classes.btn}>Create</Button>
          <Button variant="outlined" color="primary">
             Login
          </Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    )
}
export default Navbar









