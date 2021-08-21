import React, { useContext } from 'react';
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
}));

const Navbar = () => {
  const classes = useStyles();
  const { user, dispatch } = useContext(AuthContext);

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
          <a href="/">
            <img
              src="/images/logo.png"
              alt=""
              style={{ height: '60px', width: '140px' }}
            />
          </a>
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
            <Link to="/login" className="link">
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: '40px' }}
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            </Link>
          )}
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
