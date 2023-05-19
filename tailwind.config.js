/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'mobile': '768px',
      'desktop': '1024px',
    },
  },
  plugins: [],
};
