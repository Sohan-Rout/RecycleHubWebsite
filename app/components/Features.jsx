'use client'
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NatureIcon from '@mui/icons-material/Nature';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedIcon from '@mui/icons-material/Verified';

const FeatureCard = ({ icon, title, description, index }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{ 
        opacity: 1, 
        transform: 'translateY(0)',
        transitionDelay: `${index * 100}ms` 
      }}
    >
      <Card 
        elevation={0}
        sx={{ 
          height: '100%',
          borderRadius: '24px',
          p: 2,
          background: isDarkMode 
            ? 'rgba(30, 30, 47, 0.5)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: isDarkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: isDarkMode 
              ? '0 10px 30px rgba(0, 0, 0, 0.5)' 
              : '0 10px 30px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box 
            sx={{ 
              display: 'inline-flex',
              p: 2,
              borderRadius: '16px',
              mb: 2,
              background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.1) 0%, rgba(147, 112, 219, 0.1) 100%)',
              color: theme.palette.primary.main,
            }}
          >
            {icon}
          </Box>
          <Typography 
            variant="h5" 
            component="h3" 
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Features = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const features = [
    {
      icon: <ShoppingBagIcon fontSize="large" />,
      title: "Eco-Friendly Products",
      description: "Discover a curated selection of sustainable products that minimize environmental impact while meeting your everyday needs."
    },
    {
      icon: <NatureIcon fontSize="large" />,
      title: "Carbon Footprint Tracking",
      description: "Monitor the environmental impact of your purchases with our real-time carbon footprint tracker and set personal sustainability goals."
    },
    {
      icon: <LocalOfferIcon fontSize="large" />,
      title: "Green Discounts",
      description: "Enjoy exclusive discounts on eco-friendly products and services from our network of sustainable partners."
    },
    {
      icon: <BarChartIcon fontSize="large" />,
      title: "Impact Analytics",
      description: "Visualize your sustainability journey with detailed analytics that show how your shopping habits are making a difference."
    },
    {
      icon: <ShoppingCartIcon fontSize="large" />,
      title: "Smart Shopping Lists",
      description: "Create AI-powered shopping lists that automatically suggest eco-friendly alternatives to your regular products."
    },
    {
      icon: <VerifiedIcon fontSize="large" />,
      title: "Certification Verification",
      description: "Easily verify product sustainability certifications and understand what they mean for the environment."
    }
  ];

  return (
    <Box 
      component="section" 
      id="features" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          background: isDarkMode 
            ? 'radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(147, 112, 219, 0.1) 0%, transparent 40%)'
            : 'radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(147, 112, 219, 0.05) 0%, transparent 40%)',
          zIndex: -1,
        }}
      />
      
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <div
            className="transition-all duration-500 ease-out"
            style={{ opacity: 1, transform: 'translateY(0)' }}
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
              WHY CHOOSE RECYCLEHUB
            </Typography>
            
            <Typography 
              variant="h2" 
              component="h2"
              sx={{ 
                fontWeight: 800,
                mb: 3,
                background: 'linear-gradient(45deg, #4CAF50 30%, #1976D2 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Features That Make a Difference
            </Typography>
            
            <Typography 
              variant="h6" 
              component="p"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                color: theme.palette.text.secondary,
              }}
            >
              RecycleHub combines cutting-edge AI technology with environmental consciousness to transform your shopping experience.
            </Typography>
          </div>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;