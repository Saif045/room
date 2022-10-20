/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '250px',
        ...defaultTheme.screens,
      },
      width: {
        'big': '50vh',
        
      },
      
    },
  },
  plugins: [],
}
