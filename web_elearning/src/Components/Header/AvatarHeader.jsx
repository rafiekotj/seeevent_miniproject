import React from 'react'
import { Typography, IconButton, Avatar } from '@mui/material';
import Male from '../../Assets/male.png'

function AvatarHeader() {
    return (
        <div>
            <IconButton
                    sx={{ color: 'white' }}>
                    <Avatar alt="pratur" src={Male} sx={{width: 32, height: 32}} />
                    <Typography
                        sx={{
                            margin: '10px',
                            fontFamily: 'Noto Sans',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            lineHeight: '25.5px',
                            color: 'white'
                    }}>
                        My Account
                    </Typography>
                </IconButton>
        </div>
    )
}

export default AvatarHeader
