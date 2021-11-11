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
                                lineHeight: '28px',
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
                                    lineHeight: '28px',
                                    fontSize: '20px'
                                }}
                        >
                            Sign In
                        </Typography>
                    </Button>
                </Typography>
                
            </div>
            
        </div>
    )
}

export default Header;