import React from 'react'
import cx from 'classnames'

export interface BlockPlaceholderProps {
  readonly className?: string
}

const BlockPlaceholder: React.FC<BlockPlaceholderProps> = ({
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

export { BlockPlaceholder }
export default BlockPlaceholder
