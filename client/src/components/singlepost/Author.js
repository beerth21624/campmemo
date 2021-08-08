import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
        maxWidth:345,
        textAlign:'center',
        // backgroundColor:'#DFDFDF',
        // border:'1px solid orange',
        boxShadow:'none',
        padding:'20px',
        borderRadius:'30px',
        marginTop:'30px',
      [theme.breakpoints.down('sm')]:{
        marginLeft:0,
      },
      position:'sticky'
      },
      media: {
        height:'30vh',
        width:'100px',
        height:'100px',
        margin:'auto'

      },
  
   
  }));

const Author=()=>{
    const classes = useStyles();

    return(
         <ThemeProvider theme={theme}>
             <Grid item  md={2} style={{paddingRight:'20px'}} >
              <Card className={classes.root}>
                
                    <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    title=""
                    style={{borderRadius:'50%'}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Beerdosan
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                    
                    <Link to={`/profile/123456`} className="link">
                      <Button size="small" color="Default">
                      view profile
                      </Button>
                    </Link>
             
                </Card>
                </Grid>
          </ThemeProvider>
    )
}
export default Author
