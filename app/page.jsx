import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-[Poppins] flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between p-4 bg-[#E0E7EF] border-b border-[#D1DAE5]">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-mono font-bold text-[#111827] underline decoration-[#0E9C6F] underline-offset-4">
            <span className="text-[#0E9C6F]">Eco</span>Shop
          </span>
        </div>

        {/* Search Bar and Categories Button */}
        <div className="flex items-center gap-2 flex-1 mx-4 max-w-2xl">
          {/* Categories Button */}
          <button className="text-2xl text-[#0E9C6F] hover:text-[#0D8A5F] transition-colors p-2">
            ☰
          </button>
          {/* Search Bar */}
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-solid border-[#0E9C6F] bg-white px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-[#0E9C6F]"
            />
            <button className="rounded-2xl font-poppins font-medium bg-[#0E9C6F] text-white px-4 py-2 text-sm sm:text-base hover:bg-[#0D8A5F] transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-poppins sm:text-base text-black bg-[#0E9C6F] px-6 py-2 rounded-2xl hover:bg-inherit hover:text-[#0D8A5F] transition-colors border-2 border-[#0E9C6F] w-24">
            Login
          </button>
          <button className="text-sm font-poppins sm:text-base text-[#0E9C6F] border-2 border-[#0E9C6F] px-6 py-2 rounded-2xl bg-transparent hover:bg-[#0E9C6F] hover:text-black transition-colors w-24">
            Signup
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 sm:p-8 flex-1">
        <h1 className="text-3xl sm:text-4xl font-poppins font-medium text-[#111827] mb-4 text-center">
          Welcome to Eco Shop
        </h1>
        <p className="text-sm font-poppins sm:text-base text-[#6B7280] mb-8 text-center">
          Discover eco-friendly products that are good for you and the planet.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              src="/bamboo-toothbrush.jpeg" // Replace with your product image
              alt="Bamboo Toothbrush"
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-[#111827] mb-2">
              Bamboo Toothbrush
            </h2>
            <p className="text-sm text-[#6B7280] mb-4">$5.00</p>
            <button className="w-full bg-[#0E9C6F] text-white px-4 py-2 rounded-lg hover:bg-[#0D8A5F] transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              src="/bamboo-toothbrush.jpeg" // Replace with your product image
              alt="Bamboo Toothbrush"
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-[#111827] mb-2">
              Bamboo Toothbrush
            </h2>
            <p className="text-sm text-[#6B7280] mb-4">$5.00</p>
            <button className="w-full bg-[#0E9C6F] text-white px-4 py-2 rounded-lg hover:bg-[#0D8A5F] transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              src="/bamboo-toothbrush.jpeg" // Replace with your product image
              alt="Bamboo Toothbrush"
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-[#111827] mb-2">
              Bamboo Toothbrush
            </h2>
            <p className="text-sm text-[#6B7280] mb-4">$5.00</p>
            <button className="w-full bg-[#0E9C6F] text-white px-4 py-2 rounded-lg hover:bg-[#0D8A5F] transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              src="/bamboo-toothbrush.jpeg" // Replace with your product image
              alt="Bamboo Toothbrush"
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-[#111827] mb-2">
              Bamboo Toothbrush
            </h2>
            <p className="text-sm text-[#6B7280] mb-4">$5.00</p>
            <button className="w-full bg-[#0E9C6F] text-white px-4 py-2 rounded-lg hover:bg-[#0D8A5F] transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Add more product cards here */}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#E0E7EF] p-4 mt-auto">
        <p className="text-sm text-[#6B7280] text-center">
          © 2023 Eco Shop. All rights reserved.
        </p>
      </footer>
    </div>
  );
}