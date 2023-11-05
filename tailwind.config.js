/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      "heading": 'Righteous',
    },
    extend: {
      backgroundImage: {
        'home': "url('/src/images/home.jpg')",
      }
    }
  },
  plugins: [],
}

