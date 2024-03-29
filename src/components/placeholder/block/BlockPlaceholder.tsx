import React from 'react'
import cx from 'classnames'

export interface BlockPlaceholderProps {
  className?: string
}

export const BlockPlaceholder: React.FC<BlockPlaceholderProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cx('bg-theme-400 rounded animate-pulse', className)}>
      {children}
    </div>
  )
}

BlockPlaceholder.displayName = 'BlockPlaceholder'
