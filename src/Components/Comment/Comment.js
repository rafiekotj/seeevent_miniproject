import React from 'react'
import './Comment.css'
import { Typography, Avatar } from '@mui/material';

function commentField(props) {
    const {data} = props
    function stringToColor(string) {
      let hash = 0;
      let i;
    
      /* eslint-disable no-bitwise */
      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }
    
      let color = '#';
    
      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
      }
      /* eslint-enable no-bitwise */
    
      return color;
    }
    
    function stringAvatar(name) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }
    console.log(data)
    return (
        <div className="profile">
            <div className="avatar">
                <Avatar {...stringAvatar('Yoshua Ginting')} />
                <div className="name_avatar">
                    <Typography component="h2" sx={{
                        fontWeight: 'bold',  
                        fontSize: '16px',
                        margin: 0
                    }}>
                        {data.nameProfile}
                    </Typography>
                    <Typography component="h2" sx={{
                        fontWeight: 'normal',  
                        fontSize: '12px',
                        margin: 0
                    }}>
                        {data.dateAgo}
                    </Typography>
                </div>
            </div>
            <Typography component="h2" sx={{
                fontWeight: 'normal',  
                fontSize: '14px',
                margin: '16px 0'
            }}>
                {data.commentAccount}
            </Typography>
        </div>
    )
}

export default commentField;