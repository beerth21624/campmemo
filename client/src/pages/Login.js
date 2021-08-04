import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AttachFileOutlined } from '@material-ui/icons';

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
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width:'100vw',
    height: 'calc(100vh - 64px)',
    background: 'linear-gradient(rgba( 255, 255, 255, 0.3), rgba( 255, 255, 255, 0.3)),url(https://images.unsplash.com/photo-1525811902-f2342640856e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'
  },
  formContainer:{
    boxShadow:'1px 3px 5px 0px rgba(0,0,0,0.35)',
    backgroundColor:'white',
    padding:'20px',
    borderRadius:"20px",
   

  },
  formIcon:{
   fontSize:'70px',
  },
  formtitle:{
    marginBottom:20
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
        <Grid container justifyContent="center" alignItems="center" className={classes.image} >
          <Grid item xs={11} sm={8} md={6} lg={5} className={classes.formContainer}  >
        
        <div className={classes.paper}>
        <AccountCircleIcon  className={classes.formIcon} color="primary"/>
        <Typography component="h1" variant="h5" className={classes.formtitle}>
            Welcome Back
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="secondary">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" color="secondary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright color='#010101' />
        </Box>
        </Grid>
        </Grid>
    </ThemeProvider>
  );
}