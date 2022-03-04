const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "custom-yellow": {
      "500": "#EDAE0A",
    },
    "greyish": "rgb(31, 41, 55)",
  },
}
module.exports = {
  //mode: 'jit',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    "colors": colors,
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
