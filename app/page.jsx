'use client'
import "normalize.css";
import { Box, Container, Typography, Button } from '@mui/material';
import Head from 'next/head';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Testimonial from "./components/Testinomial.jsx";
import Faq from "./components/Faq.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>RecycleHub - Scan. Sort. Save the Planet</title>
        <meta name="description" content="RecycleHub helps you make sustainable choices with AI-powered item scanning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box 
        sx={{ 
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Faq />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}