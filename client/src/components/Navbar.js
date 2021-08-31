import React, { useContext, useState, useEffect } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { logout } from '../context/authContext/AuthAction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import { GetUserContextService } from '../context/getUserContext/GetUserContextService';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

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
    flex: '1',
    textAlign: 'left',
  },
  btn: {
    marginRight: '10px',
  },
  user: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { user, dispatch } = useContext(AuthContext);
  const [userData, setUserData] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const callUser = async () => {
      const authorUser = await GetUserContextService(user);
      authorUser && setUserData(authorUser.nameAuthor);
      authorUser && setImage(authorUser.profilePic);
      authorUser && setUserId(authorUser._id);
      setMenu(null);
    };
    callUser();
  }, [user]);

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };
  return (
    <AppBar position="sticky">
      <Toolbar
        style={{
          backgroundColor: 'white',
          zIndex: 99,
          boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.25)',
        }}
      >
        <div className={classes.root}>
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/campmemo-1fee1.appspot.com/o/Screen_Shot_2564-07-31_at_17.55.15-removebg-preview.png?alt=media&token=7f14ae24-ccb6-4b14-b381-809f6500f758"
              alt=""
              style={{ height: '60px', width: '140px' }}
            />
          </Link>
        </div>
        <ThemeProvider theme={theme}>
          <Link to="/editor" className="link">
            <Button className={classes.btn} style={{ borderRadius: '40px' }}>
              Create
            </Button>
          </Link>
          {!user ? (
            <Link to="/login" className="link">
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: '40px' }}
              >
                Login
              </Button>
            </Link>
          ) : (
            <>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                style={{ gap: '10px' }}
              >
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.user}
                >
                  {userData}
                </Typography>
                <Avatar alt="Remy Sharp" src={image} onClick={handleClick} />
              </Box>
              <Menu
                anchorEl={menu}
                keepMounted
                open={Boolean(menu)}
                onClose={handleClose}
              >
                <Link to={'/profile/' + userId} className="link">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
