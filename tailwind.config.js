const plugin = require('tailwindcss/plugin')
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          fontFamily: {
              'sans': ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif']
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        const newUtilities = {
          '.capitalize-first:first-letter': {
            textTransform: 'uppercase',
          },
        }
        addUtilities(newUtilities)
      }),
      require('@tailwindcss/forms'),
    ],
  }