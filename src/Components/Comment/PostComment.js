// import React from 'react'
// import './Comment.css'
// import { Typography, Avatar } from '@mui/material';
// import { useDispatch } from 'react-redux';

// export const PostComment = ({post}) => {

//     function stringToColor(string) {
//       let hash = 0;
//       let i;
    
//       /* eslint-disable no-bitwise */
//       for (i = 0; i < string.length; i += 1) {
//         hash = string.charCodeAt(i) + ((hash << 5) - hash);
//       }
    
//       let color = '#';
    
//       for (i = 0; i < 3; i += 1) {
//         const value = (hash >> (i * 8)) & 0xff;
//         color += `00${value.toString(16)}`.substr(-2);
//       }
//       /* eslint-enable no-bitwise */
    
//       return color;
//     }
    
//     function stringAvatar(name) {
      
//       if(name){
//         return {
//           sx: {
//             bgcolor: stringToColor(name),
//           },
//           children: `${name?.split(' ')?.[0]?.[0]}${name?.split(' ')?.[1]?.[0]}`,
//         };
//       }
//     }
//     return (
//         <div className="profile">
//             <div className="avatar">
//                 <Avatar {...stringAvatar('test')} />
//                 <div className="name_avatar">
//                     <Typography component="h2" sx={{
//                         fontWeight: 'bold',  
//                         fontSize: '16px',
//                         margin: 0
//                     }}>
//                         Adam
//                     </Typography>
//                     <Typography component="h2" sx={{
//                         fontWeight: 'normal',  
//                         fontSize: '12px',
//                         margin: 0
//                     }}>
//                         Now
//                     </Typography>
//                 </div>
//             </div>
//             <Typography component="h2" sx={{
//                 fontWeight: 'normal',  
//                 fontSize: '14px',
//                 margin: '16px 0'
//             }}>
//                 {post.title}
//             </Typography>
//         </div>
//     )
// }

import React, { Component } from 'react'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../Redux/action/authAction'

export const PostComment = ({post}) => {
    const dispatch = useDispatch();
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.content}</p>
                </div>
                <div className="card-action">
                    <button 
                    onClick={() => dispatch(deleteComment(post.id))} 
                    className="btn red">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

