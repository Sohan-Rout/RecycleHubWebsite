'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react'; // Using Lucide icons for the menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Nav items
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testinomial', href: '#testinomial' },
    { name: "FAQ's", href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold">
            <span className="text-green-600">Recycle</span>
            <span className="text-black">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-semibold text-[1rem] transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-blue-600'
              } hover:text-green-500 hover:underline decoration-green-500 decoration-2 underline-offset-8`}
            >
              {item.name}
            </Link>
          ))}
          <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-black transition-colors duration-300 text-sm">
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleDrawerToggle}
          className="md:hidden text-black focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-green-600">Recycle</span>
                <span className="text-black">Hub</span>
              </span>
            </Link>
            <button
              onClick={handleDrawerToggle}
              className="text-black focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-center font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300"
                onClick={handleDrawerToggle}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-black transition-colors duration-300 text-sm">
              Download App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;