import React from 'react';
import { Box, Typography } from '@mui/material';
import "./Banner.css";
import SearchBar from '../SearchBar/SearchBar';

const Banner = () => {
  return (
    <Box className="banner" sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Typography variant="h2" color="white" fontWeight="bold" component="h4" sx={{mb:'1rem'}}>Food App</Typography>
        <Typography variant="h4" color="white" component="h4" sx={{mb:'1rem'}}>Discover the best food & drinks in Delhi NCR</Typography>
        <SearchBar/>
    </Box>
  )
}

export default Banner;