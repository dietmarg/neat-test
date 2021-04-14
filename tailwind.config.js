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
      black: colors.black,
      green: {
        light: '#7BB149',
        DEFAULT: '#2D5F0E',
        dark: '#143707',
      },
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
        'section-pattern': "url('/static/img/klee_bg.jpg')",
        'clover-dark': "url('/static/img/bg-clover-dark.svg')",
        'clover': "url('/static/img/bg-clover-big.svg')"
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
