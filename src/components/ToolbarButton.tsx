import React from 'react'
import cx from 'classnames'

export interface ToolbarButtonProps {
  as?:
    | React.ComponentType<{ ref: any; title: string; className: string }>
    | string
  label: string
  href?: string
  onClick?: (event: React.MouseEvent) => void
  fallbackToLabel?: boolean
  children?: React.ReactNode
  className?: string
  textClassName?: string
}

const ToolbarButton: React.FC<ToolbarButtonProps> = React.forwardRef(
  (
    {
      as: Component = 'a',
      className,
      textClassName,
      label,
      fallbackToLabel = true,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        title={label}
        className={cx(
          'hover:underline focus:outline-none leading-9 rounded-full',
          textClassName ||
            `text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white`,
          className,
        )}
        {...props}
        aria-label={label}
      >
        {children || (fallbackToLabel && label)}
      </Component>
    )
  },
)

ToolbarButton.displayName = 'ToolbarButton'

export { ToolbarButton }
export default React.memo(ToolbarButton)
