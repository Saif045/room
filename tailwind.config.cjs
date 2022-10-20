/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mll': '850px',
      },
      width: {
        'big': '50vh',
        
      },
      
    },
  },
  plugins: [],
}
