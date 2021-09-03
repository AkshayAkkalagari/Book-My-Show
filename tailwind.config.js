// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Akshay:
{
  50: '#fdfce0',
  100: '#f5f3b9',
  200: '#eeeb90',
  300: '#e7e265',
  400: '#e0da3b',
  500: '#c6c122',
  600: '#9a9618',
  700: '#6e6b0f',
  800: '#424005',
  900: '#171500',
},

navCol:

{
  50: '#ededff',
  100: '#cbcdea',
  200: '#2B3148',
  300: '#858ac6',
  400: '#6369b5',
  500: '#49509b',
  600: '#393e79',
  700: '#282c57',
  800: '#171b36',
  900: '#060817',
},



      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
