import React, { forwardRef, memo } from 'react'
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
  isExternal?: boolean
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = memo(
  forwardRef(
    (
      {
        as: Component = 'a',
        className,
        textClassName,
        label,
        fallbackToLabel = true,
        isExternal,
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
          {...(isExternal
            ? { ...props, target: '_blank', rel: 'noreferrer' }
            : props)}
          aria-label={label}
        >
          {children || (fallbackToLabel && label)}
        </Component>
      )
    },
  ),
)

ToolbarButton.displayName = 'ToolbarButton'
