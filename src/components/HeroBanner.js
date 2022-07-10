import React from 'react'
import { Box, Stack, Typography,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color='#5D6D7E' fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography color='#34495E' fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                No Pain <br />
                No Gain
            </Typography>
            <Typography fontSize="22px" mb={3} fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Button  variant="contained" color="success" href="#exercises" sx={{backgroundColor: '#E67E22',padding: '10px'}}>Explore Exercises</Button>
    <Typography mb={5} mt={10}fontWeight={600} color="#E67E22" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
    </Typography>
    <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner