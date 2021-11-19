import React from 'react';
import Footer from '../../Components/Footer/Footer';
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Container from '@mui/material/Container'
import HeaderSearch from '../../Components/HeaderSearch/HeaderSearch'


const Account = () => {
    return (
        <div className="Account">
            <div className="top">
                {/* <HeaderSearch /> */}
            </div>
            <br />
            <div className="mid">
                <Container sx={{width: '1224px', height: '267px'}}>
                <ProfileCard />
                </Container>
            </div>
            <br />
            {/* <Footer /> */}
        </div>
    );
}

export default Account;
