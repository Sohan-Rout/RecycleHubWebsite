import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import NatureIcon from '@mui/icons-material/Nature';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box 
      component="section" 
      id="hero" 
      sx={{ 
        pt: { xs: 12, md: 16 }, 
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Cursor blur effect container */}
      <Box 
        className="cursor-blur"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: 1,
                transform: 'translateY(0)',
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              <Typography 
                className='font-poppins mb-2 text-black text-center font-semibold tracking-[0.25rem]'
                variant="overline" 
                component="div"
              >
                SUSTAINABLE SHOPPING MADE EASY
              </Typography>
              
              <Typography 
                variant="h1" 
                component="h1"
                className='font-poppins font-extrabold md:text-center'
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  mb: 2,
                  background: 'linear-gradient(45deg, #4CAF50 30%, #1976D2 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
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
                }}
              >
                RecycleHub helps you make sustainable choices with AI-powered product recommendations and environmental impact insights.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button 
                  className='bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-poppins font-semibold'
                  variant="contained" 
                  size="large"
                  sx={{ 
                    py: 1.5, 
                    px: 3,
                    borderRadius: '12px',
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                    flex: { xs: '1 1 100%', sm: '0 1 auto' },
                    mb: { xs: 2, sm: 0 },
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    },
                    '&:active': {
                      transform: 'scale(0.95)'
                    }
                  }}
                >
                  Download Now
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="large"
                  startIcon={<NatureIcon className='animate-pulse'/>}
                  sx={{ 
                    py: 1.5, 
                    px: 3,
                    borderRadius: '12px',
                    fontWeight: 600,
                    borderWidth: '2px',
                    flex: { xs: '1 1 100%', sm: '0 1 auto' },
                    transition: 'transform 0.3s',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'scale(1.05)'
                    },
                    '&:active': {
                      transform: 'scale(0.95)'
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: '500px',
                opacity: 1,
                transform: 'scale(1)',
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '80%',
                    height: '80%',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.3) 0%, rgba(147, 112, 219, 0.3) 100%)',
                    filter: 'blur(40px)',
                    zIndex: 0,
                  }
                }}
              >
                <Box
                  component="img"
                  src="./HomePage.png"
                  alt="RecycleHub App Interface"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '90%',
                    maxHeight: '90%',
                    objectFit: 'contain',
                    borderRadius: '24px',
                    boxShadow: '0 20px 80px rgba(0,0,0,0.2)',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;