import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NatureIcon from '@mui/icons-material/Nature';
import Image from 'next/image';

const Hero = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

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
      {/* Animated background elements */}
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
      
      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            borderRadius: '50%',
            background: `rgba(${isDarkMode ? '76, 175, 80' : '76, 175, 80'}, ${0.1 + Math.random() * 0.2})`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="overline" 
                component="div"
                sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  letterSpacing: 2,
                }}
              >
                SUSTAINABLE SHOPPING MADE EASY
              </Typography>
              
              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  mb: 2,
                  background: 'linear-gradient(45deg, #4CAF50 30%, #9370DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                }}
              >
                Shop Eco-Friendly with AI Assistance
              </Typography>
              
              <Typography 
                variant="h5" 
                component="p"
                sx={{ 
                  mb: 4, 
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                  maxWidth: '90%',
                }}
              >
                EcoShop helps you make sustainable choices with AI-powered product recommendations and environmental impact insights.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  startIcon={<ShoppingBagIcon />}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ 
                    py: 1.5, 
                    px: 3,
                    borderRadius: '12px',
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                    flex: { xs: '1 1 100%', sm: '0 1 auto' },
                    mb: { xs: 2, sm: 0 },
                  }}
                >
                  Download App
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="large"
                  startIcon={<NatureIcon />}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ 
                    py: 1.5, 
                    px: 3,
                    borderRadius: '12px',
                    fontWeight: 600,
                    borderWidth: '2px',
                    flex: { xs: '1 1 100%', sm: '0 1 auto' },
                    '&:hover': {
                      borderWidth: '2px',
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
              
              <Box 
                sx={{ 
                  mt: 6, 
                  display: 'flex', 
                  alignItems: 'center',
                  p: 2,
                  borderRadius: '16px',
                  background: isDarkMode ? 'rgba(76, 175, 80, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid',
                  borderColor: isDarkMode ? 'rgba(76, 175, 80, 0.3)' : 'rgba(76, 175, 80, 0.3)',
                }}
              >
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    ✓ Eco-friendly products
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    ✓ Carbon footprint tracking
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    ✓ Sustainable shopping guides
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative', height: '500px' }}
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
                  src="/eco-shopping-app.png"
                  alt="EcoShop App Interface"
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
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;