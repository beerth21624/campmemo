import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';



const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#a36955',
    },
  },
});
const useStyles = makeStyles((theme) => ({
    category:{
        margin:'0.3rem 0',
        height:'3.5rem',
        border:'none',
        backgroundPosition: 'center',
        background: 'linear-gradient(rgba( 0, 0, 0, 0.8), rgba( 0,0,0,0.1)),url(https://images.unsplash.com/photo-1504732099162-d8c9d5ba3bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0Mjk1MjR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60)',
    },
    adimg:{
        width:'100%',
        height:'50vh',
        borderRadius:'10px',
        marginBottom:'40px',
        [theme.breakpoints.only('sm')]:{
          marginLeft:'23%',
          width:'50%'
        }

    },
    boxmargin:{
      marginLeft:'20px',
      [theme.breakpoints.down('sm')]:{
        marginLeft:0,
      }
    }
  }));

const Category=()=>{
    const classes = useStyles();

    return(
         <ThemeProvider theme={theme}>
             <Box
             display='flex'
             flexDirection='column'
             marginTop='30px'
             className={classes.boxmargin}
             >  
                
                <img className={classes.adimg} src='https://blogzine.webestica.com/assets/images/adv.png' alt='' />
           
                <Typography variant='h5' gutterBottom ><b>Trending topics</b></Typography>
                <Button variant="outlined" color="primary" className={classes.category}>
                    camping
                </Button>
                <Button variant="outlined" color="primary" className={classes.category}>
                    camping
                </Button>
                <Button variant="outlined" color="primary" className={classes.category}>
                    camping
                </Button>
                <Button variant="outlined" color="primary" className={classes.category}>
                    camping
                </Button>
             </Box>
          </ThemeProvider>
    )
}
export default Category