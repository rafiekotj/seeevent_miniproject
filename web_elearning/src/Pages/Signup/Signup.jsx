import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Signupform from '../../Components/SignupForm/SignupForm';
import Container from '@mui/material/Container'

const Signup = () => {
    return (
        <div className="Signup">
            <div className="Top">
            <Header />
            </div>
            <br />
            <br />
            <div className="Mid">
            <Container sx={{width: 600, height: 678}}>
            <Signupform />
            </Container>
            </div>
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default Signup;
