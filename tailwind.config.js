/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'lg': '1080px',
        'xl': '1280px'
      },
      colors: {
        'bg': '#f8f5f2',
        'text': '#232323',
        'error': '#f45d48',
        'white': '#fff',
        'detail': '#078080',
      }
    },
  },
  plugins: [],
}

