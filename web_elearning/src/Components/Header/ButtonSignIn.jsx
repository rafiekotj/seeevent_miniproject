import React from 'react'
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ButtonSignIn() {
    const coba = () => {
        <Link to='/login' />
        console.log(<Link/>)
    }
    return (
        <div>
            <Button variant="text" onClick={coba}>
                <Typography
                    sx={{
                        fontFamily: 'Noto Sans',
                        color: 'white',
                        textTransform: 'capitalize',
                        lineHeight: '28px',
                        fontSize: '20px',
                        }}
                    >
                    Sign In
                </Typography>
            </Button>
        </div>
    )
}

export default ButtonSignIn
