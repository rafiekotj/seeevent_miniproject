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
    const styling = () => {
        if(pathname != '/event') {
            return <ButtonCreateEvent sx={{display: 'hidden'}}/>
        } 
    }
    
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}> 
            <div className="logo">
                
                    <img className="icon" src="Pictures/SeeEventLogo(3).svg" alt="Logo" />
                    <p>SeeEvent</p>
                
            </div>
            </Link>
            <div className="search_header">
                {/* <SearchField /> */}
            </div>
            <div className="account_header">
                {/* <AvatarHeader /> */}
            </div>
            <div className="sign">
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <ButtonSignUp />
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <ButtonSignIn />
                </Link>
                
                {/* {pathname != '/event' && (<Link to="/event">
                    <ButtonCreateEvent sx={{display: 'hidden'}}/>
                </Link>)} */}

                {/* {pathname == '/event' && (<Link to="/event">
                    <AvatarHeader />
                </Link>)} */}
            </div>
            
        </div>
    )
}

export default Header;