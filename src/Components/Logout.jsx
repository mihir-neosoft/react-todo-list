import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigationBar from './SubComponents/NavigationBar';
import { useEffect } from 'react';

export default function Logout() {
    useEffect(() => {
        localStorage.clear();
    }, [])
    return (
        <>
            <NavigationBar pagename="Logout successfull" />
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
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
                            Logout Successfull
                        </Typography>
                        <br />
                        <Link to="/">
                            <Button variant="contained" size="large">
                                <Typography component="h1" variant="h5" color="white">
                                    back to Home
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
