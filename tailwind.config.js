const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
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
        gray: {
          ...colors.coolGray,
          1000: '#0B0F19',
        },
        primary: colors.green,
        orange: colors.orange,
        theme: {
          100: 'var(--color-theme-100)',
          200: 'var(--color-theme-200)',
          300: 'var(--color-theme-300)',
          400: 'var(--color-theme-400)',
          500: 'var(--color-theme-500)',
          600: 'var(--color-theme-600)',
          700: 'var(--color-theme-700)',
          800: 'var(--color-theme-800)',
          900: 'var(--color-theme-900)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
