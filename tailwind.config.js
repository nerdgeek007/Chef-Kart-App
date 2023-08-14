/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        HeaderShadow: '0px 1px 4px #D6D6D69E',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        Recommended: '2fr 1fr',
      },
    },
  },
  plugins: [],
};
