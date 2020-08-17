import React from 'react'
import cx from 'classnames'
import { ColorName } from 'lib/theme'

export interface ButtonProps {
  readonly as?: React.ComponentType<{ className: string }> | string
  readonly className?: string
  readonly color?: ColorName
  readonly paddingClassName?: string
}

const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  className,
  paddingClassName,
  color = 'primary',
  ...props
}) => {
  return (
    <Component
      {...props}
      className={cx(
        'hover:shadow-outline font-bold rounded-lg text-white',
        `bg-${color}-500`,
        paddingClassName,
        className,
      )}
    />
  )
}

Button.displayName = 'Button'

export { Button }
export default Button
