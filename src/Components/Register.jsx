import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavigationBar from './SubComponents/NavigationBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';

const URL = "http://localhost:3000/Users";
const theme = createTheme();

export default function Register() {

    const [user, setUser] = useState({ userdata: [] });

    let firstNameinput = useRef(null);
    let lastNameinput = useRef(null);
    let userNameinput = useRef(null);
    let emailinput = useRef(null);
    let passwordinput = useRef(null);
    let confirmpasswordinput = useRef(null);
    let alertmsg = null;

    // eslint-disable-next-line
    useEffect(() => axios.get(URL).then(response => setUser({ ...user, userdata: response.data })), []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let FormData = {
            id: null,
            firstName: firstNameinput.current.value,
            lastName: lastNameinput.current.value,
            userName: userNameinput.current.value.toLowerCase(),
            email: emailinput.current.value.toLowerCase(),
            password: passwordinput.current.value,
            confirmpassword: confirmpasswordinput.current.value
        }
        let maxuserid = 0;
        let userexist = false;
        user.userdata.forEach(users => {
            if (users.id >= maxuserid) {
                maxuserid = users.id;
            }
            if (users.email === FormData.email || users.userName === FormData.userName) {
                userexist = true;
            }
        });
        if (userexist === false) {
            if (FormData.password === FormData.confirmpassword) {
                let newuserdata = {
                    id: maxuserid + 1,
                    firstName: FormData.firstName,
                    lastName: FormData.lastName,
                    userName: FormData.userName,
                    email: FormData.email,
                    password: FormData.password
                }
                axios.post(URL, newuserdata)
                    .then(response => {
                        setUser({ ...user, userdata: response.data });
                        console.log(user.userdata);
                    });
                alertmsg = <Alert severity="success">register successful</Alert>;
                window.location.href = "/"

            } else {
                alertmsg = <Alert severity="success">register successful</Alert>
                console.log("password not matched");
            }
        } else {
            alertmsg = <Alert severity="success">register successful</Alert>
            console.log("User Exist already");
        }


    };

    return (
        <ThemeProvider theme={theme}>
            <NavigationBar pagename="Register" />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {alertmsg}
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    inputRef={firstNameinput}
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    inputRef={lastNameinput}
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="userName"
                                    inputRef={userNameinput}
                                    label="User Name"
                                    name="userName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    inputRef={emailinput}
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    inputRef={passwordinput}
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    inputRef={confirmpasswordinput}
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmpassword"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/Login">Already have an account? Login</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}