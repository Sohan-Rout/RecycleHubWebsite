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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'HowItWorks', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center p-4">
      <Box className="my-4 flex justify-center">
        <Typography variant="h5" className="font-bold font-fredoka flex items-center gap-2">
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
                className="text-center py-2 font-semibold text-white hover:text-green-500 transition-colors duration-300" 
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
      className={`transition-all duration-[100ms] ease-in-out ${scrolled ? 'bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      style={{ background: scrolled ? '#F3F4F6' : 'transparent' }}
    >
      <Container maxWidth="lg">
        <Toolbar className="py-2">
          <Typography 
            variant="h5" 
            component="div" 
            className="flex-grow font-bold font-fredoka flex items-center gap-2 text-xl md:text-2xl"
          >
            <ShoppingBagIcon fontSize="large" /> 
            <span>
              <span className="text-green-600">Recycle</span>
              <span className="text-black">Hub</span>
            </span>
          </Typography>
          
          <Box className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Button className={`font-semibold text-sm transition-colors duration-300 ${scrolled ? 'text-white' : 'text-blue-600'} hover:text-green-500`}>
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
              className="ml-4 rounded-xl shadow-md bg-blue-500 text-white px-3 py-1.5 hover:bg-black transition-colors duration-300 text-sm"
            >
              Download App
            </Button>
          </Box>
          
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={`md:hidden ${scrolled ? 'text-white' : 'text-black'}`}
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
        PaperProps={{ className: 'w-[280px] bg-blue-900' }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;