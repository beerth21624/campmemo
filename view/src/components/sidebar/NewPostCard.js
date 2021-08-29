import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
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
    marginBottom: '7px',
    backgroundColor: '#F3F3F3',
    borderRadius: 'none',
    boxShadow: 'none',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px',
    justifyContent: 'flex-start',
  },
  img: {
    width: '70px',
    height: '53px',
    borderRadius: '4px',
  },
  textContainer: {
    marginLeft: '6px',
  },
  text: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    lineHeight: 1,
    color: '#191a1f',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
}));

const NewPostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <Link to={`/post/${post._id}`} className="link">
          <CardActionArea className={classes.card}>
            <img className={classes.img} src={post.photo} alt="" />
            <div className={classes.textContainer}>
              <Typography variant="h6" className={classes.text}>
                {post.title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(post.createdAt).toDateString()}
              </Typography>
            </div>
          </CardActionArea>
        </Link>
      </Card>
    </ThemeProvider>
  );
};
export default NewPostCard;
