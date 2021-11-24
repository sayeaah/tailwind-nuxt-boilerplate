module.exports = {
  mode: 'jit',
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#38b9e4',
        secondary: '#f9a033',
      }
    },
    fontFamily: {
      'sans': ['Noto Sans JP', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
