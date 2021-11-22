import React from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Link} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  { Container } from '@mui/material'
import './signupform.css'
import { register } from '../../Redux/action/authAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

const schema = yup.object({
    firstName: yup
    .string()
    .required('The Field Is Required'),
    lastName: yup
    .string()
    .required('The Field Is Required'),
    email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is Required'),
    password: yup
    .string('Please Enter Your Password')
    .required('Password must be required')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password Must be at least 8 Characters"
    ),
    confirmPassword: yup
    .string()
    .required('Re-enter your password')
    .oneOf([yup.ref("password"), null], "Password must match")
})



const Signupform = props => {
    const font = "'Noto Sans', sans-serif"
const dispatch = useDispatch()
const history = useHistory();
    
    const theme=createTheme({
        typography: {
            fontFamily: font
        }
    });
    
    return (
        <Formik 
        validationSchema={schema}
        onSubmit={(values) => {console.log(values); dispatch(register(values));
        history.push('/login')}}
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
            }) => (
            <div className="Signup">
            <ThemeProvider theme={theme}>
            <Container component="secondary" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '0px',
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
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        values={values.firstName}
                        onChange={handleChange}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                        <TextField 
                        name="lastName"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                        <TextField 
                        name="email"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                />
                        </Grid>
                        <Grid item xs={12} style={{borderRadius: 10}}>
                        <TextField
                        id='confirm-password'
                        name='confirmPassword'
                        label='Confirm Password'
                        fullWidth
                        
                        onChange={handleChange('confirmPassword')}
                        value={values.confirmPassword}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        required
                        type='password'
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        sx={{
                            mt: 3,
                            mb:2,
                            textTransform: "none",
                            fontWeight: "Bold",
                            fontStyle: "Normal",
                            fontSize: "20px",
                            backgroundColor: "#214457",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#2f5c74",
                                boxShadow: "none"
                            },
                        }}
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
            
        </div>)}
        </Formik>
    );
}

export default Signupform