'use client'
import { useState } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloseIcon from '@mui/icons-material/Close';

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState('name1'); // Default to first option

  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  return (
    <Box 
      component="section" 
      id="how-it-works" 
      className="py-12 md:py-16 bg-gray-50"
    >
      <Container maxWidth="lg" className="px-4">
        <Box className="text-center mb-12">
          <Typography 
            variant="overline" 
            component="div"
            className="mb-4 font-semibold text-green-600 tracking-widest"
          >
            HOW IT WORKS
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2"
            className="font-extrabold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
          >
            Simple Steps to Shop Sustainably
          </Typography>
          
          <Typography 
            variant="h6" 
            component="p"
            className="max-w-2xl mx-auto text-gray-600 mb-8"
          >
            RecycleHub makes sustainable shopping easy with our intuitive app that guides you through every step of your eco-friendly journey.
          </Typography>

          {/* Options */}
          <Box className="flex justify-center gap-4 mb-12">
            <Button 
              variant={activeCard === 'name1' ? 'contained' : 'outlined'} 
              onClick={() => handleCardClick('name1')}
              className={activeCard === 'name1' ? 'bg-green-600 text-white hover:bg-green-700' : 'text-green-600 border-green-600 hover:bg-green-50'}
            >
              Scan And Find Out
            </Button>
            <Button 
              variant={activeCard === 'name2' ? 'contained' : 'outlined'} 
              onClick={() => handleCardClick('name2')}
              className={activeCard === 'name2' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'text-purple-600 border-purple-600 hover:bg-purple-50'}
            >
              Add and Remove Items
            </Button>
            <Button 
              variant={activeCard === 'name3' ? 'contained' : 'outlined'} 
              onClick={() => handleCardClick('name3')}
              className={activeCard === 'name3' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-blue-600 border-blue-600 hover:bg-blue-50'}
            >
              Order Pickup For E-waste
            </Button>
          </Box>
        </Box>

        {/* Small Container for Active Card */}
        {activeCard && (
          <Box className="mt-8 p-6 bg-white rounded-xl shadow-lg relative">
            <IconButton 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={handleCloseCard}
            >
              <CloseIcon />
            </IconButton>
            <Box className="text-center">
              <Typography 
                variant="h4" 
                component="h3"
                className="font-extrabold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
              >
                {activeCard === 'name1' && 'Scanning How-To'}
                {activeCard === 'name2' && 'Shopping How-To'}
                {activeCard === 'name3' && 'Order Pickup How-To'}
              </Typography>
              
              <Typography 
                variant="body1" 
                className="text-gray-600 leading-relaxed"
              >
                {activeCard === 'name1' && 'Detailed explanation of how scanning works in RecycleHub. Use your phone camera to scan products and get instant sustainability insights.'}
                {activeCard === 'name2' && 'Detailed explanation of how to add and remove items in your cart. Manage your shopping list with ease.'}
                {activeCard === 'name3' && 'Detailed explanation of how to schedule an e-waste pickup. We make recycling electronics hassle-free.'}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HowItWorks;