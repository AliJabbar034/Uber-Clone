/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"
  , "./Components/**/*.{js,jsx,ts,tsx}",
  ,'./Components/RideOptionCard.js'
  , "./Screens/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {},
  },
  plugins: [],
}

