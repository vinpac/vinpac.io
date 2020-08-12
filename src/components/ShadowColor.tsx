import React from 'react'
import cx from 'classnames'
import { useTailwindCx, AppColorName } from 'lib/css'

export interface ShadowColorProps {
  readonly color: AppColorName
  readonly distance: '1' | '2' | '3' | '4'
  readonly className?: string
}

const ShadowColor: React.FC<ShadowColorProps> = ({
  className,
  color,
  children,
  distance = '2',
}) => {
  const tcx = useTailwindCx(color)
  return (
    <div className={cx('relative', className)}>
      <div
        className={`w-full h-full rounded-xl absolute top-0 ${tcx(
          'bg',
          300,
          300,
        )} transform translate-y-${distance} translate-x-${distance}`}
      />
      {children}
    </div>
  )
}

ShadowColor.displayName = 'ShadowColor'

export { ShadowColor }
export default ShadowColor
