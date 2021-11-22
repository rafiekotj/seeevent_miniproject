import './HeaderforHome.css'
import { Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import ButtonSignUp from '../Header/ButtonSignUp';
import ButtonSignIn from '../Header/ButtonSignIn';
import ButtonCreateEvent from '../Header/ButtonCreateEvent';
import AvatarHeader from '../Header/AvatarHeader';

function HeaderforHomee() {
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
            <Button
                        variant='contained'
                        sx={{
                            background: 'linear-gradient(45deg, #F2D555 30%, #F2D555 90%)',
                            borderRadius: 99,
                            height: '40px',
                            width: '184px',
                            color: '#373737',
                            fontWeight: 'bold',
                            marginTop: '8px',
                            marginRight: '39px',
                            marginLeft: '-200px',
                            display: 'flex'
                        }}
                    >
                        Create Events
                    </Button>
                    <Link to="/account" style={{ textDecoration: 'none' }}>
                        <AvatarHeader />
                    </Link>


            </div>

        </div>
    )
}

export default HeaderforHomee;