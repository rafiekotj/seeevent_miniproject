import React from 'react'
import { Stack, Container, Link, TextField, Grid, Typography, Button, MenuItem, Box, TextareaAutosize } from '@mui/material';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';

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
    const [value, setValue] = React.useState(new Date('2021-01-01T00:00:00.000Z'));
    const [currency, setCurrency] = React.useState('');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };

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
                    <Typography component="h2" sx={{fontWeight: 'bold', fontStyle: 'normal', fontSize: 40, lineHeight: 3.5}}>
                        Create a new event!
                    </Typography>
                    
                    <Box component="form" sx={{width: 500, maxWidth: '100%',}}>
                        <Grid container spacing={3}>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                        <img src="Pictures/event.png" alt="No Picture" />
                        <Button 
                            variant="outlined" 
                            startIcon={<FileUploadRounded />}
                            sx={{
                                border: '2px solid #214457',
                                boxSizing: 'border-box',
                                borderRadius: '10px',
                                color: '#214457',
                                width: '288px',
                                height: '48px',
                                margin: '24px 0 32px 210px'
                            }}
                        >
                            Upload Image
                        </Button>
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
                                    <DateTimePicker
                                        renderInput={(params) => <TextField {...params} />}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-select-currency"
                                    fullWidth
                                    select
                                    label="Category"
                                    value={currency}
                                    onChange={handleChange}
                                    sx={{
                                        borderRadius: '10px'
                                    }}
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} style={{borderRadius: 10}}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={8}
                                    placeholder="Event Details"
                                    style={{ 
                                        width: 500,
                                        border: '1px solid #B4B4BB',
                                        boxSizing: 'border-box',
                                        borderRadius: '4px',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{
                                mt:3, 
                                mb:2,
                                backgroundColor: '#214457', 
                                color: '#ffff'
                            }}
                        >
                            Create
                        </Button>
                    </Box>
                    <Grid container justifyContent="center" sx={{marginBottom: '120px', marginTop: '16px'}}>
                        <Grid item>
                            <Link href="#" variant="body2" underline="none" sx={{
                                fontFamily: 'Noto Sans',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                color: '#3E89AE',
                            }}>
                                Having issue when creating a new event?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>        
        </div>
    )
}

export default InEvent
