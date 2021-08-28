import React, { useEffect, useState, useContext } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Footer from '../components/footer/Footer';
import EcoIcon from '@material-ui/icons/Eco';
import ProfileCard from '../components/ProfileCard';
import axios from 'axios';
import { AuthContext } from '../context/authContext/AuthContext';
import { useLocation } from 'react-router-dom';
import { GetUserContextService } from '../context/getAuthorContext /GetAuthorContextService';
import { Button } from '@material-ui/core';

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
    backgroundColor: '#191a1f',
    paddingBottom: '30px',
  },
  paper: {
    height: '30vh',
    backgroundColor: '#191a1f',
  },
  paperRoot: {
    minHeight: '45vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '37px',
  },
  container: {
    marginTop: '-10vh',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
  },
  img: {
    width: 200,
    height: 200,
    border: '13px solid #191a1f',
    borderRadius: '50%',
    marginTop: '-17vh',
  },
  username: {
    marginTop: '20px',
  },
  desc: {
    padding: '0 20vh',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const UserInput = location.pathname.split('/')[2];
  const [myUser, setMyUser] = useState(false);
  const [profileData, setProfileData] = useState('');
  const [Post, setPost] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await GetUserContextService(user);
      if (currentUser) {
        if (UserInput === currentUser._id) {
          setMyUser(true);
        }
      }
      const userdata = await axios.get('/user/userprofile/' + UserInput);
      setProfileData(userdata.data);
      const posts = await axios.get('/post/profile/' + UserInput);
      setPost(posts.data);
    };
    fetchUser();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper square className={classes.paper}></Paper>
        <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.paperRoot}>
            <div className={classes.profileContainer}>
              <img
                className={classes.img}
                src={profileData.profilePic}
                alt=""
              ></img>

              <Typography
                variant="h4"
                className={classes.username}
                gutterBottom
              >
                <b>{profileData.username}</b>
              </Typography>
              <Typography className={classes.desc} paragraph>
                {profileData.desc}
              </Typography>
              <Box display="flex" flexDirection="row">
                <EcoIcon />
                <Typography color="textSecondary">
                  Join In {new Date(profileData.createdAt).toDateString()}
                </Typography>
              </Box>
              {myUser && (
                <Button variant="contained" color="primary">
                  Edit profile
                </Button>
              )}
              <Box
                width="80%"
                display="flex"
                flexDirection="column"
                marginTop="100px"
              >
                {Post.map((post) => (
                  <ProfileCard key={post._id} post={post} />
                ))}
              </Box>
            </div>
          </Paper>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
export default Profile;
