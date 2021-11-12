import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Signinform from '../../Components/SigninForm/SigninForm';
import Container from '@mui/material/Container'

function Signin() {
    return (
        <div className="Signin">
            <div className="Top">
            <Header />
            </div>
            <div className="Mid">
            <Container sx={{width: 600, height: 678}}>
            <Signinform />
            </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Signin;
