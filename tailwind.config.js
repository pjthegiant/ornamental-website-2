/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        slateMetal: '#2F353B',
        goldAccent: '#B8860B',
        goldHover: '#9E7206',
        offWhite: '#F4F4F4',
      },
    },
  },
  plugins: [],
}
