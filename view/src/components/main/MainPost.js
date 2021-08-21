import React, { useEffect } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ConvertPost } from './ConvertPost';

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
    backgroundColor: '#F3F3F3',
    boxShadow: 'none',
  },
  media: {
    height: '40vh',
    borderRadius: '10px',
  },
  card: {
    position: 'relative',
  },
  carditem: {
    position: 'absolute',
    backgroundColor: 'tomato',
    color: 'white',
    padding: '3px',
    top: 260,
    left: 20,
    zIndex: 9,
  },
  boxitem: {
    margin: '15px 5px',
  },
}));

const MainPost = ({ post }) => {
  const classes = useStyles();

  // useEffect(() => {
  //   ConvertPost(post);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid item md={6} style={{ padding: '10px' }}>
        <Card className={classes.root} square>
          <Link to={`/post/123456`} className="link">
            <CardActionArea>
              <div className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1522041350204-22285237eeca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAxfHxjYW1waW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  title="camp"
                />
                <Typography variant="caption" className={classes.carditem}>
                  camping
                </Typography>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <Box display="flex" alignItems="center" marginLeft="1rem">
                <Avatar
                  alt="Remy Sharp"
                  src="https://pbs.twimg.com/profile_images/1320044036179197952/hHmbojkt_400x400.jpg"
                  className={classes.boxitem}
                />
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.boxitem}
                >
                  By beerdosan
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.boxitem}
                >
                  {' '}
                  11 Nov 2000
                </Typography>
              </Box>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};
export default MainPost;
