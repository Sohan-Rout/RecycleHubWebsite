'use client'
import { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, useTheme } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      title: 'Email Us',
      details: 'hello@recyclehub.com',
      color: '#4CAF50',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      title: 'Visit Us',
      details: '123 Eco Street, Green City, 10001',
      color: '#9370DB',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 30 }} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      color: '#4CAF50',
    },
  ];

  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: isDarkMode 
          ? 'linear-gradient(180deg, rgba(30, 30, 47, 0) 0%, rgba(76, 175, 80, 0.05) 100%)' 
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(76, 175, 80, 0.05) 100%)',
      }}
    >
      {/* Decorative bubbles */}
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      
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
              GET IN TOUCH
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
              Contact Us
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
              Have questions about RecycleHub or want to partner with us? We'd love to hear from you!
            </Typography>
          </div>
        </Box>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div
              className="transition-all duration-500 ease-out"
              style={{ 
                opacity: 1, 
                transform: 'translateX(0)',
                transitionDelay: '100ms' 
              }}
            >
              <Box 
                component="form" 
                sx={{ 
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
                  boxShadow: isDarkMode 
                    ? '0 20px 80px rgba(0, 0, 0, 0.3)' 
                    : '0 20px 80px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    mb: 4, 
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                  }}
                >
                  Send Us a Message
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          backgroundColor: isDarkMode 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.02)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          backgroundColor: isDarkMode 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.02)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          backgroundColor: isDarkMode 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.02)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          backgroundColor: isDarkMode 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.02)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          backgroundColor: isDarkMode 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.02)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ 
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 600,
                        boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.02)'
                        },
                        '&:active': {
                          transform: 'scale(0.98)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <div
              className="transition-all duration-500 ease-out"
              style={{ 
                opacity: 1, 
                transform: 'translateX(0)',
                transitionDelay: '200ms' 
              }}
            >
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    mb: 4, 
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                  }}
                >
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      color: theme.palette.text.secondary,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                    }}
                  >
                    We're here to help with any questions about our app, partnership opportunities, or sustainability initiatives. Reach out to us through any of the following channels:
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
                  {contactInfo.map((info, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        p: 3,
                        borderRadius: '16px',
                        background: isDarkMode 
                          ? 'rgba(30, 30, 47, 0.5)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid',
                        borderColor: isDarkMode 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(0, 0, 0, 0.05)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${info.color}20, ${info.color}40)`,
                          color: info.color,
                          mr: 3,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography 
                          variant="h6" 
                          component="h4" 
                          sx={{ 
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {info.details}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                
                <Box 
                  sx={{ 
                    mt: 'auto',
                    p: 3,
                    borderRadius: '16px',
                    background: isDarkMode 
                      ? 'rgba(76, 175, 80, 0.1)' 
                      : 'rgba(76, 175, 80, 0.1)',
                    border: '1px solid',
                    borderColor: isDarkMode 
                      ? 'rgba(76, 175, 80, 0.3)' 
                      : 'rgba(76, 175, 80, 0.3)',
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="p"
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Business Hours
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      mt: 1,
                    }}
                  >
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 4:00 PM EST<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;