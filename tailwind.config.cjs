/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.jsx", "index.html"],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 3s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(4deg)",
          },
          "75%": {
            transform: "rotate(-4deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
