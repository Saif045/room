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
      height: {
        'big': '70vh',
        'small': '30vh'
      },
      
    },
  },
  plugins: [],
}
