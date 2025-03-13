'use client'
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
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
      className="py-12 md:py-16 border-t border-gray-200 bg-white font-poppins"
    >
      <Container maxWidth="lg" className="px-4">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="mb-8">
              <div className="transition-all duration-500 ease-out opacity-100 translate-y-0">
                <div>
                  <h1 className="font-semibold text-green-600 text-2xl">
                    Recyle<span className="text-black">Hub</span>
                  </h1>
                </div>
                <Typography 
                  variant="body1" 
                  className="mb-6 text-gray-700 max-w-[300px] font-poppins"
                >
                  Making sustainable shopping accessible and rewarding for everyone. Join our community of eco-conscious consumers.
                </Typography>
                
                <Box className="flex gap-2">
                  <IconButton 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
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
                className="transition-all duration-500 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Typography 
                  variant="h6" 
                  component="h3" 
                  className="mb-6 font-bold text-black font-poppins"
                >
                  {section.title}
                </Typography>
                
                <Box component="ul" className="p-0 m-0 list-none">
                  {section.links.map((link, i) => (
                    <Box component="li" key={i} className="mb-3">
                      <Link 
                        href={link.href} 
                        underline="none"
                        className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out font-poppins hover:pl-2"
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4"
        >
          <Typography 
            variant="body2" 
            className="text-gray-700 text-center sm:text-left font-poppins"
          >
            © {new Date().getFullYear()} RecycleHub. All rights reserved.
          </Typography>
          
          <Box 
            className="flex gap-6 flex-wrap justify-center sm:justify-start"
          >
            <Link 
              href="#" 
              underline="none"
              className="text-gray-700 text-sm hover:text-green-600 transition-all duration-300 ease-in-out font-poppins"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              underline="none"
              className="text-gray-700 text-sm hover:text-green-600 transition-all duration-300 ease-in-out font-poppins"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              underline="none"
              className="text-gray-700 text-sm hover:text-green-600 transition-all duration-300 ease-in-out font-poppins"
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