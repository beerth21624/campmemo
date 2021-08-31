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
import ProfileCard from '../components/profile/ProfileCard';
import axios from 'axios';
import { AuthContext } from '../context/authContext/AuthContext';
import { useLocation } from 'react-router-dom';
import { GetUserContextService } from '../context/getAuthorContext /GetAuthorContextService';
import { Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditProfile from '../components/profile/EditProfile';

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
  paperBack: {
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
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  img: {
    width: 200,
    height: 200,
    border: '13px solid #191a1f',
    borderRadius: '50%',
    marginTop: '-17vh',
  },
  name: {
    marginTop: '20px',
    [theme.breakpoints.only('xs')]: {
      fontSize: 28,
    },
  },
  desc: {
    padding: '0 20vh',
    [theme.breakpoints.only('xs')]: {
      padding: '0 5vh',
    },
  },
  btnload: {
    margin: '40px 0',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  const [limit, setLimit] = useState(6);
  const [open, setOpen] = useState(false);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await GetUserContextService(user);
      if (currentUser) {
        if (UserInput === currentUser._id) {
          setMyUser(true);
        }
      }
      const userdata = await axios.get('/api/user/userprofile/' + UserInput);
      setProfileData(userdata.data);
      const posts = await axios.get(
        '/api/post/profile/' + UserInput + '?limit=' + limit
      );
      setPost(posts.data);
      setUpdated(false);
    };
    fetchUser();
  }, [limit, updated, UserInput, user]);

  const handleLimit = () => {
    const newLimit = limit + 5;
    setLimit(newLimit);
    console.log(newLimit);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(Post.length);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper square className={classes.paperBack}></Paper>
        <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.paperRoot}>
            <div className={classes.profileContainer}>
              <img
                className={classes.img}
                src={profileData.profilePic}
                alt=""
              ></img>

              <Typography variant="h4" className={classes.name} gutterBottom>
                <b>{profileData.nameAuthor}</b>
              </Typography>
              <Typography className={classes.desc} paragraph>
                {profileData.profileDesc}
              </Typography>
              <Box display="flex" flexDirection="row">
                <EcoIcon />
                <Typography color="textSecondary">
                  Join In {new Date(profileData.createdAt).toDateString()}
                </Typography>
              </Box>
              {myUser && (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                  onClick={handleOpen}
                >
                  Edit profile
                </Button>
              )}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <EditProfile
                    profile={profileData}
                    open={setOpen}
                    updated={setUpdated}
                  />
                </Fade>
              </Modal>

              <Box
                width="80%"
                display="flex"
                flexDirection="column"
                marginTop="100px"
              >
                {Post.map((post) => (
                  <ProfileCard
                    key={post._id}
                    post={post}
                    myUser={myUser}
                    updated={setUpdated}
                  />
                ))}
              </Box>
              {Post.length >= 6 && (
                <Button
                  className={classes.btnload}
                  color="primary"
                  onClick={handleLimit}
                >
                  Load more post
                  <KeyboardArrowDownIcon />
                </Button>
              )}
            </div>
          </Paper>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
export default Profile;
