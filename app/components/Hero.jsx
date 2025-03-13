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
        pt: { xs: 12, md: '10vw' }, 
        pb: { xs: 8, md: '8vw' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography 
                className='font-poppins mb-2 text-black text-center font-semibold tracking-[0.25rem]'
                variant="overline" 
                component="div"
                sx={{ fontSize: { xs: '0.75rem', md: '1vw' } }}
              >
                SUSTAINABLE SHOPPING MADE EASY
              </Typography>
              
              <Typography 
                variant="h1" 
                component="h1"
                className='font-poppins font-extrabold md:text-center'
                sx={{ 
                  fontSize: 'clamp(2.5rem, 4vw, 6rem)',
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(45deg, #4CAF50 30%, #1976D2 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                  minHeight: '80px'
                }}
              >
                Shop Eco-Friendly
              </Typography>
              
              <Typography 
                variant="h5" 
                component="p"
                className='text-gray-500 md:text-center lg:text-left sm:text-center'
                sx={{ 
                  mb: 4, 
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.5vw' }, 
                  minHeight: '60px' 
                }}
              >
                RecycleHub helps you make sustainable choices with AI-powered product recommendations and environmental impact insights.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: 'center' }}>
                <Button 
                  className='bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-poppins font-semibold'
                  variant="contained" 
                  size="large"
                  sx={{ 
                    py: { xs: 1.5, md: '1vw' }, 
                    px: { xs: 3, md: '3vw' },
                    borderRadius: '12px',
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                    flex: { xs: '1 1 100%', sm: '0 1 auto' },
                    mb: { xs: 2, sm: 0 },
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                    '&:active': { transform: 'scale(0.95)' }
                  }}
                >
                  Download Now
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="large"
                  startIcon={<NatureIcon className='animate-pulse' />}
                  sx={{ 
                    py: { xs: 1.5, md: '1.5vw' }, 
                    px: { xs: 3, md: '3vw' },
                    borderRadius: '12px',
                    fontWeight: 600,
                    borderWidth: '2px',
                    flex: { xs: '1 1 100%', sm: '0 1 auto' },
                    transition: 'transform 0.3s',
                    '&:hover': { borderWidth: '2px', transform: 'scale(1.05)' },
                    '&:active': { transform: 'scale(0.95)' }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: { xs: '300px', md: '70%' }, opacity: 1, transform: 'scale(1)', transition: 'opacity 0.8s, transform 0.8s' }}>
              <Image
                src="/HomePage.png"
                alt="RecycleHub App Interface"
                layout="fill"
                objectFit="contain"
                style={{ borderRadius: '24px', boxShadow: '0 20px 80px rgba(0,0,0,0.2)' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;