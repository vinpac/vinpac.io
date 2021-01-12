import React from 'react'
import Arrow1 from '@assets/svg/arrow-1.svg'
import Arrow2 from '@assets/svg/arrow-2.svg'
import Arrow3 from '@assets/svg/arrow-3.svg'
import Arrow4 from '@assets/svg/arrow-4.svg'
import cx from 'classnames'
import Head from 'next/head'

interface Props {
  className?: string
  message: string | React.ReactNode
  direction?: 'left' | 'right'
  shape: keyof typeof arrows
}

const ArrowMessage: React.FC<Props> = ({
  message,
  className,
  shape,
  direction = 'left',
}) => {
  const Arrow = arrows[shape]
  return (
    <div className={cx('flex flex-row items-center space-x-6', className)}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      {direction === 'left' && <Arrow />}
      <p
        style={{ fontFamily: 'Nanum Pen Script' }}
        className={cx(
          'block text-2xl max-w-xs transform',
          shape && classNameByShape[shape],
        )}
      >
        {message}
      </p>
      {direction === 'right' && <Arrow />}
    </div>
  )
}

const arrows = {
  '1': Arrow1,
  '2': Arrow2,
  '3': Arrow3,
  '4': Arrow4,
} as const

const classNameByShape: Record<keyof typeof arrows, string> = {
  '1': 'translate-y-10',
  '2': 'rotate-12 translate-x-16 translate-y-14 text-center',
  '3': 'translate-x-16 translate-y-16 text-center',
  '4': 'translate-x-32 -translate-y-20 text-center',
}

export type ArrowMessageProps = Props
export default ArrowMessage
