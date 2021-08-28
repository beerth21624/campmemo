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
import { Box } from '@material-ui/core';
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
    backgroundColor: 'inherit',
    borderRadius: '10px',
    boxShadow: 'none',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px',
    justifyContent: 'flex-start',
  },
  img: {
    width: '200px',
    height: '180px',
    borderRadius: '40px',
  },
  textContainer: {
    marginLeft: '6px',
  },
  text: {
    fontSize: '1.3rem',
    fontWeight: 700,
    lineHeight: 1,
    color: '#191a1f',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
  },
  desc: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
  author: {
    marginLeft: '10px',
  },
}));

const CategoryCard = ({ post }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <Link to={'/post/' + post._id} className="link">
          <CardActionArea className={classes.card}>
            <img className={classes.img} src={post.photo} alt="" />
            <div className={classes.textContainer}>
              <Typography variant="h4" className={classes.text}>
                {post.title}
              </Typography>
              <Typography className={classes.desc}>{post.desc}</Typography>
              <Box
                display="flex"
                flexDirection="row"
                marginTop="5px"
                color="gray"
              >
                <Typography variant="caption">
                  {new Date(post.createdAt).toDateString()}
                </Typography>
                <Typography variant="caption" className={classes.author}>
                  By <span>{post.author}</span>
                </Typography>
              </Box>
            </div>
          </CardActionArea>
        </Link>
      </Card>
    </ThemeProvider>
  );
};
export default CategoryCard;
