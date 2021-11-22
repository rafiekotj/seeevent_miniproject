import './HeaderforHome.css'
import { Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import ButtonSignUp from '../Header/ButtonSignUp';
import ButtonSignIn from '../Header/ButtonSignIn';
import ButtonCreateEvent from '../Header/ButtonCreateEvent';

function HeaderforHome() {
    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #F2D555 30%, #F2D555 90%)',
            borderRadius: '99px',
            height: 40,
            width: 184,
        },
    });
    const classes = useStyles();
    return (
        <div className="headerHome">
            <div className="logoHome">
                <img className="iconHome" src="Pictures/SeeEventLogo(3).svg" alt="Logo" />
                <p>SeeEvent</p>
            </div>
            <div className="signHome">
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <ButtonSignUp />
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <ButtonSignIn />
                </Link>


            </div>

        </div>
    )
}

export default HeaderforHome;