import React from 'react'
import { Stack, Container, Link, TextField, Grid, Typography, Button, MenuItem, Box, TextareaAutosize } from '@mui/material';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';

function Review() {
    return (
        <div>
            <Container component="secondary" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: '10px',
                        flexDirection: 'column',
                    }}
                    >
                    <Grid>
                        <Typography component="h2" sx={{
                            fontWeight: 'bold', 
                            fontStyle: 'normal', 
                            fontSize: 32,
                            width: '531px',
                            height: '36px',
                        }}>
                            ESL Game: English on Your Feet!™
                        </Typography>
                    </Grid>
                    
                    
                </Box>
            </Container>
        </div>
    )
}

export default Review
