import React from 'react';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import LogoutIcon from '@mui/icons-material/Logout';
import Male from '../../Assets/male.png'

const Profilecard = () => {
    const font = "'Noto Sans', sans-serif"

    const theme=createTheme({
        typography: {
            fontFamily: font,
            color: "#000"
        }
    });

    return (
            <ThemeProvider theme={theme}>
            <Container component="primary" sx={{width: "388px", height: "195px"}}>
                <CssBaseline />
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar src={Male} sx={{width: 72, height: 72}} />
                    <Typography component="h2" variant="p"sx={{
                        fontSize: "20px", 
                        lineHeight: "44px", 
                        color: "#373737"
                    }}>Pratur Anahata Pratama</Typography>
                    <Typography component="h4" variant="h6" sx={{lineHeight: "22px", color: "#000", fontSize: "16px"}}>praturanhata45@gmail.com</Typography>
                    <br />
                    <Button startIcon={<LogoutIcon/>} variant="outlined" sx={{ background: 'white',  color:'#214457', borderRadius: 2}} >Sign Out</Button>
                    </Box>
            </Container>
            </ThemeProvider>
        
    );
}

export default Profilecard;
