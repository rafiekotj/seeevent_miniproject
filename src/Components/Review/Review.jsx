import React from 'react'
import './Review.css'
import { Stack, Container, Link, TextField, Grid, Typography, Button, Avatar, Box, Paper } from '@mui/material';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import { styled } from '@mui/material/styles';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import { comment } from '../../Redux/action/authAction';
import { useDispatch } from 'react-redux';
import commentField from '../Comment/Comment'

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

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: '4px 16px',
        fontSize: '10px',
        textAlign: 'center',
        color: '#214457',
        background: '#F0F2E9',
    }));
    
    const dispatch = useDispatch();

    const dataComment = [
        {
            nameProfile: 'Yoshua Ginting',
            dateAgo: '4 days ago',
            commentAccount: 'Hi, do you have a youtube channel that I can subscribe?',
        },
        {
            nameProfile: 'Yoshua Ginting',
            dateAgo: '4 days ago',
            commentAccount: 'goood',
        },
        {
            nameProfile: 'Yoshua Ginting',
            dateAgo: '4 days ago',
            commentAccount: 'mantap',
        },
     ]

    return (
        <div>
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
                            ESL Game: English on Your Feet!™
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
                                SUN, OCT 24 @ 1:15 AM ICT
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Item>Business</Item>
                            </Stack>
                        </div>
                        <img src="Pictures/unsplash_rxpThOwuVgE.png" alt="posting"/>
                        <Box sx={{
                            width: 808,
                            }}
                        >
                            <Grid container spacing={1} columns={12}
                                sx={{
                                    marginTop: '32px',
                                }}
                            >
                                <Grid item xl={7}>
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
                                        fontWeight: 'normal',  
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                    }}>
                                    Welcome to the Parlor! Let's play English on Your Feet!™

                                    GET FEEDBACK
                                    GAIN CONFIDENCE
                                    LAYER UP YOUR ENGLISH!™

                                    Everyone will have a chance to speak to the "audience" and receive feedback from the audience and our coaches. You don't need to prepare anything--just prepare to have fun and try!

                                    Relax. Layer Up your English!™

                                    We look forward to your participation.

                                    PLEASE READ: 5 Important Notes about this Meetup

                                    1) This event is not a lecture or conversation practice.
                                    This is a structured activity in which all attendees are expected to actively participate.

                                    2) Participation in "English on Your Feet!™ is optimal for English language learners at the intermediate level and above.

                                    3) Each member-participant is allowed one guest-participant per meetup as space allows. Guest-participants may attend as guests a maximum of 2 times then must join to continue.

                                    4) If your plans change, please update your RSVP. Repeated "no-shows" will be removed.

                                    5) We use Google Meet. A Google or Gmail account is NOT required to use the link and join our meeting. Before the meetup, please open the link (given to you when you RSVP) and explore the following features on the same device that you will use to attend: mute/unmute, chat box, and the additional options menu. (See the PHOTO for visual instructions.)
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
                                        {dataComment?.map(item => (
                                            <commentField data={item} />
                                        ))}
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
                                                fullWidth
                                                multiline
                                                rows={4}
                                                placeholder="Enter your comment here"
                                                sx={{
                                                    marginTop: '16px',
                                                    marginBottom: '16px',
                                                }}
                                            />
                                            <Button 
                                                variant="contained"
                                                onClick={(value) => dispatch(comment(value))}
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
                                    </div>
                                    
                                </Grid>
                                <Grid item xl={5}>
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
        </div>
    )
}

export default Review
