import React from 'react'
import cx from 'classnames'

export interface BrowserMockupProps {
  className?: string
  screenClassName?: string
}

const BrowserMockup: React.FC<BrowserMockupProps> = ({
  className,
  screenClassName,
  children,
}) => {
  return (
    <div className={cx('component', className)}>
      <div className="content flex flex-col h-full">
        <div className="flex spacer-x-4 px-10 py-1">
          <span className="w-4 h-4 bg-red-500 rounded-full mr-2" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2" />
          <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
        </div>
        <div
          className={cx('screen overflow-hidden flex-grow', screenClassName)}
        >
          {children}
        </div>
      </div>
      <style jsx>{`
        .component {
          box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
            0 30px 60px -30px rgba(0, 0, 0, 0.3),
            inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
          border-radius: 42px;
          width: 1400px;
          height: 900px;
          background: #f6f9fc;
        }

        .content {
          padding: 8px;
        }
        .screen {
          border-radius: 12px 16px 34px 34px;
        }
      `}</style>
    </div>
  )
}

BrowserMockup.displayName = 'BrowserMockup'

export { BrowserMockup }
export default BrowserMockup
