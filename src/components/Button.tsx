import React from 'react'
import cx from 'classnames'
import { ColorName } from 'lib/theme'

export interface ButtonProps {
  readonly as?:
    | React.ComponentType<{
        ref?: any
        className: string
        children?: React.ReactNode
      }>
    | string
  readonly className?: string
  readonly color?: ColorName
  readonly paddingClassName?: string
}

const Button: React.FC<ButtonProps> = React.forwardRef<any, ButtonProps>(
  (
    {
      as: Component = 'button',
      className,
      paddingClassName,
      color = 'primary',
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={cx(
          'hover:shadow-outline font-bold rounded-lg text-white',
          `bg-${color}-500`,
          paddingClassName,
          className,
        )}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
export default Button
