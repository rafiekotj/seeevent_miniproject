import './Header.css'
import { useHistory, Link } from 'react-router-dom'
import { Typography, Button } from '@mui/material';
import ButtonSignUp from './ButtonSignUp';
import ButtonSignIn from './ButtonSignIn';
import ButtonCreateEvent from './ButtonCreateEvent';
import SearchField from './SearchField';
import AvatarHeader from './AvatarHeader';

function Header () {
    const history = useHistory();
    const {location} = history;
    const {pathname} = location;
    console.log(history);
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
                <Link to="/login">
                    <ButtonSignIn />
                </Link>
                {pathname != '/event' && (<Link to="/event">
                    <ButtonCreateEvent />
                </Link>)}
            </div>
            
        </div>
    )
}

export default Header;