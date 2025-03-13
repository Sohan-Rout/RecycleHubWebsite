'use client'
import "normalize.css";
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import Head from 'next/head';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Head>
        <title>RecycleHub - AI-Powered Sustainable Shopping</title>
        <meta name="description" content="RecycleHub helps you make sustainable choices with AI-powered product recommendations and environmental impact insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box 
        sx={{ 
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
      >
        {/* Cursor blur effect container */}
        <Box 
          className="cursor-blur"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />

        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Contact />
        <Footer />
      </Box>
    </>
  );
} 