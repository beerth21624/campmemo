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
    maxHeight: '64vh',
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
    borderRadius: '5px',
    color: 'white',
    padding: '3px',
    top: 260,
    left: 20,
    zIndex: 9,
  },
  boxitem: {
    margin: '15px 5px',
  },
  cardcontent: {
    minHeight: '100px',
  },
  title: {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'hidden',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  desc: {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
  },
}));

const MainPost = ({ post }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item md={6} style={{ padding: '10px' }}>
        <Card className={classes.root} square>
          <Link to={`/post/${post._id}`} className="link">
            <CardActionArea>
              <div className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={post.photo}
                  title="camp"
                />
                <Typography variant="caption" className={classes.carditem}>
                  {post.category}
                </Typography>
              </div>
              <CardContent className={classes.cardcontent}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  className={classes.title}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.desc}
                >
                  {post.desc}
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
