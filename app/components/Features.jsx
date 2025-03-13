'use client'
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CableIcon from '@mui/icons-material/Cable';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <div
      className="transition-all duration-500 ease-out opacity-100 translate-y-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card 
        elevation={0}
        className="h-[20rem] rounded-3xl p-4 bg-white/80 backdrop-blur-lg border border-gray-200 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 ease-in-out flex flex-col justify-center hover:animate-bounce items-center text-center"
      >
        <CardContent className="p-6 flex flex-col items-center">
          <Box 
            className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-r from-green-50 to-purple-50"
          >
            {icon}
          </Box>
          <Typography 
            variant="h5" 
            component="h3" 
            className="mb-4 font-bold text-black"
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            className="text-gray-600 leading-relaxed"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <SmartToyIcon fontSize="large" className='text-purple-600' />,
      title: "AI-Powered Item Recognition",
      description: "Use image recognition and barcode scanning to instantly identify whether an item is recyclable."
    },
    {
      icon: <PublicIcon fontSize="large" className='text-purple-600' />,
      title: "Eco-Friendly Shopping Hub",
      description: "A dedicated section showcasing verified eco-friendly products."
    },
    {
      icon: <LocationCityIcon fontSize="large" className='text-purple-600' />,
      title: "Nearby Recycling Centers",
      description: "Map-based locator showing the nearest recycling centers with Live status updates (open/closed, peak hours, special collection days)."
    },
    {
      icon: <CableIcon fontSize="large" className='text-purple-600' />,
      title: "Electronic Waste Disposal Service",
      description: "On-demand pickup service for old electronics (phones, laptops, batteries, appliances)."
    },
    {
      icon: <EmojiEventsIcon fontSize="large" className='text-purple-600' />,
      title: "Rewards System",
      description: "Affiliate partnerships with green brands for commissions or discounts. Rewards for responsible disposal."
    },
    {
      icon: <TipsAndUpdatesIcon fontSize="large" className='text-purple-600' />,
      title: "Eco-News & Tips Section",
      description: "Daily recycling tips, sustainability hacks, and industry news to educate users. Short interactive quizzes on eco-conscious living."
    }
  ];

  return (
    <Box 
      component="section" 
      id="features" 
      className="py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <Box 
        className="absolute top-0 left-0 w-full h-full opacity-50 bg-[radial-gradient(circle_at_20%_30%,rgba(76,175,80,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(147,112,219,0.05)_0%,transparent_40%)] -z-10"
      />
      
      <Container maxWidth="lg" className="px-4">
        <Box className="text-center mb-12">
          <div
            className="transition-all duration-500 ease-out opacity-100 translate-y-0"
          >
            <Typography 
              variant="overline" 
              component="div"
              className="mb-4 font-semibold text-green-600 tracking-widest"
            >
              WHY CHOOSE RECYCLEHUB
            </Typography>
            
            <Typography 
              variant="h2" 
              component="h2"
              className="font-extrabold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
            >
              Features That Make a Difference
            </Typography>
            
            <Typography 
              variant="h6" 
              component="p"
              className="max-w-2xl mx-auto text-gray-600"
            >
              Bringing AI-powered waste management, eco-friendly shopping, and hassle-free e-waste disposal—all in one app! 
            </Typography>
          </div>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;