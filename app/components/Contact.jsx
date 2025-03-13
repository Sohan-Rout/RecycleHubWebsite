'use client';
import { useState } from 'react';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon className="text-3xl text-green-600" />,
      title: 'Email Us',
      details: 'hello@recyclehub.com',
      color: '#4CAF50',
    },
    {
      icon: <LocationOnIcon className="text-3xl text-purple-600" />,
      title: 'Visit Us',
      details: '123 Eco Street, Green City, 10001',
      color: '#9370DB',
    },
    {
      icon: <PhoneIcon className="text-3xl text-green-600" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      color: '#4CAF50',
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50 relative">
      {/* Decorative bubbles */}
      <div className="absolute w-20 h-20 bg-green-100 rounded-full top-20 left-10 opacity-50"></div>
      <div className="absolute w-24 h-24 bg-purple-100 rounded-full bottom-20 right-10 opacity-50"></div>

      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about RecycleHub or want to partner with us? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Drop Us a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your message here"
                  required
                ></textarea>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  variant="contained" 
                  color="primary" 
                  className="py-2 rounded-xl bg-green-600 hover:bg-black transition-colors duration-300 text-sm text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;