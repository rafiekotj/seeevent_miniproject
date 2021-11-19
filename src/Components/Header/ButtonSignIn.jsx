import React from 'react'
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ButtonSignIn() {

    return (
        <div>
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
                    Sign In
                </Typography>
            </Button>
        </div>
    )
}

export default ButtonSignIn
