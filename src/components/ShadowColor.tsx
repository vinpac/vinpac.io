import React from 'react'
import cx from 'classnames'
import { ColorName } from 'lib/theme'

export interface ShadowColorProps {
  readonly color: ColorName
  readonly distance: '1' | '2' | '3' | '4'
  readonly className?: string
  readonly shadowClassName?: string
}

const ShadowColor: React.FC<ShadowColorProps> = ({
  className,
  shadowClassName,
  color,
  children,
  distance = '2',
}) => {
  return (
    <div className={cx('relative', className)}>
      <div
        className={cx(
          `w-full h-full rounded-xl absolute top-0 bg-${color}-500 opacity-50 transform translate-y-${distance} translate-x-${distance}`,
          shadowClassName,
        )}
      />
      {children}
    </div>
  )
}

ShadowColor.displayName = 'ShadowColor'

export { ShadowColor }
export default ShadowColor
