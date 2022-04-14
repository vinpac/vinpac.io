import React from 'react'
import Arrow1 from '@assets/svg/arrow-1.svg'
import Arrow2 from '@assets/svg/arrow-2.svg'
import Arrow3 from '@assets/svg/arrow-3.svg'
import Arrow4 from '@assets/svg/arrow-4.svg'
import Arrow5 from '@assets/svg/arrow-5.svg'
import cx from 'classnames'

// TODO: TailwindCSS won't know doesn't know to extract this
// Needs fixing
const flipClassNames = (cx: string): string =>
  cx.replace(/(-)?(translate-[xy])/g, (_, negativeSymbol, baseClassName) => {
    // If has the negative symbol
    if (negativeSymbol) {
      // Remove it
      return baseClassName
    }

    // Add the negative symbol
    return `-${baseClassName}`
  })

interface Props {
  className?: string
  message: string | React.ReactNode
  direction?: 'left' | 'right'
  flip?: boolean
  shape: keyof typeof arrows
}

export const ArrowMessage: React.FC<Props> = ({
  message,
  className,
  shape,
  direction = 'left',
  flip,
}) => {
  const Arrow = arrows[shape]
  const arrowClassName = flip && 'transform rotate-180'
  return (
    <div className={cx('flex flex-row items-center space-x-6', className)}>
      {direction === 'left' && <Arrow className={arrowClassName} />}
      <p
        style={{ fontFamily: 'Nanum Pen Script, Georgia, serif' }}
        className={cx(
          'block text-2xl max-w-xs transform',
          shape && !flip && classNameByShape[shape],
          shape && flip && flipClassNames(classNameByShape[shape]),
        )}
      >
        {message}
      </p>
      {direction === 'right' && <Arrow className={arrowClassName} />}
    </div>
  )
}

const arrows = {
  '1': Arrow1,
  '2': Arrow2,
  '3': Arrow3,
  '4': Arrow4,
  '5': Arrow5,
} as const

const classNameByShape: Record<keyof typeof arrows, string> = {
  '1': 'translate-y-10',
  '2': 'rotate-12 translate-x-16 translate-y-14 text-center',
  '3': 'translate-x-16 translate-y-16 text-center',
  '4': '-translate-x-3 translate-y-3',
  '5': '-translate-x-3 translate-y-1',
}

export type ArrowMessageProps = Props
