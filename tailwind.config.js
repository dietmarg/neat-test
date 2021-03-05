const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      cyan: colors.cyan,
      white: colors.white,
      black: colors.black
    },
    fontFamily: {
      'sans': 'Roboto, Helvetica, Arial, sans-serif',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {},
      backgroundImage: theme => ({
        'section-pattern': "url('/static/img/klee_bg.jpg')"
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
