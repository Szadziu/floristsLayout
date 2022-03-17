module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "url('../assets/images/background.jpg')",
        'nav-rose': "url('../assets/images/red-rose.jpg')",
        'nav-gerbera': "url('../assets/images/gerbera.jpg')",
        'nav-crocus': "url('../assets/images/crocus.jpg')",
      },
      flexGrow: {
        1: 1,
        3: 3,
      },
    },
  },
  plugins: [],
};
