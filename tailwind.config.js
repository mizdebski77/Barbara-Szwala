/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    colors: {
      'dark': '#060206',
      'bright': '#E6E6E6',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

