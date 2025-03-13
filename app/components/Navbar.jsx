'use client';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e) => {
        const cursorBlur = document.querySelector('.cursor-blur');
        if (cursorBlur) {
          cursorBlur.classList.add('active');
          cursorBlur.style.setProperty('--x', `${e.clientX}px`);
          cursorBlur.style.setProperty('--y', `${e.clientY}px`);
          document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center p-4">
      <Box className="my-4 flex justify-center">
        <Typography variant="h5" className="font-bold font-poppins flex items-center gap-2">
          <ShoppingBagIcon fontSize="large" /> 
          <span>
            <span className="text-green-600">Recycle</span>
            <span className="text-black">Hub</span>
          </span>
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding className="block my-2">
            <Link href={item.href} passHref>
              <ListItemText 
                primary={item.name} 
                className="text-center py-2 font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300" 
              />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding className="block mt-6">
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            className="py-2 rounded-xl bg-blue-500 hover:bg-black transition-colors duration-300 text-sm"
          >
            Download App
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      className={`transition-all duration-[100ms] ease-in-out ${scrolled ? 'bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      style={{ 
        background: scrolled ? '#F3F4F6' : 'rgba(255, 255, 255, 0.9)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
      }}
      sx={{
        '@media (max-width: 768px)': {
          background: scrolled ? '#F3F4F6' : 'transparent',
          backdropFilter: 'blur(10px)',
          transitionDuration: '100ms',
        }
      }}
    >
      <Container maxWidth="lg" className='pt-1 pb-1'>
        <Toolbar className="py-2">
          <Typography 
            variant="h5" 
            component="div" 
            className="flex-grow font-bold font-poppins flex items-center gap-2 text-xl md:text-2xl"
          >
            <span>
              <span className="text-green-600">Recycle</span>
              <span className="text-black">Hub</span>
            </span>
          </Typography>
          
          <Box className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Button className={`font-semibold font-poppins text-sm transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-blue-600'} hover:text-green-500 hover:underline decoration-green-500 decoration-10 underline-offset-8`}>
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
              className="ml-4 rounded-xl shadow-md bg-blue-500 text-white px-2 py-1 hover:bg-black transition-colors duration-100 text-sm"
            >
              Download App
            </Button>
          </Box>
          
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="md:hidden text-black"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        className="md:hidden"
        PaperProps={{ 
          className: 'w-[280px] bg-white shadow-xl',
          sx: {
            boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.1)'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;