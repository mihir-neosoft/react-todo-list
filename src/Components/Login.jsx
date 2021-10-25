
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import NavigationBar from './SubComponents/NavigationBar';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import SecureLS from 'secure-ls';

const theme = createTheme();
const URL = "http://localhost:3000/Users";

export default function Login() {

    const [user, setUser] = useState({ userdata: [] });
    let emailinput = useRef(null);
    let passwordinput = useRef(null);

    // eslint-disable-next-line
    useEffect(() => axios.get(URL).then(response => setUser({ ...user, userdata: response.data })), []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let FormData = {
            email: emailinput.current.value.toLowerCase(),
            password: passwordinput.current.value
        }
        let usernotfound = 1;
        user.userdata.forEach(users => {
            if (users.email === FormData.email || users.userName === FormData.email) {
                usernotfound = 0;
                if (users.password === FormData.password) {
                    console.log("login successful.");
                    localStorage.setItem("user", users.id);
                    const DATA = [
                        { id: 1, name: "Task 1", priority: 5, completed: false }
                    ];
                    var ls = new SecureLS();
                    ls.set(localStorage.getItem("user"), JSON.stringify(DATA));

                    window.location.href = "/Homepage"

                }
                else {
                    console.log("Invaild Password.");
                }
            }
        });
        if (usernotfound === 1) {
            console.log("User not Found.");
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationBar pagename="Login" />
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            id="email"
                            label="UserName or Email"
                            inputRef={emailinput}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            id="password"
                            label="Password"
                            inputRef={passwordinput}
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/Changepassword">Forgot password?</Link>
                            </Grid>
                            <Grid item>
                                <Link to="/Register">Don't have an account? Register</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}