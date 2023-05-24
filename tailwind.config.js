/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mainColor: "#91BBF8",
    },
    extend: {
      keyframes: {
        slideUp: {
          from: {
            transform: "translateY(-50%)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
        editorModalSlideUp: {
          from: {
            transform: "translateY(100px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slideUp: "slideUp 0.25s ease-out forwards;",
        editorModalSlideUp: "editorModalSlideUp 0.25s ease-out forwards;",
      },
    },
    screens: {
      mobile: "768px",
      desktop: "1024px",
    },
  },
  plugins: [],
};
