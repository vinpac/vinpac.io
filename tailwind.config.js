const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx', './src/**/*.svg'],
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringOpacity: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          '[class~="lead"]': {
            color: theme('colors.gray.700'),
          },
          a: {
            color: theme('colors.gray.900'),
          },
          strong: {
            color: theme('colors.gray.900'),
          },
          'ol > li::before': {
            color: theme('colors.gray.600'),
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.400'),
          },
          hr: {
            borderColor: theme('colors.gray.300'),
          },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.300'),
          },
          h1: {
            color: theme('colors.gray.900'),
          },
          h2: {
            color: theme('colors.gray.900'),
          },
          h3: {
            color: theme('colors.gray.900'),
          },
          h4: {
            color: theme('colors.gray.900'),
          },
          'figure figcaption': {
            color: theme('colors.gray.600'),
          },
          code: {
            color: theme('colors.gray.900'),
          },
          pre: {
            color: '#fff',
          },
          thead: {
            color: theme('colors.gray.900'),
            borderBottomColor: theme('colors.gray.400'),
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.300'),
          },
        },
      },
    }),
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1080px',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        gray: colors.stone,
        primary: colors.green,
        orange: colors.orange,
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.4' },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
