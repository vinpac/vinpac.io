import React from 'react'
import cx from 'classnames'
import { ColorName } from 'lib/theme'

export interface TagProps {
  readonly className?: string
  readonly bgClassName?: string
  readonly color?: ColorName
  readonly children?: React.ReactNode
}

const Tag: React.FC<TagProps> = ({
  className,
  color = 'gray',
  bgClassName: bg = `bg-${color}-100`,
  children,
}) => {
  return (
    <span
      className={cx(
        className,
        `${bg} text-${color}-600 text-xs px-2 inline-block rounded font-medium`,
      )}
    >
      {children}
    </span>
  )
}

Tag.displayName = 'Tag'

export { Tag }
export default Tag
