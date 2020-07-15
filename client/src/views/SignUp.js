import React, { useState } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import axios from 'axios';


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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    var history = useHistory();

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [openPassword, setOpenPassword] = React.useState(false);
    // const [existUsername, setexistUsername] = useState(false);
    const [error, setError] = useState("");

    const handleClosePassword = () => {
        setOpenPassword(false);
    };
    var errorString = "";
    const handleRegister = () => {
        console.log(password);
        console.log(confirmedPassword);
        // var object = {
        //     '': username,
        //     'password': password
        //     // 'firstname': firstName,
        //     // 'lastname': lastname
        // };
        // var data = JSON.stringify(object);


        if (password === confirmedPassword) {
            console.log('password and confirmed password are match!')
            // console.log(data);
            axios.post('/api/signup', { email: email, password: password })
                .then((res) => {
                    console.log(res.data);
                    history.push({ pathname: '/' })
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            console.log("Password and confirmed password are not match!");
            alert("Password and confirmed password are not match!");
            window.location.reload();
            // setError("Password and confirmed password are not match!");
            // setOpenPassword(true);
        }
    }
    //console.log(error);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{color: 'black'}}>
                    Sign up
                </Typography>
                {/* <form className={classes.form} noValidate> */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={(val) => setEmail(val.target.value)}
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
                            onChange={(val) => setPassword(val.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="con_password"
                            label="Confirmed Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(val) => setConfirmedPassword(val.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleRegister}
                >
                    Sign Up
                    </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                            </Link>
                    </Grid>
                </Grid>

                <Dialog
                    open={openPassword}
                    onClose={handleClosePassword}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {error}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClosePassword} color="primary" autoFocus>
                            Retry
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Container>
    );
}