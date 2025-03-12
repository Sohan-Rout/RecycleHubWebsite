import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled 
    ? theme.palette.mode === 'dark' 
      ? 'rgba(30, 30, 47, 0.8)' 
      : 'rgba(255, 255, 255, 0.8)'
    : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
  transition: 'all 0.3s ease',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Fredoka One", cursive',
  background: 'linear-gradient(45deg, #4CAF50 30%, #9370DB 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

const NavButton = styled(Button)(({ theme, scrolled }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3px',
    background: 'linear-gradient(45deg, #4CAF50 30%, #9370DB 90%)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '&::after': {
      transform: 'translateX(0)',
    },
  },
}));

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

  // Add cursor blur effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorBlur = document.querySelector('.cursor-blur');
      if (cursorBlur) {
        cursorBlur.classList.add('active');
        cursorBlur.style.setProperty('--x', `${e.clientX}px`);
        cursorBlur.style.setProperty('--y', `${e.clientY}px`);
        
        // Update the pseudo-element position
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <LogoText variant="h5" sx={{ fontWeight: 'bold' }}>
          <ShoppingBagIcon fontSize="large" /> EcoShop
        </LogoText>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: 'block', my: 1 }}>
            <Link href={item.href} passHref>
              <ListItemText 
                primary={item.name} 
                sx={{ 
                  textAlign: 'center',
                  padding: '10px 0',
                  '& .MuiTypography-root': {
                    fontWeight: 600,
                  },
                  '&:hover': { 
                    color: '#4CAF50',
                  }
                }} 
              />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ display: 'block', mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ 
              py: 1.5,
              borderRadius: '12px',
            }}
          >
            Download App
          </Button>
        </ListItem>
        <ListItem sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <ThemeToggle />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="fixed" scrolled={scrolled ? 1 : 0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <LogoText 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              fontSize: { xs: '1.4rem', md: '1.8rem' }
            }}
          >
            <ShoppingBagIcon fontSize="large" /> EcoShop
          </LogoText>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <NavButton scrolled={scrolled ? 1 : 0}>
                  {item.name}
                </NavButton>
              </Link>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                ml: 2,
                borderRadius: '12px',
                boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
              }}
            >
              Download App
            </Button>
            <ThemeToggle />
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar; 