'use client';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import NatureIcon from '@mui/icons-material/Nature';
import Image from 'next/image';

const Hero = () => {
  return (
    <Box 
      component="section" 
      id="hero" 
      sx={{ 
        pt: { xs: 20, md: '10vw' },
        pb: { xs: 8, md: '8vw' },
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg" className="px-4">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography 
                className="font-poppins mb-2 text-black text-center font-semibold tracking-[0.25rem] text-xs md:text-[1vw]"
                variant="overline" 
                component="div"
              >
                Smart Recycling Starts with You
              </Typography>
              
              <Typography 
                variant="h1" 
                component="h1"
                className="font-poppins font-extrabold md:text-center text-4xl md:text-[4vw] lg:text-6xl bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent leading-tight min-h-[80px]"
              >
                Scan. Sort. Save the Planet.
              </Typography>
              
              <Typography 
                variant="h5" 
                component="p"
                className="text-gray-500 md:text-center lg:text-left sm:text-center font-normal mb-6 mt-6 text-base md:text-[1.5vw] min-h-[60px]"
              >
                Tired of guessing whether something is recyclable? Our AI-powered recycling app makes it simple—just scan an item, and we'll instantly tell you if it belongs in the recycling bin or not. With real-time data, location-based guidelines, and smart insights, we help you make eco-friendly choices effortlessly. Every scan brings us closer to a cleaner planet. Recycle smarter, live greener!
              </Typography>
              
              <Box className="flex gap-2 flex-wrap sm:flex-nowrap justify-center">
                <Button 
                  className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-poppins font-semibold py-3 px-6 md:py-[1vw] md:px-[3vw] flex-1 sm:flex-none mb-2 sm:mb-0 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg"
                  variant="contained" 
                  size="large"
                >
                  Download Now
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="large"
                  startIcon={<NatureIcon className="animate-pulse" />}
                  className="py-3 px-6 md:py-[1.5vw] md:px-[3vw] rounded-lg font-poppins font-semibold border-2 flex-1 sm:flex-none transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            {/* Updated Image Container */}
            <Box className="relative w-full h-[300px] md:h-[500px] lg:h-[500px] opacity-100 scale-100 transition-all duration-700">
              <Image
                src="/HomePage.png"
                alt="RecycleHub App Interface"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl shadow-2xl"
                priority // Ensures the image is prioritized for loading
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;