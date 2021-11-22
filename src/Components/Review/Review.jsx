import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Review.css'
import { Stack, Container, Link, TextField, Grid, Typography, Button, Avatar, Box, Paper } from '@mui/material';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import { styled } from '@mui/material/styles';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import { CommentList} from '../Comment/CommentList'
import { useDispatch } from 'react-redux';
import commentField from '../Comment/Comment'
import { v4 as uuidv4 } from "uuid"
import {addComment} from '../../Redux/action/authAction'
import CommentField from '../Comment/Comment';
import {useParams} from 'react-router-dom'
import HeaderCreate from '../HeaderCreate/HeaderCreate';
import Footer from '../Footer/Footer';
import {PostComment} from '../Comment/PostComment'
import { useSelector } from 'react-redux'
import { AddComment } from '../Comment/AddComment';

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

function Review() {
    const [post, setPost] = useState({
        id: '',
        title: ''
    })
    const {posts} = useSelector(state => state);
    const [dataDetail, setDataDetail] = useState()
    const [dataComments, setDataComments] = useState()
    const {id} = useParams()
    const dispatch = useDispatch()
    const currentToken = localStorage.getItem("token")

    useEffect(() => {
        const fetchDetail = async () => {
            try{
                const res = await axios.get(`https://timdevent.herokuapp.com/events/${id}`)
                
                setDataDetail(res.data.data)
                console.log(res.data.data)
            } catch(error) {
                console.log(error)
            }
        }
        const fetchComment = async () => {
            try{
                const res = await axios.get(`https://timdevent.herokuapp.com/comments/${id}`, {
                    headers: {
                        Authorization: `Bearer ${currentToken}`
                    }
                })
                console.log(res)
                setDataComments(res.data.allComments)
            } catch(error) {
                console.log(error)
            }
        }
        if(id){
            console.log(currentToken)
            fetchDetail()
            fetchComment()
        }
    }, [id])

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(post))
        setPost({
            id: uuidv4(),
            title: '',  
        })
    }
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: '4px 16px',
        fontSize: '10px',
        textAlign: 'center',
        color: '#214457',
        background: '#F0F2E9',
    }));

    return (
        <div>
            <HeaderCreate />
            <Container component="primary" maxWidth="xl">
                <Box
                    sx={{
                        marginTop: '64px',
                        marginLeft: '316px',
                    }}
                    >
                    <Grid item xs={12}>
                        <Typography component="h2" sx={{
                            fontWeight: 'bold', 
                            fontStyle: 'normal', 
                            fontSize: '32px',
                            width: '531px',
                            height: '36px',
                            margin: 0
                        }}>
                            {dataDetail?.title}
                        </Typography>
                        <div className="info">
                            <CalendarTodayOutlined sx={{ fontSize: 20 }} />
                            <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                fontFamily: 'Noto Sans',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: '#373737',
                                marginLeft: '13px',
                                marginRight: '24px'
                            }}
                            >
                                {dataDetail?.eventDate} @ {dataDetail?.eventTime}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Item>{dataDetail?.category?.category}</Item>
                            </Stack>
                        </div>
                        <img src={dataDetail?.photoEvent} alt="posting"/>
                        <Box sx={{
                            width: 808,
                            }}
                        >
                            <Grid container columns={12}
                                sx={{
                                    marginTop: '32px',
                                }}
                            >
                                <Grid item xl={7} sx={{padding: 0}}>
                                    <Typography component="h2" sx={{
                                        fontWeight: 'bold',  
                                        fontSize: '24px',
                                        width: '84px',
                                        height: '27px',
                                        margin: 0
                                    }}>
                                    Details
                                    </Typography>
                                    <Typography component="h5" sx={{
                                        width: '496px',
                                        fontWeight: 'normal',  
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                    }}>
                                    {dataDetail?.detail || ''}
                                    </Typography>
                                    <div className="comment">
                                        <Typography component="h2" sx={{
                                            fontWeight: 'bold',  
                                            fontSize: '24px',
                                            width: '130px',
                                            height: '27px',
                                            margin: 0
                                        }}>
                                        Comments
                                        </Typography>

                                        {dataComments?.map(item => (
                                            <CommentField data={item}/>
                                        ))}

                                        
                                        
                                        <form onSubmit={handleSubmit}>
                                            <div className="profile">
                                                <div className="avatar">
                                                    <Avatar {...stringAvatar('Yoshua Ginting')} />
                                                    <div className="name_avatar">
                                                        <Typography component="h2" sx={{
                                                            fontWeight: 'bold',  
                                                            fontSize: '16px',
                                                            margin: 0
                                                        }}>
                                                        Yoshua Ginting
                                                        </Typography>
                                                    </div>
                                                </div>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    onChange={handleChange}
                                                    value={post.title}
                                                    name='title'
                                                    multiline
                                                    rows={4}
                                                    placeholder="Enter your comment here"
                                                    sx={{
                                                        marginTop: '16px',
                                                        marginBottom: '16px',
                                                        width: '496px',
                                                        height: '128px'
                                                    }}
                                                />
                                                <Button 
                                                    variant="contained"
                                                    startIcon={<ChatBubbleOutline />}
                                                    sx={{
                                                        width: '184px',
                                                        height: '48px',
                                                        borderRadius: '10px',
                                                        background: 'linear-gradient(45deg, #214457 30%, #214457 90%)',
                                                        marginLeft: '282px',
                                                        marginBottom: '100px'
                                                    }}
                                                >
                                                    <Typography component="h2" sx={{
                                                        fontWeight: 'bold',  
                                                        fontSize: '20px',
                                                        width: '116px'
                                                    }}>
                                                        Submit
                                                    </Typography>
                                                </Button>
                                            </div>
                                        </form>
                                        {/* <AddComment />
                                        <CommentList /> */}
                                    </div>
                                    
                                </Grid>
                                <Grid item xl={5} sx={{padding: 0}}>
                                    
                                    <div className="created_by">
                                        <Avatar {...stringAvatar('Yoshua Ginting')} />
                                        <div className="name_create">
                                            <Typography component="h2" sx={{
                                                fontWeight: 'normal',  
                                                fontSize: '12px',
                                                margin: 0
                                            }}>
                                                Created By
                                            </Typography>
                                            <Typography component="h2" sx={{
                                                fontWeight: 'bold',  
                                                fontSize: '16px',
                                                margin: 0
                                            }}>
                                                Yoshua Ginting
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <Button 
                                            variant="outlined" 
                                            startIcon={<ShareOutlined sx={{color: '#214457',}} />}
                                            sx={{
                                                width: '136px',
                                                height: '48px',
                                                borderRadius: '10px',
                                                border: '1px solid #214457',
                                                marginRight: '16px'
                                                }}
                                            >
                                            <Typography component="h2" sx={{
                                                fontWeight: 'bold',  
                                                fontSize: '20px',
                                                color: '#214457',
                                            }}>
                                                Share
                                            </Typography>
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            startIcon={<BookmarkBorderOutlined />}
                                            sx={{
                                                width: '136px',
                                                height: '48px',
                                                borderRadius: '10px',
                                                background: 'linear-gradient(45deg, #214457 30%, #214457 90%)',
                                                }}
                                            >
                                            <Typography component="h2" sx={{
                                                fontWeight: 'bold',  
                                                fontSize: '20px',
                                                
                                            }}>
                                                Save
                                            </Typography>
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                        
                    </Grid>
                    
                    
                </Box>
            </Container>
            <Footer />
        </div>
    )
}

export default Review
