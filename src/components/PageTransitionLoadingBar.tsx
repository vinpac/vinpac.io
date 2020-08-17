import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import Router from 'next/router'
import { useThemeName } from 'lib/theme'

export interface PageTransitionLoadingBarProps {
  readonly className?: string
}

const PageTransitionLoadingBar: React.FC<PageTransitionLoadingBarProps> = ({
  className,
}) => {
  const [isLoading, setLoading] = useState(false)
  const theme = useThemeName()
  useEffect(() => {
    const start = (): void => setLoading(true)
    const disable = (): void => setLoading(false)
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', disable)
    Router.events.on('routeChangeError', disable)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', disable)
      Router.events.off('routeChangeError', disable)
    }
  }, [setLoading])

  if (!isLoading) {
    return null
  }

  const colorClassName = theme === 'dark' ? 'bg-primary-700' : 'bg-primary-500'

  return (
    <div className={cx('slider', className)}>
      <div className={`${colorClassName} line`} />
      <div className={`${colorClassName} subline inc`} />
      <div className={`${colorClassName} subline dec`} />
      <style jsx>{`
        .slider {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          height: 5px;
          overflow-x: hidden;
        }

        .line {
          position: absolute;
          opacity: 0.4;
          width: 150%;
          height: 5px;
        }

        .subline {
          position: absolute;
          height: 5px;
        }
        .inc {
          animation: increase 2s infinite;
        }
        .dec {
          animation: decrease 2s 0.5s infinite;
        }

        @keyframes increase {
          from {
            left: -5%;
            width: 5%;
          }
          to {
            left: 130%;
            width: 100%;
          }
        }
        @keyframes decrease {
          from {
            left: -80%;
            width: 80%;
          }
          to {
            left: 110%;
            width: 10%;
          }
        }
      `}</style>
    </div>
  )
}

PageTransitionLoadingBar.displayName = 'PageTransitionLoadingBar'

export { PageTransitionLoadingBar }
export default PageTransitionLoadingBar
