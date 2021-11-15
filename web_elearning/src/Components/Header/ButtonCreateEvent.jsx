import React from 'react'
import { Typography, Button } from '@mui/material';

function ButtonCreateEvent() {
    return (
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
    )
}

export default ButtonCreateEvent
