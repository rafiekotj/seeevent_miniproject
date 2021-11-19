import './SearchDesign.css'
import { Paper, styled, Grid } from '@mui/material';
import CardComp from '../Card/Card'

function SearchDesign () {

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
    image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (1).png',
    category: 'Design',
    datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
    title: 'Hitting Reset: How to Land A Job in UX Design',
    createdBy: 'Ernest'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (3).png',
      category: 'Design',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'How to create a design system',
      createdBy: 'Agung Dwi Putra'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1.png',
      category: 'Business',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'How to make your business growth 10 times within 1 year',
      createdBy: 'Adit nento'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (3).png',
      category: 'Design',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'How to create design system',
      createdBy: 'Agung Dwi Putra'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (2).png',
      category: 'Marketing',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'Google Ads 101 with the best marketing agency',
      createdBy: 'Budi Setiawan'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (1).png',
      category: 'Design',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'Hitting Reset: How to Land A Job in UX Design',
      createdBy: 'Ernest'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (3).png',
      category: 'Design',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'How to create a design system',
      createdBy: 'Agung Dwi Putra'
    },
    {
      image : 'Pictures/linkedin-sales-solutions-6ie6OjshvWg-unsplash 1 (2).png',
      category: 'Marketing',
      datePost: 'SUN, OCT 24 @ 1:15 AM ICT',
      title: 'Google Ads 101 with the best marketing agency',
      createdBy: 'Budi Setiawan'
    }
  ]

  return (
    <div>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start">
          {dataCard?.map(item => (
            <CardComp data={item} />
          ))}
      </Grid>
    </div>
  )
}

export default SearchDesign;