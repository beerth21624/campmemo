import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import { ThemeProvider } from '@material-ui/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'right ',
    width:'100vw',
    height: 'calc(100vh - 64px)',
    // backgroundImage:'url(https://images.unsplash.com/photo-1623072932867-80d024272cb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'
    background: 'linear-gradient(rgba( 255, 255, 255, 0.5), rgba( 255, 255, 255, 0.5)),url(https://images.unsplash.com/photo-1623072932867-80d024272cb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'
  },
  formContainer:{
    boxShadow:'1px 3px 5px 0px rgba(0,0,0,0.25)',
    backgroundColor:'white',
    padding:'20px',
    borderRadius:"20px",
    opacity:0.9
  },
  formIcon:{
    fontSize:'70px',
    margin: theme.spacing(1),
   }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
        <Grid container justifyContent="center" alignItems="center" className={classes.image}>
           <Grid item xs={11} sm={8} md={6} lg={5} className={classes.formContainer}>
            <CssBaseline />
            <div className={classes.paper}>
                   <AssignmentIndIcon  className={classes.formIcon} color="primary"/>
                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        autoComplete="username"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                    
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Register
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
           </Grid>  
         </Grid>
    </ThemeProvider>
  );
}
