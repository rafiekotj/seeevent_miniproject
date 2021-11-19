import React from 'react'
import { Typography, Button } from '@mui/material';

function ButtonSignUp() {
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
                    Sign Up
                </Typography>
            </Button>
        </div>
    )
}

export default ButtonSignUp
