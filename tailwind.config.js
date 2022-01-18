module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile' : '280px',
      'mobileLG' : '375px',
      'tablet' : '425px',
      'laptop' : '768px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}