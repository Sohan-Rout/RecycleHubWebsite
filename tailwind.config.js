/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#81C784',
        background: '#E6E6E6',
        paper: '#F5F5F5',
        textPrimary: '#333333',
        textSecondary: '#666666',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fredoka: ['Fredoka One', 'cursive'],
      },
      backgroundImage: {
        'gradient-green-purple': 'linear-gradient(45deg, #4CAF50 30%, #9370DB 90%)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};