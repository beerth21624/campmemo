import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
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
    root:{
        marginBottom:'7px',
        backgroundColor:'#F3F3F3',
        borderRadius:'none',
        boxShadow:'none'
     
    },
     card:{
       display:'flex',
       flexDirection:'row',
       padding:'6px',
       justifyContent:'flex-start'
    },
    img:{
      width:'70px',
      height:'53px',
      borderRadius:'4px',
    
      
    },
    textContainer:{
      marginLeft:'6px'
    },
    text:{
      fontSize: '0.9375rem',
      fontWeight: 700,
      lineHeight: 1,
      color: '#191a1f',
      marginBottom:'0.5rem'

    }
  
   
  }));

const NewPostCard=()=>{
    const classes = useStyles();

    return(
         <ThemeProvider theme={theme}>
                 <Card className={classes.root}>
                   <CardActionArea className={classes.card}>
                   <img className={classes.img} src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                   <div className={classes.textContainer}>
                       <Typography variant='h6' className={classes.text} >Lorem Ipsum is simply dummy text</Typography>
                       <Typography variant='caption' color='textSecondary'>11 Nov 200</Typography>
                   </div>
                   </CardActionArea>
                 </Card>
          </ThemeProvider>
    )
}
export default NewPostCard