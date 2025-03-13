const Testinomial = () => {
  return (
    <section id="testimonial" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div className="flex items-center">
              <img
                src="./people/Emily.jpeg"
                alt="Client 1"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Emily</h4>
                <p className="text-sm text-gray-500">New Delhi, Delhi-110072</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <div className="flex items-center">
              <img
                src="./people/Michael.jpeg"
                alt="Client 2"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Michael Johnson</h4>
                <p className="text-sm text-gray-500">CTO, Company B</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
            <div className="flex items-center">
              <img
                src="./people/Sarah.jpeg"
                alt="Client 3"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Sarah</h4>
                <p className="text-sm text-gray-500">Founder, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testinomial;