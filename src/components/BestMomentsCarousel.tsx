import React, { useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FaArrowRight } from 'react-icons/fa'
import { BestMomentsCarouselCurrentIndexIndication } from 'components/BestMomentsCarouselCurrentIndexIndication'
import { ColorName } from 'lib/theme/types'

export interface BestMomentselProps {
  readonly className?: string
  readonly color?: ColorName
  readonly positionClassName?: string
}

const TIMEOUT = 10000

const BestMomentsCarousel: React.FC<BestMomentselProps> = ({
  className,
  positionClassName = 'relative',
}) => {
  const [skippedSlideIndex, setSkippedSlideIndex] = useState(-1)
  const [state, setState] = useState({
    activeSlideIndex: 0,
    slides: [
      'https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.2885-15/e35/75362592_493591947927373_1199419344128250430_n.jpg?_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=zHdUNo0w28wAX_g2o09&oh=a5c2418c07afbfe7efb71eeddd9330bd&oe=5F5D4578',
      'https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.12442-15/e35/90092735_108075860689590_2413390579810194457_n.jpg?_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=i_8Q0PDNGtEAX-rbuLE&oh=86cb0cdd28a02c6b84a6f0323b7a5a10&oe=5F36C445',
      'https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.12442-15/e35/72414603_400035690643649_5301896214338294248_n.jpg?_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=D4aSxVe-_bwAX_G-dI6&oh=ecdcaf9f47871646bc3842898f214eb6&oe=5F36AF70',
      'https://source.unsplash.com/random?a=4',
      'https://source.unsplash.com/random?a=5',
      'https://source.unsplash.com/random?a=6',
    ],
  })

  const nextSlide = useCallback(
    (): void =>
      setState((prevState) => {
        const next = prevState.activeSlideIndex + 1
        return {
          ...prevState,
          activeSlideIndex: next >= prevState.slides.length ? 0 : next,
        }
      }),
    [setState],
  )
  const skipSlide = (): void => {
    setSkippedSlideIndex(state.activeSlideIndex)
    nextSlide()
  }

  useEffect(() => {
    const interval = window.setInterval(() => nextSlide(), TIMEOUT)
    return (): void => clearInterval(interval)
  }, [skippedSlideIndex, nextSlide])

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
                  'best-moment bg-cover bg-bottom',
                  isActive && 'best-moment-current bg-theme-500',
                  isNext && `best-moment-next bg-theme-300`,
                )}
                style={{ backgroundImage: `url('${item}')` }}
              >
                {isActive && (
                  <button
                    onClick={() => skipSlide()}
                    className="w-10 h-10 bg-alpha-white-300 rounded-full absolute bottom-0 right-0 my-auto mb-5 mr-5 animated fadeIn animated_delay-1s"
                    title="Pular slide"
                  >
                    <FaArrowRight className="mx-auto text-gray-900 transform rotate-45" />
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
        className="bottom-0 left-0"
        positionClassName="absolute"
        slidesLength={state.slides.length}
      />
      <style jsx global>{`
        .best-moments-carousel {
          width: 400px;
          height: 430px;
        }

        .best-moment {
          width: 400px;
          height: 400px;
          border-radius: 12px;
          position: absolute;
          left: 0;
          top: 0;
          transition: all 1s;
          opacity: 1;
        }

        .best-moment-current.best-moment-enter {
          transition: all 2s;
        }

        .best-moment-next.best-moment-enter {
          opacity: 0 !important;
          transform: scale(0.6) rotateZ(0deg) translateX(-200px)
            translateY(10px);
        }

        .best-moment-next {
          z-index: 9;
          transform: scale(0.8) rotateZ(-15deg) translateX(-120px)
            translateY(-40px);
          transition: all 1.5s;
          opacity: 0.4;
        }

        .best-moment-current {
          z-index: 10;
        }

        .best-moment-exit {
          opacity: 0;
          z-index: 30 !important;
          transform: scale(1.2) rotateZ(12deg) rotateY(-22deg) translateX(20px)
            translateY(-20px);
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

BestMomentsCarousel.displayName = 'BestMomentsCarousel'

export { BestMomentsCarousel }
export default BestMomentsCarousel
