module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      height: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      maxWidth: {
        '1/2': '50%'
      }
    },
  },
  variants: {
    extend: {
      translate: ['active']
    },
  },
  plugins: [],
}