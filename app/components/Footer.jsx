'use client'
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Sustainability Guide', href: '#' },
        { name: 'Product Directory', href: '#' },
        { name: 'Carbon Calculator', href: '#' },
        { name: 'Partner Program', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ]
    }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 6, md: 8 },
        borderTop: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.1)', // Light mode border color
        backgroundColor: '#ffffff', // Light mode background
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <div
                className="transition-all duration-500 ease-out"
                style={{ opacity: 1, transform: 'translateY(0)' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ShoppingBagIcon 
                    sx={{ 
                      fontSize: 40, 
                      mr: 1,
                      color: '#4CAF50', // Primary color for light mode
                    }} 
                  />
                  <Typography 
                    variant="h4" 
                    component="div" 
                    sx={{ 
                      fontWeight: 800,
                      fontFamily: '"Fredoka One", cursive',
                    }}
                  >
                    <span style={{ color: '#4CAF50' }}>Recycle</span>
                    <span style={{ color: '#1976D2' }}>Hub</span>
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: 'rgba(0, 0, 0, 0.7)', // Light mode text color
                    maxWidth: '300px',
                  }}
                >
                  Making sustainable shopping accessible and rewarding for everyone. Join our community of eco-conscious consumers.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </div>
            </Box>
          </Grid>
          
          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <div
                className="transition-all duration-500 ease-out"
                style={{ 
                  opacity: 1, 
                  transform: 'translateY(0)',
                  transitionDelay: `${index * 100}ms` 
                }}
              >
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    color: '#000000', // Light mode text color
                  }}
                >
                  {section.title}
                </Typography>
                
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                  {section.links.map((link, i) => (
                    <Box component="li" key={i} sx={{ mb: 1.5 }}>
                      <Link 
                        href={link.href} 
                        underline="none"
                        sx={{ 
                          color: 'rgba(0, 0, 0, 0.7)', // Light mode text color
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#4CAF50', // Primary color for light mode
                            pl: 0.5,
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </div>
            </Grid>
          ))}
          
          <Grid item xs={12} md={2}>
            <div
              className="transition-all duration-500 ease-out"
              style={{ 
                opacity: 1, 
                transform: 'translateY(0)',
                transitionDelay: '300ms' 
              }}
            >
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 700,
                  color: '#000000', // Light mode text color
                }}
              >
                Download
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box 
                  component="img" 
                  src="/app-store-badge.png" 
                  alt="Download on App Store" 
                  sx={{ 
                    height: 40,
                  }}
                />
                <Box 
                  component="img" 
                  src="/google-play-badge.png" 
                  alt="Get it on Google Play" 
                  sx={{ 
                    height: 40,
                  }}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 6, 
            pt: 3, 
            borderTop: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.1)', // Light mode border color
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(0, 0, 0, 0.7)', // Light mode text color
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {new Date().getFullYear()} RecycleHub. All rights reserved.
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Link 
              href="#" 
              underline="none"
              sx={{ 
                color: 'rgba(0, 0, 0, 0.7)', // Light mode text color
                fontSize: '0.875rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#4CAF50', // Primary color for light mode
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              underline="none"
              sx={{ 
                color: 'rgba(0, 0, 0, 0.7)', // Light mode text color
                fontSize: '0.875rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#4CAF50', // Primary color for light mode
                }
              }}
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              underline="none"
              sx={{ 
                color: 'rgba(0, 0, 0, 0.7)', // Light mode text color
                fontSize: '0.875rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#4CAF50', // Primary color for light mode
                }
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;