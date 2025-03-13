const Testimonial = () => {
  return (
    <section id="testimonial" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;