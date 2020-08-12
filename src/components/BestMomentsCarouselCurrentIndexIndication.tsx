import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import Tooltip from '@reach/tooltip'
import { AppColorName } from 'lib/css/types'
import { useTailwindCx } from 'lib/css'

export interface BestMomentsCarouselCurrentIndexIndicationProps {
  readonly className?: string
  readonly positionClassName?: string
  readonly color?: AppColorName
  readonly activeSlideIndex: number
  readonly timeout: number
  readonly slidesLength: number
}

const BestMomentsCarouselCurrentIndexIndication: React.FC<BestMomentsCarouselCurrentIndexIndicationProps> = ({
  className,
  positionClassName = 'relative',
  activeSlideIndex,
  timeout,
  slidesLength,
  color,
}) => {
  const vx = useTailwindCx(color)
  const [timeoutPercentage, setTimeoutPercentage] = useState(0)
  useEffect(() => {
    let elapsedMs = 0
    const intervalTimeout = 200
    const interval = window.setInterval(() => {
      elapsedMs += intervalTimeout
      // Eu reduzi o timeout por 1% para chegar mais rapido no fim
      // Dando uma experiência mais fluida
      setTimeoutPercentage((elapsedMs / (timeout - timeout / 100)) * 100)

      if (elapsedMs >= timeout) {
        clearInterval(interval)
      }
    }, intervalTimeout)
    return () => clearInterval(interval)
  }, [timeout, activeSlideIndex])

  return (
    <Tooltip label="É o index po">
      <span
        className={cx(
          `component leading-3 ${vx(
            'text',
            700,
          )} font-medium flex items-center rounded-full`,
          positionClassName,
          className,
        )}
      >
        <div
          className={`${vx(
            'bg',
            200,
          )} w-8 h-2 rounded-full overflow-hidden mr-2`}
        >
          <span
            style={{ width: `${timeoutPercentage}%` }}
            className={`block ${vx('bg', 400)} h-full`}
          />
        </div>
        <span className="text-xs">
          {activeSlideIndex}/{slidesLength - 1}
        </span>
      </span>
    </Tooltip>
  )
}

BestMomentsCarouselCurrentIndexIndication.displayName =
  'BestMomentsCarouselCurrentIndexIndication'

export { BestMomentsCarouselCurrentIndexIndication }
export default React.memo(BestMomentsCarouselCurrentIndexIndication)
