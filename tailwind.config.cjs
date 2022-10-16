/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      gray: {
        100: '#f2f2f2',
        200: '#d9d9d9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1a1a1a',
        700: '#0d0d0d'
      },
      purple: '#8284fa',

      'purple-dark': '#5e60ce',

      blue: '#4ea8de',

      'blue-dark': '#1e6f9f',

      danger: '#e25858',

      white: '#fff',

      black: '#000'
    },

    fontSize: {
      sm: 12,
      md: 14,
      lg: 16
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
}
