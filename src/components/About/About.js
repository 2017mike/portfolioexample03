import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import selfie from '../../assets/pics/small.PNG'
import Avatar from '@mui/material/Avatar';

const About = () => {
  return (
    <>
    <Box minHeight="85vh">
      <Grid justifyContent="center" container padding={2} spacing={2}>
        {/* <Grid item md={2}></Grid> */}
        <Grid item xs={12} md={4}>
        <Avatar alt="picture of me" src={selfie} sx={{ width: 1, height: 1}}></Avatar>
        </Grid>
        
      <Grid item md={1}></Grid>

      <Grid item xs={12} md={3}>
        <h1>Michael Scharf</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam minima consectetur non beatae molestiae iste quia, sunt neque nihil tempora recusandae qui voluptatibus eveniet omnis magnam? Eveniet, quasi nihil.</p>
      </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default About
