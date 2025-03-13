'use client';
import Image from 'next/image';
import { Leaf } from 'lucide-react'; // Using Lucide icons instead of Material-UI

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-20 md:pt-[10vw] pb-8 md:pb-[8vw] relative overflow-hidden w-full max-w-[100vw] box-border"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <p className="font-poppins mb-2 text-black font-semibold tracking-[0.25rem] text-xs md:text-[1vw] uppercase">
              Smart Recycling Starts with You
            </p>

            <h1 className="font-poppins font-extrabold text-4xl md:text-[4vw] lg:text-6xl bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent leading-tight min-h-[80px]">
              Scan. Sort. Save the Planet.
            </h1>

            <p className="text-gray-500 md:text-center lg:text-left sm:text-center font-normal mb-6 mt-6 text-base md:text-[1.5vw] min-h-[60px]">
              Tired of guessing whether something is recyclable? Our AI-powered recycling app makes it simple—just scan an item, and we'll instantly tell you if it belongs in the recycling bin or not. With real-time data, location-based guidelines, and smart insights, we help you make eco-friendly choices effortlessly. Every scan brings us closer to a cleaner planet. Recycle smarter, live greener!
            </p>

            <div className="flex gap-2 flex-wrap sm:flex-nowrap justify-center">
              <button
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg mr-1 font-poppins font-semibold py-3 px-6 md:py-[1vw] md:px-[3vw] flex-1 sm:flex-none mb-2 sm:mb-0 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                Download Now
              </button>

              <button
                className="py-3 px-6 md:py-[1.5vw] md:px-[3vw] rounded-lg ml-1 font-poppins font-semibold border-2 border-blue-500 text-blue-500 flex-1 sm:flex-none transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Leaf className="w-5 h-5 animate-pulse" />
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px] opacity-100 scale-100 transition-all duration-700">
            <Image
              src="/HomePage.png"
              alt="RecycleHub App Interface"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl shadow-2xl"
              priority // Ensures the image is prioritized for loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;