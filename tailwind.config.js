/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'greyish-primary': '#3E3C40',
        'green-primary': '#B5DC58',
        'content-color': '#222222',
        'menu-bg': '#315C1E',
        'menu-secondary': '#D9D9D9',
        'contact-color': '#FBF2EF',
        'darkish-green': '#003334',
        'card-testimony-color': '#807B84',
      },

      lineHeight: {
        24: '24px',
        32: '32px',
        40: '40px',
        43: '43px',
        56: '56px',
        80: '80px',
      },
      backgroundImage: {
        'hero-section': "url('/public/images/hero_section.png')",
      },
      screens: {
        xxs: '360px',
      },
    },
  },
  plugins: [],
}
