import React from 'react'
import cx from 'classnames'
import { ColorName } from '@lib/theme'

export interface ShadowColorProps {
  color: ColorName
  distance: '1' | '2' | '3' | '4'
  className?: string
  shadowClassName?: string
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
          `w-full h-full rounded-xl absolute top-0 opacity-50 transform bg-${color}-500`,
          shadowClassName,
          {
            ['translate-y-1 translate-x-1']: distance === '1',
            ['translate-y-2 translate-x-2']: distance === '2',
            ['translate-y-3 translate-x-3']: distance === '3',
            ['translate-y-4 translate-x-4']: distance === '4',
          },
        )}
      />
      {children}
    </div>
  )
}

ShadowColor.displayName = 'ShadowColor'

export { ShadowColor }
export default ShadowColor
