import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Stack, Paper, styled } from '@mui/material';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import CardStyle from './CardStyle'

function CardComp(props) {
    const {data} = props
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: '4px 16px',
        fontSize: '10px',
        textAlign: 'center',
        color: '#214457',
        background: '#F0F2E9',
      }));

    console.log(data)

    return (
        <Card sx={CardStyle.containerCard}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data.image}
                sx={{ 
                    width: '288px',
                    height: '200px',
                }}
            />
            <CardContent>
                <div className="content-wrapper">
                    <Stack direction="row" spacing={2}>
                        <Item>{data.category}</Item>
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
                    {data.datePost}
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
                    {data.title}
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
                    {`By ${data.createdBy}`}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardComp
