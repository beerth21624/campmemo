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
    maxHeight: 600,
  },
  media: {
    height: 350,
    [theme.breakpoints.only('md')]: {
      height: 300,
    },
    [theme.breakpoints.only('sm')]: {
      height: 290,
    },
    [theme.breakpoints.only('xs')]: {
      height: 250,
    },
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
    top: 300,
    left: 20,
    zIndex: 9,
    [theme.breakpoints.only('lg')]: {
      top: 310,
      left: 20,
    },
    [theme.breakpoints.only('md')]: {
      top: 240,
      left: 20,
    },
    [theme.breakpoints.down('sm')]: {
      top: 220,
      left: 20,
    },
  },

  boxitem: {
    marginRight: '10px',
  },
  cardcontent: {
    minHeight: 145,
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

              <Box
                display="flex"
                alignItems="center"
                marginLeft="1rem"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" flexDirection="row">
                  <Avatar
                    alt="Remy Sharp"
                    src={post.authorPic}
                    className={classes.boxitem}
                  />
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.boxitem}
                  >
                    By <span>{post.author}</span>
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.boxitem}
                >
                  {new Date(post.createdAt).toDateString()}
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
