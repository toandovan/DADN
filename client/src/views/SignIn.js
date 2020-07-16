import React, { Component, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line
import FormControlLabel from '@material-ui/core/FormControlLabel';
// eslint-disable-next-line
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'
// eslint-disable-next-line
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthApi from '../variables/AuthApi';
// import { userPostFetch } from '../redux/action';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import {connect} from 'react-redux';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  // const mapDispatchToProps = dispatch => ({
  //   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
  // })
  var history = useHistory();
  const classes = useStyles();

  const authApi = React.useContext(AuthApi)
  const signInHandle = () => {
    authApi.setAuth(false)
  }

  useEffect(() => {
    axios.post('api/prepare').then(res => {
      console.log(res)
    });
  }, [])
    

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  //  var handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  var handleSubmit = event => {
    axios.post('/api/login', { email: username, password: password })
      .then(res => {
        // console.log(res.)
        if (res.data.valid == 0) {
          // console.log("incorrect");
          alert('Username and password are not match');
          // authApi.setAuth(false);
          window.location.reload();
        }
        else {
          console.log("correct");
          console.log(res.data);
          localStorage.setItem('auth', "true");
          console.log(localStorage.getItem("auth"));
          // authApi.setAuth(true);
          history.push({pathname: '/admin/dashboard'});
          // window.location.assign('/admin/dashboard');
          console.log("go")
        }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ color: 'black' }}>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            placeholder={props.test}
            onChange={e => setUsername(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}



// export default connect(null, mapDispatchToProps)(SignIn);