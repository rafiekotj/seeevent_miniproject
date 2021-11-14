import React from 'react'
import { Stack, Container, Link, TextField, Grid, Typography, Button, MenuItem, Box, TextareaAutosize } from '@mui/material';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker, DesktopDatePicker } from '@mui/lab';

const currencies = [
    {
        value: 'business',
        label: 'Business',
    },
    {
        value: 'marketing',
        label: 'Marketing',
    },
    {
        value: 'design',
        label: 'Design',
    },
    {
        value: 'development',
        label: 'Development',
    },
];

function InEvent() {
    const [value, setValue] = React.useState(null);

    return (
        <div>
            <Container component="secondary" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h2" sx={{ fontWeight: 'bold', fontStyle: 'normal', fontSize: 40, lineHeight: 3.5 }}>
                        Create a new event!
                    </Typography>
                    <Box component="form" sx={{ width: 500, maxWidth: '100%', }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} style={{ borderRadius: 10 }}>
                                <TextField
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack>
                                        <DesktopDatePicker
                                            label="For desktop"
                                            value={value}
                                            minDate={new Date('2017-01-01')}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} style={{ borderRadius: 10 }}>
                                <TextField
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                />
                            </Grid>
                            <Grid item xs={12} style={{ borderRadius: 10 }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} style={{ borderRadius: 10 }}>
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
                            sx={{ mt: 3, mb: 2 }}
                            style={{ backgroundColor: '#214457', color: '#ffff' }}
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
            <Box component="form" sx={{
                textAlign: 'center',
                alignItems: 'center',
            }}>
                <Grid item xs={12}>
                    <Typography variant="h2">
                        Create a new event!
                    </Typography>
                    <img src="Pictures/event.png" alt="No Picture" />
                    <Button variant="outlined" startIcon={<FileUploadRounded />}>
                        Upload Image
                    </Button>
                    <Box sx={{
                        display: 'block',
                        width: 600,
                        maxWidth: '100%',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '600px'
                    }}>
                    <Grid item xs={12}>
                    <TextField
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                }}
                    />
                    </Grid>
                </Grid>

            </Box>
        </Grid>
            </Box >


        </div >
    )
}

export default InEvent
