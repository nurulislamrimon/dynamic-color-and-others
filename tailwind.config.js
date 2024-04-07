/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-gray": "#666", //#666
        "red-rgba-10": "#e73c171a", //rgba(231, 60, 23, 0.10)
        "red-regular": "#E73C17", //rgba(231, 60, 23, 0.10)
        "fill-color": "#D9D9D9", //#D9D9D9
        "black-rgba-70": "#000000b3", //rgba(0, 0, 0, 0.70)
        "black-rgba-60": "#00000099", //rgba(0, 0, 0, 0.60);
      },
    },
  },
  plugins: [],
};
