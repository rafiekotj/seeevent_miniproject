import './HeaderCreate.css'
import { Typography, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
        <div className="headerHome">
            <div className="logoHome">
                <img className="iconHome" src="Pictures/SeeEventLogo(3).svg" alt="Logo" />
                <p>SeeEvent</p>
            </div>
            <div className="signHome">
                <Typography>
                    <Link to="/register">
                        <Button variant="text">
                            <Typography
                                sx={{
                                    fontFamily: 'Noto Sans',
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    lineHeight: '28px',
                                    fontSize: '20px',
                                }}
                            >
                                Sign Up
                            </Typography>
                        </Button>
                    </Link>
                    <Link to="/">
                    <Button variant="text">
                        <Typography
                            sx={{
                                fontFamily: 'Noto Sans',
                                color: 'white',
                                textTransform: 'capitalize',
                                lineHeight: '28px',
                                fontSize: '20px'
                            }}
                        >
                            Sign In
                        </Typography>
                    </Button>
                    </Link>
                    
                    <Button
                        variant='contained'
                        sx={{
                            background: 'linear-gradient(45deg, #F2D555 30%, #F2D555 90%)',
                            borderRadius: 99,
                            height: '40px',
                            width: '184px',
                            color: '#373737',
                            fontWeight: 'bold',
                            marginRight: '108px',
                            marginLeft: '20px'
                        }}
                    >
                        Create Events
                    </Button>
                </Typography>

            </div>

        </div>
    )
}

export default HeaderCreate;