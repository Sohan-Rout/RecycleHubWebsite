import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';

const HowItWorks = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const steps = [
    {
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      title: "Search Eco-Friendly Products",
      description: "Browse our extensive catalog of sustainable products or scan barcodes in-store to find eco-friendly alternatives.",
      color: "#4CAF50"
    },
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
      title: "Shop with Confidence",
      description: "Make informed purchasing decisions with detailed sustainability metrics and transparent product information.",
      color: "#9370DB"
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 40 }} />,
      title: "Track Your Impact",
      description: "Monitor your environmental footprint and see how your sustainable choices contribute to a healthier planet.",
      color: "#4CAF50"
    }
  ];

  return (
    <Box 
      component="section" 
      id="how-it-works" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: isDarkMode 
          ? 'linear-gradient(180deg, rgba(30, 30, 47, 0) 0%, rgba(76, 175, 80, 0.05) 100%)' 
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(76, 175, 80, 0.05) 100%)',
      }}
    >
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
              HOW RECYCLEHUB WORKS
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
              Simple Steps to Shop Sustainably
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
              RecycleHub makes sustainable shopping easy with our intuitive app that guides you through every step of your eco-friendly journey.
            </Typography>
          </div>
        </Box>
        
        <Grid container spacing={6} alignItems="center">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div
                className="transition-all duration-500 ease-out"
                style={{ 
                  opacity: 1, 
                  transform: 'translateY(0)',
                  transitionDelay: `${index * 200}ms` 
                }}
              >
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      mb: 4,
                    }}
                  >
                    <Box 
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                        mx: 'auto',
                        position: 'relative',
                        zIndex: 2,
                        border: `2px dashed ${step.color}`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </Box>
                    
                    <Typography 
                      variant="h1" 
                      sx={{ 
                        position: 'absolute',
                        top: -30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '120px',
                        fontWeight: 900,
                        color: isDarkMode 
                          ? 'rgba(255, 255, 255, 0.03)' 
                          : 'rgba(0, 0, 0, 0.03)',
                        zIndex: 1,
                      }}
                    >
                      {index + 1}
                    </Typography>
                    
                    {index < steps.length - 1 && (
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: '50%',
                          right: { xs: '50%', md: '-50%' },
                          transform: { 
                            xs: 'translateY(0) rotate(90deg)', 
                            md: 'translateY(-50%) rotate(0)' 
                          },
                          width: { xs: '30px', md: '100px' },
                          height: '2px',
                          background: `linear-gradient(to right, ${step.color}, transparent)`,
                          display: { xs: 'none', md: 'block' },
                          zIndex: 0,
                        }}
                      />
                    )}
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
                    {step.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          sx={{ 
            mt: 10, 
            p: 4,
            borderRadius: '24px',
            background: isDarkMode 
              ? 'rgba(30, 30, 47, 0.5)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
          }}
        >
          <div
            className="transition-all duration-500 ease-out"
            style={{ opacity: 1, transform: 'translateY(0)' }}
          >
            <Typography 
              variant="h4" 
              component="h3" 
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              Ready to start your sustainable shopping journey?
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 3,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Download the RecycleHub app today and join thousands of conscious consumers making a difference with every purchase.
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 2,
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
              }}
            >
              <Box 
                component="img" 
                src="/app-store-badge.png" 
                alt="Download on App Store" 
                sx={{ 
                  height: 50,
                  filter: isDarkMode ? 'brightness(0.8)' : 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              />
              <Box 
                component="img" 
                src="/google-play-badge.png" 
                alt="Get it on Google Play" 
                sx={{ 
                  height: 50,
                  filter: isDarkMode ? 'brightness(0.8)' : 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;