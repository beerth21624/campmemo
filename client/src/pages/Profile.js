import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Footer from '../components/footer/Footer'
import EcoIcon from '@material-ui/icons/Eco';
import ProfilePost from '../components/ProfilePost';

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
        backgroundColor:'#191a1f',
        paddingBottom:'30px'
    },
    paper:{
        height:'30vh',
        backgroundColor:'#191a1f'
    },
    paperRoot:{
        minHeight:'45vh',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
    },
    container:{
        marginTop:'-10vh',
       

    },
    profileContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        padding:'20px'
    },
    img:{
        width:200,
        height:200,
        border:'13px solid #191a1f',
        borderRadius:'50%',
        marginTop:'-17vh',
        backgroundImage:'url(https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxwZW9wbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center',
    },
    username:{
        marginTop:'20px'
    },
    desc:{
        padding:'0 20vh'
    }
  
    
  }));

const Profile=()=>{
    const classes = useStyles();

    return(
         <ThemeProvider theme={theme}>
             <div className={classes.root}>
             <Paper square className={classes.paper}></Paper>
             <Container maxWidth='md' className={classes.container}>
                <Paper className={classes.paperRoot}>
                    <div className={classes.profileContainer}>
                        <Box className={classes.img}></Box>
                        <Typography variant='h4' className={classes.username} gutterBottom><b>Fernfernnn</b></Typography>
                        <Typography className={classes.desc} paragraph>Lorem Ipsum is simply dummy text of the printing</Typography>
                        <Box display='flex' flexDirection='row'>
                            <EcoIcon />
                             <Typography color='textSecondary'> Join on 11 Nov 2000</Typography>
                        </Box>
                        <Box 
                            width='80%' 
                            display='flex'
                            flexDirection='column'
                            marginTop='100px'
                        >
                            <ProfilePost />
                            <ProfilePost />
                            <ProfilePost />
                            <ProfilePost />
                            <ProfilePost />
                        </Box>
                      
                    </div>
                </Paper>
             </Container>
             </div>
            <Footer />
         </ThemeProvider>
    )
}
export default Profile