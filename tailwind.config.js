/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        pl: { max: '1024px' },
        tablet: { max: '840px' },
        phone: { max: '500px' },
      },
      colors: {
        sitePrimary: '#C778DD',
        siteBg: '#282C33',
        siteGray: '#ABB2BF',
        siteWhite: '#ffffff',
      },
      fontSize: {
        // siteExtra: '36px',
        siteLarge: 'clamp(1.5rem, 1.8vw, 3rem)',
        siteMedium: 'clamp(1.2rem, 1.6vw, 3rem)',
        siteSmall: 'clamp(0.5rem, 1rem, 2rem)',
        siteExtra: 'clamp(1.8rem, 2vw, 3rem)',
      },
      width: {
        smallCardSize: 'clamp(200px, 300px, 50%)',
        cardSize: 'clamp(280px, 60%, 50%)',
      },
    },
  },
  plugins: [],
};
