'use client'
import { useState } from 'react';

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState('name1'); // Default to first option

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
              
              <p className="text-gray-600 leading-relaxed">
                {activeCard === 'name1' && 'Detailed explanation of how scanning works in RecycleHub. Use your phone camera to scan products and get instant sustainability insights.'}
                {activeCard === 'name2' && 'Detailed explanation of how to add and remove items in your cart. Manage your shopping list with ease.'}
                {activeCard === 'name3' && 'Detailed explanation of how to schedule an e-waste pickup. We make recycling electronics hassle-free.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;