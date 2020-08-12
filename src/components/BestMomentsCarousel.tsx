import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FaArrowLeft } from 'react-icons/fa'
import { BestMomentsCarouselCurrentIndexIndication } from 'components/BestMomentsCarouselCurrentIndexIndication'
import { AppColorName } from 'lib/css/types'

export interface BestMomentselProps {
  readonly className?: string
  readonly color?: AppColorName
  readonly positionClassName?: string
}

const TIMEOUT = 10000

const BestMomentsCarousel: React.FC<BestMomentselProps> = ({
  className,
  positionClassName = 'relative',
  color = 'green' as AppColorName,
}) => {
  const [skippedSlideIndex, setSkippedSlideIndex] = useState(-1)
  const [state, setState] = useState({
    activeSlideIndex: 0,
    slides: [
      'https://source.unsplash.com/random?a=1',
      'https://source.unsplash.com/random?a=2',
      'https://source.unsplash.com/random?a=3',
      'https://source.unsplash.com/random?a=4',
      'https://source.unsplash.com/random?a=5',
      'https://source.unsplash.com/random?a=6',
    ],
  })

  const nextSlide = (): void =>
    setState((prevState) => {
      const next = prevState.activeSlideIndex + 1
      return {
        ...prevState,
        activeSlideIndex: next >= state.slides.length ? 0 : next,
      }
    })
  const skipSlide = (): void => {
    setSkippedSlideIndex(state.activeSlideIndex)
    nextSlide()
  }

  useEffect(() => {
    const interval = window.setInterval(() => nextSlide(), TIMEOUT)
    return (): void => clearInterval(interval)
  }, [skippedSlideIndex])

  const reachedEnd = state.activeSlideIndex === state.slides.length - 1
  return (
    <div className={cx('best-moments-carousel', positionClassName, className)}>
      <TransitionGroup>
        {state.slides.map((item, index) => {
          const isActive = index === state.activeSlideIndex
          const isNext =
            state.activeSlideIndex + 1 === index || (reachedEnd && index === 0)

          if (!isActive && !isNext) {
            return null
          }

          return (
            <CSSTransition
              key={index}
              timeout={isNext ? 1000 : 2000}
              in={isActive}
              unmountOnExit
              classNames={{
                enter: 'best-moment-enter',
                enterActive: 'best-moment-enter-active',
                enterDone: isActive ? 'z-20' : '',
                exit: 'best-moment-exit',
              }}
            >
              <div
                className={cx(
                  'best-moment',
                  isActive && 'best-moment-current bg-gray-200',
                  isNext && `best-moment-next bg-${color}-500`,
                )}
                style={{ backgroundImage: `url('${item}')` }}
              >
                {isActive && (
                  <button
                    onClick={() => skipSlide()}
                    className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 -ml-16 absolute top-0 bottom-0 my-auto animated fadeIn animated_delay-1s"
                    title="Pular slide"
                  >
                    <FaArrowLeft className="mx-auto text-gray-800" />
                  </button>
                )}
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
      <BestMomentsCarouselCurrentIndexIndication
        activeSlideIndex={state.activeSlideIndex}
        timeout={TIMEOUT}
        className="bottom-0 -mb-4 right-0"
        color={color}
        positionClassName="absolute"
        slidesLength={state.slides.length}
      />
      <style jsx global>{`
        .best-moments-carousel {
          width: 400px;
          height: 450px;
        }

        .best-moment {
          width: 400px;
          height: 400px;
          border-radius: 12px;
          position: absolute;
          left: 0;
          top: 50px;
          transition: all 1s;
          opacity: 1;
        }

        .best-moment-current.best-moment-enter {
          transition: all 2s;
        }

        .best-moment-next.best-moment-enter {
          opacity: 0 !important;
          transform: scale(0.6) rotateZ(0deg) translateX(200px) translateY(10px);
        }

        .best-moment-next {
          z-index: 9;
          transform: scale(0.8) rotateZ(-1deg) translateX(100px)
            translateY(20px);
          transition: all 1.5s;
        }

        .best-moment-next::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: #48bb78;
          opacity: 0.7;
          border-radius: 12px;
        }

        .best-moment-current {
          z-index: 10;
          transform: rotateZ(-10deg) rotateY(-20deg);
        }

        .best-moment-exit {
          opacity: 0;
          z-index: 30 !important;
          transform: scale(1.2) rotateZ(-12deg) rotateY(-22deg)
            translateX(-20px) translateY(-20px);
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

BestMomentsCarousel.displayName = 'BestMomentsCarousel'

export { BestMomentsCarousel }
export default BestMomentsCarousel
