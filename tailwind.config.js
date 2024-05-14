/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '550px',
        ...defaultTheme.screens,
      }
    },
    colors: {
      'primary': '#1F2533',
      'secondary': '#70737C',
      'brand-green': '#359740',
      'yellow': '#FFCF55',
      'light-blue': '#EFF2F8'
    },
    
  },
  plugins: [],
}