/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        logo: ['Oleo Script', 'cursive'],
      },
      boxShadow: {
        lighter: '0px 1px 5px 1px rgba(0, 0, 0, 0.05)',
        light: '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        books: 'repeat(auto-fill, minmax(18.75rem, 1fr))',
      },
      screens: {
        xl: '1300px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
