import React, { useState, useEffect } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
const axios = require('axios');

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
  grid: {
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
  },
  root: {
    maxWidth: 345,
    textAlign: 'center',
    // backgroundColor:'#DFDFDF',
    // border:'1px solid orange',
    boxShadow: 'none',
    padding: '20px',
    borderRadius: '30px',
    marginTop: '30px',
    [theme.breakpoints.only('xs')]: {
      width: '90%',
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: 0,
      width: '97%',
      maxWidth: 'none',
    },
    position: 'sticky',
  },
  media: {
    width: '100px',
    height: '100px',
    margin: 'auto',
  },
}));

const Author = ({ author }) => {
  const classes = useStyles();
  const [Author, setAuthor] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await axios.get('/user/author/' + author);
      setAuthor(user.data);
    };
    fetchUser();
  }, [author]);

  return (
    <ThemeProvider theme={theme}>
      <Grid item md={2} sm={12} className={classes.grid}>
        {Author && (
          <>
            <Card className={classes.root}>
              <Typography variant="h5" paragraph>
                Author
              </Typography>
              <CardMedia
                className={classes.media}
                image={Author.profilePic}
                title=""
                style={{ borderRadius: '50%' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {Author.nameAuthor}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Author.profileDesc}
                </Typography>
              </CardContent>

              <Link to={'/profile/' + Author._id} className="link">
                <Button size="small" color="Default">
                  view profile
                </Button>
              </Link>
            </Card>
          </>
        )}
      </Grid>
    </ThemeProvider>
  );
};
export default Author;
