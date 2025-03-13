'use client'
import { Box, useTheme } from '@mui/material';
import Head from 'next/head';
import { lazy, Suspense } from 'react'; // Import lazy and Suspense

// Lazy load all components
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Hero = lazy(() => import('./components/Hero.jsx'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function Home() {
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

        {/* Wrap each lazy-loaded component in Suspense */}
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>

        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div>Loading Features...</div>}>
          <Features />
        </Suspense>

        <Suspense fallback={<div>Loading How It Works...</div>}>
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>

        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </Box>
    </>
  );
}