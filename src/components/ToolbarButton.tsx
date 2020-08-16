import React from 'react'
import cx from 'classnames'
import { useTailwindCx, ColorName } from 'lib/theme'

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
      color = 'gray',
      hideText,
      ...props
    },
    ref,
  ) => {
    const tcx = useTailwindCx(color)

    return (
      <Component
        ref={ref}
        title={label}
        className={cx(
          tcx('text', 800),
          'hover:underline leading-9 group',
          className,
        )}
        {...props}
      >
        <div
          className={`w-10 h-10 rounded-full inline-block align-top text-center text-white ${tcx(
            'bg',
            300,
          )} ${tcx('group-hover:bg', 400)}${!hideText ? ' mr-2' : ''}`}
        >
          <Icon size={21} className={`inline-block ${tcx('text', 900)}`} />
        </div>
        {!hideText && label}
      </Component>
    )
  },
)

ToolbarButton.displayName = 'ToolbarButton'

export { ToolbarButton }
export default React.memo(ToolbarButton)
