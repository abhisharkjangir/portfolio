module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#fece2f',
      primaryLight: '#fece2f33',
      secondary: '#000000',
      secondaryLight: '#0a0a0a',
      secondaryLighter: '#151515',
      secondaryLightest: '#92929233',
      tertiary: '#929292',
      tertiaryLight: '#d4d4d4',
      tertiaryLigher: '#e6f1ff',
    },
    blend: 'screen',
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
