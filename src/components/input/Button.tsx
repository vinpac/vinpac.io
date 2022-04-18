import { w } from 'windstitch'

export const Button = w.button(
  `
  hover:shadow-outline text-center
  font-medium focus:outline-none
  focus:ring-4 ring-opacity-30
`,
  {
    variants: {
      color: {
        theme:
          'bg-white dark:bg-gray-700 active:ring-primary-500 dark:hover:bg-gray-600 hover:ring-2 hover:ring-opacity-100 ring-primary-500 ',
        primary:
          'bg-primary-500 hover:bg-primary-600 text-white ring-primary-500',
        gray: 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white ring-gray-400',
      },
      size: {
        xs: 'px-2 py-1 rounded text-xs',
        sm: 'px-2 py-1 rounded-md text-sm',
        base: 'px-3 py-2 rounded-md text-base',
        md: 'px-4 py-3 rounded-md',
        lg: 'px-5 py-4 rounded-lg text-lg',
        xl: 'px-6 py-5 rounded-lg text-xl',
      },
    },
    defaultProps: {
      size: 'base',
      color: 'theme',
    },
  },
)
Button.displayName = 'Button'
