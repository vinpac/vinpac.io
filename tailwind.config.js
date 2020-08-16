module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
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
      padding: '0.75rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#F4F8FF',
          100: '#E9F0FF',
          200: '#C7DAFE',
          300: '#A5C4FD',
          400: '#6298FC',
          500: '#1E6CFB',
          600: '#1B61E2',
          700: '#124197',
          800: '#0E3171',
          900: '#09204B',
        },
        secondary: {
          50: '#FFFCF7',
          100: '#FFFAEF',
          200: '#FFF2D7',
          300: '#FFEBBF',
          400: '#FFDB90',
          500: '#FFCC60',
          600: '#E6B856',
          700: '#997A3A',
          800: '#735C2B',
          900: '#4D3D1D',
        },
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
        'theme-standout': {
          100: 'var(--color-theme-standout-100)',
          200: 'var(--color-theme-standout-200)',
          300: 'var(--color-theme-standout-300)',
          400: 'var(--color-theme-standout-400)',
          500: 'var(--color-theme-standout-500)',
          600: 'var(--color-theme-standout-600)',
          700: 'var(--color-theme-standout-700)',
          800: 'var(--color-theme-standout-800)',
          900: 'var(--color-theme-standout-900)',
        },
        'alpha-white': {
          50: 'rgba(255, 255, 255, .05)',
          100: 'rgba(255, 255, 255, .1)',
          200: 'rgba(255, 255, 255, .2)',
          300: 'rgba(255, 255, 255, .3)',
          400: 'rgba(255, 255, 255, .4)',
          500: 'rgba(255, 255, 255, .5)',
          600: 'rgba(255, 255, 255, .6)',
          700: 'rgba(255, 255, 255, .7)',
          800: 'rgba(255, 255, 255, .8)',
          900: 'rgba(255, 255, 255, .9)',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/typography')],
}
