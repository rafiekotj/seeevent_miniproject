import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SigninForm from '../../Components/SigninForm/SigninForm';


function Signin() {
    return (
        <div className="Signin">
            <div className="Top">
                {/* <Header /> */}
            </div>
            <div className="Mid">
                <SigninForm />
            </div>
                {/* <Footer /> */}
        </div>
    );
}

export default Signin;