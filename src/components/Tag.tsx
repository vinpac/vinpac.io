import React from 'react'
import cx from 'classnames'
import { ColorName, useTailwindCx } from 'lib/theme'

export interface TagProps {
  readonly className?: string
  readonly bg?: string
  readonly color?: ColorName
  readonly children?: React.ReactNode
}

const Tag: React.FC<TagProps> = ({
  className,
  bg,
  color = 'gray',
  children,
}) => {
  const vx = useTailwindCx(color)
  return (
    <span
      className={cx(
        className,
        `${bg || vx('bg', 100)} ${vx(
          'text',
          600,
        )} text-xs px-2 inline-block rounded font-medium`,
      )}
    >
      {children}
    </span>
  )
}

Tag.displayName = 'Tag'

export { Tag }
export default Tag
