import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Link} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import  { Container } from '@mui/material'
import './signupform.css'

const Signupform = () => {
    const font = "'Noto Sans', sans-serif"

    const theme=createTheme({
        typography: {
            fontFamily: font
        }
    });
    


    return (
        <div>
            <ThemeProvider theme={theme}>
            <Container component="secondary" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Typography component="h2" sx={{fontWeight: 'bold', fontStyle: 'normal', fontSize: 40, lineHeight: 3.5}}>
                        Join us!
                    </Typography>
                    <Box component="form" sx={{width: 500, maxWidth: '100%',}}>
                    <Grid container spacing={3}>
                    <Grid item xs={12} style={{borderRadius: 10}}>
                        <TextField 
                        name="firstname"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                        <TextField 
                        name="lastname"
                        required
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                        <TextField 
                        name="email"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                id="password"
                                autoComplete="new-password"
                                />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                id="confirm_password"
                                autoComplete="new-password"
                                />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{mt:3, mb:2}}
                        style={{backgroundColor: '#214457', color: '#ffff'}}
                        >Sign Up</Button>
                    </Box>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Having Issue when Signup?
                            </Link>
                            </Grid>
                    </Grid>
                    </Box>
            </Container>
            </ThemeProvider>
        </div>
    )
}
export default Signupform;

