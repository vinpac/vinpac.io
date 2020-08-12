import React from 'react'
import cx from 'classnames'
import { AppColorName, useTailwindCx } from 'lib/css'

export interface ButtonProps {
  readonly as?: React.ComponentType<{ className: string }> | string
  readonly className?: string
  readonly color?: AppColorName
  readonly paddingClassName?: string
}

const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  className,
  paddingClassName,
  color = 'primary',
  ...props
}) => {
  const tcx = useTailwindCx(color)
  return (
    <Component
      {...props}
      className={cx(
        'hover:shadow-outline font-bold rounded-lg text-white',
        tcx('bg', 500),
        paddingClassName,
        className,
      )}
    />
  )
}

Button.displayName = 'Button'

export { Button }
export default Button
