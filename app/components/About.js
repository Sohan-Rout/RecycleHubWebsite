import { Box, Container, Grid, Typography, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Former sustainability consultant with a passion for technology and environmental conservation.'
    },
    {
      name: 'Sophia Chen',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      description: 'AI specialist with a background in environmental science and sustainable product development.'
    },
    {
      name: 'Marcus Williams',
      role: 'Head of Partnerships',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      description: 'Experienced in building relationships with eco-friendly brands and sustainability organizations.'
    },
    {
      name: 'Olivia Rodriguez',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      description: 'Passionate about creating intuitive user experiences that encourage sustainable consumer behavior.'
    }
  ];

  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
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
                OUR STORY
              </Typography>
              
              <Typography 
                variant="h2" 
                component="h2"
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(45deg, #4CAF50 30%, #9370DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                About EcoShop
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                EcoShop was founded in 2023 with a simple mission: to make sustainable shopping accessible, convenient, and rewarding for everyone. We believe that small changes in shopping habits can lead to significant positive impacts on our planet.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                Our team of environmental scientists, AI specialists, and passionate eco-enthusiasts have created a platform that leverages cutting-edge technology to help consumers make informed, sustainable choices without compromising on quality or convenience.
              </Typography>
              
              <Box 
                sx={{ 
                  p: 3, 
                  borderRadius: '16px',
                  background: isDarkMode 
                    ? 'rgba(76, 175, 80, 0.1)' 
                    : 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid',
                  borderColor: isDarkMode 
                    ? 'rgba(76, 175, 80, 0.3)' 
                    : 'rgba(76, 175, 80, 0.3)',
                  mb: 4,
                }}
              >
                <Typography 
                  variant="h6" 
                  component="p"
                  sx={{ 
                    fontStyle: 'italic',
                    color: theme.palette.text.primary,
                    position: 'relative',
                    '&::before': {
                      content: '"""',
                      fontSize: '4rem',
                      position: 'absolute',
                      top: '-20px',
                      left: '-15px',
                      color: 'rgba(76, 175, 80, 0.2)',
                      fontFamily: 'serif',
                    }
                  }}
                >
                  Our vision is a world where every purchase decision is made with full awareness of its environmental impact, and where sustainable choices are the default, not the exception.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  height: '400px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: isDarkMode 
                    ? '0 20px 80px rgba(0, 0, 0, 0.3)' 
                    : '0 20px 80px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box
                  component="img"
                  src="/eco-team.jpg"
                  alt="EcoShop Team"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h3" 
            component="h3"
            sx={{ 
              fontWeight: 800,
              mb: 6,
              textAlign: 'center',
              color: theme.palette.text.primary,
            }}
          >
            Meet Our Team
          </Typography>
          
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Box 
                    sx={{ 
                      textAlign: 'center',
                      p: 3,
                      height: '100%',
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
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        mx: 'auto',
                        mb: 2,
                        border: '4px solid',
                        borderColor: theme.palette.primary.main,
                      }}
                    />
                    <Typography 
                      variant="h5" 
                      component="h4" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {member.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;