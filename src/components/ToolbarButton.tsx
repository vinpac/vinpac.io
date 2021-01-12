import React from 'react'
import cx from 'classnames'

export interface ToolbarButtonProps {
  readonly as?:
    | React.ComponentType<{ ref: any; title: string; className: string }>
    | string
  readonly label: string
  readonly href?: string
  readonly onClick?: (event: React.MouseEvent) => void
  readonly fallbackToLabel?: boolean
  readonly children?: React.ReactNode
  readonly className?: string
  readonly textClassName?: string
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
      >
        {children || (fallbackToLabel && label)}
      </Component>
    )
  },
)

ToolbarButton.displayName = 'ToolbarButton'

export { ToolbarButton }
export default React.memo(ToolbarButton)
