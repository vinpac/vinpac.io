const colors = require('tailwindcss/colors')

const safelist = ['bg-gray-800']

module.exports = {
  darkMode: 'class',
  purge: {
    content: [
      './src/components/**/*.tsx',
      './src/assets/svg/*.svg',
      './src/pages/**/*.tsx',
    ],
    options: {
      whitelist: safelist,
      safelist,
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringOpacity: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  theme: {
    fontFamily: {
      serif: ['Bitter', 'ui-serif', 'Georgia', 'serif'],
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.theme.700'),
          '[class~="lead"]': {
            color: theme('colors.theme.700'),
          },
          a: {
            color: theme('colors.theme.900'),
          },
          strong: {
            color: theme('colors.theme.900'),
          },
          'ol > li::before': {
            color: theme('colors.theme.600'),
          },
          'ul > li::before': {
            backgroundColor: theme('colors.theme.400'),
          },
          hr: {
            borderColor: theme('colors.theme.300'),
          },
          blockquote: {
            color: theme('colors.theme.900'),
            borderLeftColor: theme('colors.theme.300'),
          },
          h1: {
            color: theme('colors.theme.900'),
          },
          h2: {
            color: theme('colors.theme.900'),
          },
          h3: {
            color: theme('colors.theme.900'),
          },
          h4: {
            color: theme('colors.theme.900'),
          },
          'figure figcaption': {
            color: theme('colors.theme.600'),
          },
          code: {
            color: theme('colors.theme.900'),
          },
          pre: {
            color: '#fff',
          },
          thead: {
            color: theme('colors.theme.900'),
            borderBottomColor: theme('colors.theme.400'),
          },
          'tbody tr': {
            borderBottomColor: theme('colors.theme.300'),
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
        gray: colors.coolGray,
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
