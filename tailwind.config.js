/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      linearGradientColors: {
        'black-white': ['black 50%', 'white 50%'],
      },
      colors:{
        'custom-color': '#2B2730',
      }
    },
  },
  plugins: [],
}

