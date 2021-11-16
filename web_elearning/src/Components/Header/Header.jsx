import './Header.css'
import { Typography, Button, Link } from '@mui/material';
import ButtonSignUp from './ButtonSignUp';
import ButtonSignIn from './ButtonSignIn';
import ButtonCreateEvent from './ButtonCreateEvent';
import SearchField from './SearchField';
import AvatarHeader from './AvatarHeader';

function Header () {

    return (
        <div className="header">
            <div className="logo">
                <img className="icon" src="Pictures/SeeEventLogo(3).svg" alt="Logo" />
                <p>SeeEvent</p>
            </div>
            <div className="search_header">
                <SearchField />
            </div>
            <div className="account_header">
                <AvatarHeader />
            </div>
            <div className="sign">
                <Link to="/register">
                    <ButtonSignUp />
                </Link>
                {/* <Link to="/login"> */}
                    <ButtonSignIn />
                {/* </Link> */}
                <Link to="/event">
                    <ButtonCreateEvent />
                </Link>
            </div>
            
        </div>
    )
}

export default Header;