import './Attend.css'
import { useHistory, Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Stack, Paper, styled } from '@mui/material';
// import ShareOutlined from '@mui/icons-material/ShareOutlined';
// import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import CardComp from '../Card/Card'

function Attend () {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: '4px 16px',
        fontSize: '10px',
        textAlign: 'center',
        color: '#214457',
        background: '#F0F2E9',
      }));

    const dataCard = [
       {
        image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1.png',
        category: 'Business',
        datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
        title: 'How to make your business growth 10 times within 1 year',
        createdBy: 'Adit nento',
        bookmark: true,
       },
       {
        image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1.png',
        category: 'Business',
        datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
        title: 'Hitting Reset: How to Land A Job in UX Design',
        createdBy: 'Ernest',
        bookmark: false
       },
       {
        image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (2).png',
        category: 'Marketing',
        datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
        title: 'Google Ads 101 with the best marketing agency',
        createdBy: 'Budi Setiawan',
        bookmark: false
       },
       {
        image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (3).png',
        category: 'Design',
        datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
        title: 'How to create design system',
        createdBy: 'Agung Dwi Putra',
        bookmark: false
       },
    ]

    return (
        <div className="attend">
            <div className="top">
                <div className="title">
                    <Typography
                        sx={{
                            fontFamily: 'Noto Sans',
                            color: '#373737',
                            textTransform: 'capitalize',
                            fontSize: '40px',
                            fontWeight: 'bold',
                            marginLeft: '108px',
                            marginTop: '120px',
                            marginBottom: '48px',
                            width: '618px',
                            height: '57px',
                        }}
                    >
                        Attend an event starting soon
                    </Typography>
                </div>
                <div className="klik">
                    <Link to="/post" style={{ textDecoration: 'none' }}>
                    <Button variant="text"
                        sx={{
                            marginTop: '137px',
                            marginLeft: '493px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Noto Sans',
                                color: '#3E89AE',
                                textTransform: 'capitalize',
                                width: '101px',
                                height: '26px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}
                        >
                        More Events
                        </Typography>
                    </Button>
                    </Link>
                </div>

            </div>
            <div className="card">
                {dataCard?.map(item => (
                    <CardComp data={item} />
                ))}
               
            </div>
        </div>
    )
}

export default Attend;