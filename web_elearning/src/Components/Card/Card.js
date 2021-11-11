import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Stack, Paper, styled } from '@mui/material';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';

function CardComp() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: '4px 16px',
        fontSize: '10px',
        textAlign: 'center',
        color: '#214457',
        background: '#F0F2E9',
      }));

    return (
        <Card sx={{ 
            maxWidth: 288,
            height: 352,
            borderRadius: '8px',
            marginLeft: '108px'
            }}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1.png"
                sx={{ 
                    width: '288px',
                    height: '200px',
                }}
            />
            <CardContent>
                <div className="content-wrapper">
                    <Stack direction="row" spacing={2}>
                        <Item>Business</Item>
                    </Stack>
                    <ShareOutlined color="action" sx={{ fontSize: 22, marginLeft:'134px', marginTop:'1px' }}/>
                    <BookmarkBorderOutlined color="action" sx={{ fontSize: 22, marginLeft:'10px', marginTop:'1px' }}/>
                </div>
                
                <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        fontFamily: 'Noto Sans',
                        fontSize: '12px',
                        lineHeight: '16px',
                        marginTop: '8px',
                        color: '#373737'
                    }}
                >
                    SUN, OCT 24 @ 1:15 AM ICT
                </Typography>
                <Typography 
                    sx={{
                        width: '272px',
                        height: '40px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: '#000000',
                        marginTop: '8px',
                    }}
                >
                    How to make your business growth 10 times within 1 year
                </Typography>
                <Typography 
                    sx={{
                        width: '272px',
                        height: '16px',
                        fontWeight: 'normal',
                        fontSize: '12px',
                        color: '#999999',
                        marginTop: '8px',
                    }}
                >
                    By Adit nento
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardComp
