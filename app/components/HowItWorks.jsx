'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState('name1'); // Default to first option
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index

  const images = [
    '/howitworkssection/CartHomeSection.png',
    '/howitworkssection/CartSection.png',
  ];

  const steps = [
    'Step 1: Add items to your cart by clicking the "Add to Cart" button.',
    'Step 2: Remove items by clicking the "Remove" button next to the item.',
    'Step 3: Check the total amount in your cart.',
    'Step 4: Proceed to payment by clicking the "Checkout" button.',
  ];

  useEffect(() => {
    if (activeCard === 'name2') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [activeCard]); // Run effect only when activeCard changes

  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4 font-semibold text-green-600 tracking-widest">
            HOW IT WORKS
          </div>
          
          <h2 className="font-extrabold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent text-4xl">
            Shop Smart, Waste Less – Your Guide to Sustainable Living!
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
            RecycleHub makes sustainable shopping easy with our intuitive app that guides you through every step of your eco-friendly journey.
          </p>

          {/* Options */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => handleCardClick('name1')}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeCard === 'name1' 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'text-green-600 border border-green-600 hover:bg-green-50'
              }`}
            >
              Scan And Find Out
            </button>
            <button 
              onClick={() => handleCardClick('name2')}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeCard === 'name2' 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'text-purple-600 border border-purple-600 hover:bg-purple-50'
              }`}
            >
              Add and Remove Items
            </button>
            <button 
              onClick={() => handleCardClick('name3')}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeCard === 'name3' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
              }`}
            >
              Order Pickup For E-waste
            </button>
          </div>
        </div>

        {/* Small Container for Active Card */}
        {activeCard && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg relative">
            <button 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={handleCloseCard}
            >
              &times;
            </button>
            <div className="text-center">
              <h3 className="font-extrabold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent text-2xl">
                {activeCard === 'name1' && 'Scanning How-To'}
                {activeCard === 'name2' && 'Shopping How-To'}
                {activeCard === 'name3' && 'Order Pickup How-To'}
              </h3>
              
              {/* Content for each card */}
              {activeCard === 'name1' && (
                <>
                  <p className="text-gray-600 leading-relaxed">
                    Detailed explanation of how scanning works in RecycleHub. Use your phone camera to scan products and get instant sustainability insights.
                  </p>
                  <div className="mt-4">
                    <Image 
                      src="/images/scanning-demo.jpg" // Replace with your image path
                      alt="Scanning Demo"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </>
              )}

{activeCard === 'name2' && (
  <div className="flex ml-16 flex-col md:flex-row-reverse gap-8 items-center text-center"> {/* Use flex-row-reverse */}
    {/* Image Carousel */}
    <div className="relative w-full md:w-1/2 h-[400px]"> {/* Fixed height container */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0'
          }`}
        >
          <Image 
            src={src}
            alt={`Shopping Demo ${index + 1}`}
            width={200} // Adjust width to match container
            height={150} // Adjust height to match container
            className="rounded-lg object-cover ml-10 w-200 h-150" // Ensure images scale properly
          />
        </div>
      ))}
    </div>

    {/* Steps */}
    <div className="w-full md:w-1/2 ml-8 text-left">
      <ul className="list-disc space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="text-black font-poppins font-medium text-xl text">
          {step}
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

              {activeCard === 'name3' && (
                <p className="text-gray-600 leading-relaxed">
                  Detailed explanation of how to schedule an e-waste pickup. We make recycling electronics hassle-free.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;