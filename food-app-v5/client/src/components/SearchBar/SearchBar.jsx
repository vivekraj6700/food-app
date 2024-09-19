import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import "./SearchBar.css";

const SearchBar = () => {
  return (
      <Box width="60%" sx={{my:'2rem'}}>
          <TextField className='searchBar' fullWidth sx={{background:'white', borderRadius:'0.8rem'}} placeholder='Search for restraunts, cuisine or dish'/>
    </Box>
  )
}

export default SearchBar