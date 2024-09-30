/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #030303 17%, #404040 100%)',
    },
    screens: {
      'md': '960px',
      'lg': '1200px',
      'vxl': '1920px'
    },
    colors: {
      'dark': '#060206',
      'bright': '#E6E6E6',
      'buttons': '#2f0b0f',
      'main': '#dad1c3',
      'text': '#00000',
    },
    boxShadow: {
      '3xl': '0 10px  10px rgba(255, 255, 255, 0.3)',
      '2xl': '0 10px  10px rgba(0, 0, 0, 0.3)',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

