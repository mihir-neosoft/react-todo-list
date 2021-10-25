import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigationBar from './SubComponents/NavigationBar';

export default function Home() {
    return (
        <>
            <NavigationBar pagename="Home"/>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        // backgroundColor: (t) =>
                        //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        <Typography component="h1" variant="h2" color="white">
                            Hello
                        </Typography>
                        <Typography component="h1" variant="h3" color="white">
                            Welcome to My App
                        </Typography>
                        <br />
                        <Grid container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={1}>
                                <Link to="/Login">
                                    <Button variant="contained" size="large">
                                        Login
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to="/Register">
                                    <Button variant="contained" size="large">
                                        Register
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}