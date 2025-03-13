const Testimonial = () => {
  return (
    <section id="testimonial" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent text-center mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 font-poppins rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <img
                src="./people/Emily.jpeg"
                alt="Client 1"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h4 className="font-bold text-lg">Emily</h4>
              <p className="text-sm text-gray-500 mb-4">New Delhi, Delhi-110072</p>
              <hr className="w-full border-t border-gray-200 mb-4" />
            </div>
            <p className="text-gray-600 text-center">
              "I love how easy it is to use RecycleHub! Just scan an item, and it instantly tells me if it’s recyclable. The location-based recycling rules are a game-changer—I no longer have to guess what goes where. A must-have for anyone who cares about the planet!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <img
                src="./people/Michael.jpeg"
                alt="Client 2"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h4 className="font-bold text-lg">Michael Johnson</h4>
              <p className="text-sm text-gray-500 mb-4">CTO, Company B</p>
              <hr className="w-full border-t border-gray-200 mb-4" />
            </div>
            <p className="text-gray-600 text-center">
              "The eco-product shopping feature is amazing! I’ve discovered so many sustainable brands through this app. Plus, the rewards system makes recycling fun and engaging. Highly recommend!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <img
                src="./people/Sarah.jpeg"
                alt="Client 3"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h4 className="font-bold text-lg">Sarah</h4>
              <p className="text-sm text-gray-500 mb-4">Founder, Company C</p>
              <hr className="w-full border-t border-gray-200 mb-4" />
            </div>
            <p className="text-gray-600 text-center">
              "I had an old laptop and some broken chargers lying around, and RecycleHub helped me dispose of them properly with their e-waste pickup service. Super convenient and eco-friendly. More apps should be like this!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;