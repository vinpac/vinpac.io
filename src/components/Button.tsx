import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cx from 'classnames'

export interface ButtonProps {
  readonly as?:
    | React.ComponentType<{
        ref?: any
        className: string
        children?: React.ReactNode
      }>
    | string
  readonly className?: string
  readonly colorSchema?: keyof typeof colorMapCx
  readonly size?: keyof typeof sizeMapCx | null
}

const Button = React.forwardRef<
  any,
  ButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<'button'>, 'button'>
>(
  (
    {
      as: Component = 'button',
      className,
      colorSchema,
      size = 'base',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={cx(
          'hover:shadow-outline text-center font-semibold focus:outline-none focus:ring-4 ring-opacity-30',
          colorSchema && colorMapCx[colorSchema],
          size && sizeMapCx[size],
          className,
        )}
      >
        {children}
      </Component>
    )
  },
)

Button.displayName = 'Button'

const colorMapCx = {
  theme:
    'bg-white dark:bg-gray-700 active:ring-primary-500 dark:hover:bg-gray-600 hover:ring-2 hover:ring-opacity-100 ring-primary-500 ',
  primary: 'bg-primary-500 hover:bg-primary-600 text-white ring-primary-500',
  gray:
    'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white ring-gray-400',
} as const

const sizeMapCx = {
  xs: 'px-2 py-1 rounded text-xs',
  sm: 'px-2 py-1 rounded-md text-sm',
  base: 'px-3 py-2 rounded-md text-base',
  md: 'px-4 py-3 rounded-md',
  lg: 'px-5 py-4 rounded-lg text-lg',
  xl: 'px-6 py-5 rounded-lg text-xl',
} as const

export { Button }
export default Button
