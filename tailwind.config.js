module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
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
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}