import './HeaderCreate.css'
import { Typography, Button } from '@mui/material';
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import AvatarHeader from '../Header/AvatarHeader';
import SearchField from '../Header/SearchField';
import logoHeader from '../../Assets/SeeEventLogo(3).svg'

function HeaderCreate() {
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
        <div className="headerCreate">
            <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className="logoCreate">
                <img className="iconCreate" src={logoHeader} alt="Logo" />
                <p>SeeEvent</p>
            </div>
            </Link>
            <div className="signCreate">
                <SearchField />
                    
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

export default HeaderCreate;