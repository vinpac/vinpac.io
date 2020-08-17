import React from 'react'
import cx from 'classnames'
import { ColorName } from 'lib/theme'

export interface ToolbarButtonProps {
  readonly as?:
    | React.ComponentType<{ ref: any; title: string; className: string }>
    | string
  readonly icon: React.ComponentType<{ size: number; className: string }>
  readonly color?: ColorName
  readonly label: string
  readonly href?: string
  readonly hideText?: boolean
  readonly onClick?: (event: React.MouseEvent) => void
  readonly className?: string
}

const ToolbarButton: React.FC<ToolbarButtonProps> = React.forwardRef(
  (
    {
      as: Component = 'a',
      icon: Icon,
      label,
      className,
      color = 'theme',
      hideText,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        title={label}
        className={cx(
          'hover:underline leading-9 group',
          `text-${color}-800`,
          className,
        )}
        {...props}
      >
        <div
          className={cx(
            'w-10 h-10 rounded-full inline-block align-top text-center text-white',
            `bg-${color}-300 group-hover:bg-${color}-400`,
            !hideText && 'mr-2',
          )}
        >
          <Icon size={21} className={`inline-block text-${color}-900`} />
        </div>
        {!hideText && label}
      </Component>
    )
  },
)

ToolbarButton.displayName = 'ToolbarButton'

export { ToolbarButton }
export default React.memo(ToolbarButton)
