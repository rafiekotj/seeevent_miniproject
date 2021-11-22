import React from 'react';
import Footer from '../../Components/Footer/Footer';
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Container from '@mui/material/Container'
import HeaderSearch from '../../Components/HeaderSearch/HeaderSearch'
import HeaderCreate from '../../Components/HeaderCreate/HeaderCreate';


const Account = () => {
    return (
        <div className="Account">
            <div className="top">
                <HeaderCreate />
            </div>
            <br />
            <div className="mid">
                
                <ProfileCard />
                
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Account;
