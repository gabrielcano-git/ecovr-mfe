/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-very-dark': '#034d2e',
      },
    },
    container: {
      screens: {
        xl: '1266px',
      },
    },
  },
  plugins: [],
}
