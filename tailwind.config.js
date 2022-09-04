/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "PUPU": "#000000",
        'blue-zodiac': {
          '50': '#ecf8ff',
          '100': '#dcf2ff',
          '200': '#bfe5ff',
          '300': '#99d3ff',
          '400': '#71b5ff',
          '500': '#4f96ff',
          '600': '#3072fb',
          '700': '#245dde',
          '800': '#204fb3',
          '900': '#112345',
      },
      }
    },
  },
  plugins: [],
}
