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
    width: '180px',
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
  },
}));

const ProfilePost = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <Link to={`/post/123456`} className="link">
          <CardActionArea className={classes.card}>
            <img
              className={classes.img}
              src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
            <div className={classes.textContainer}>
              <Typography variant="h4" className={classes.text}>
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography>
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,{' '}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                11 Nov 200
              </Typography>
            </div>
          </CardActionArea>
        </Link>
      </Card>
    </ThemeProvider>
  );
};
export default ProfilePost;
