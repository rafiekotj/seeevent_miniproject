import './Header.css'
import { Typography, Button } from '@mui/material';

function Header () {

    return (
        <div className="header">
            <div className="logo">
                <img className="icon" src="Pictures/SeeEventLogo(3).svg" alt="Logo" />
                <p>SeeEvent</p>
            </div>
            <div className="sign">
                <Typography>
                    <Button variant="text">
                        <Typography
                            sx={{
                                fontFamily: 'Noto Sans',
                                color: 'white',
                                textTransform: 'capitalize',
                                width: '80px',
                                height: '28px',
                                fontSize: '20px',
                            }}
                        >
                        Sign Up
                        </Typography>
                    </Button>
                    <Button variant="text">
                        <Typography
                                sx={{
                                    fontFamily: 'Noto Sans',
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    width: '80px',
                                    height: '28px',
                                    fontSize: '20px'
                                }}
                        >
                            Sign In
                        </Typography>
                    </Button>
                    <Button variant="contained"
                        sx={{
                            background: 'linear-gradient(45deg, #F2D555 30%, #F2D555 90%)',
                            border: 0,
                            borderRadius: 99,
                            marginLeft: '24px',
                            marginRight: '108px',
                            height: 48,
                            padding: '0 30px',
                        }}
                    >
                        <Typography
                                sx={{
                                    fontFamily: 'Noto Sans',
                                    color: '#373737',
                                    width: '160px',
                                    textTransform: 'capitalize',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}
                        >
                            Creat Event
                        </Typography>
                    </Button>
                </Typography>
                
            </div>
            
        </div>
    )
}

export default Header;