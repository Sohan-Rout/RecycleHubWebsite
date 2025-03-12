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
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center p-4">
      <Box className="my-4 flex justify-center">
        <Typography variant="h5" className="font-bold font-fredoka bg-gradient-to-r from-primary to-[#9370DB] bg-clip-text text-transparent flex items-center gap-2">
          <ShoppingBagIcon fontSize="large" /> EcoShop
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding className="block my-2">
            <Link href={item.href} passHref>
              <ListItemText 
                primary={item.name} 
                className="text-center py-2 font-semibold hover:text-primary" 
              />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding className="block mt-6">
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            className="py-3 rounded-xl"
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
      className={`transition-all duration-300 ease-in-out ${scrolled ? 'bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      style={{ background: scrolled ? 'rgba(30, 30, 47, 0.8)' : 'transparent' }}
    >
      <Container maxWidth="lg">
        <Toolbar className="py-2">
          <Typography 
            variant="h5" 
            component="div" 
            className="flex-grow font-bold font-fredoka bg-gradient-to-r from-primary to-[#9370DB] bg-clip-text text-transparent flex items-center gap-2 text-xl md:text-2xl"
          >
            <ShoppingBagIcon fontSize="large" /> EcoShop
          </Typography>
          
          <Box className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Button className="font-semibold relative overflow-hidden hover:after:translate-x-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r from-primary to-[#9370DB] after:transform after:-translate-x-full after:transition-transform after:duration-300 after:ease-in-out">
                  {item.name}
                </Button>
              </Link>
            ))}
            <button 
  className="ml-4 rounded-2xl shadow-lg bg-blue-500 text-white px-4 py-2 hover:bg-white hover:text-black hover:border hover:border-black"
>
  Download App
</button>
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="md:hidden"
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
        PaperProps={{ className: 'w-[280px]' }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;