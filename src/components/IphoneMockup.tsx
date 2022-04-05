import React from 'react'
import cx from 'classnames'

export interface IphoneMockupProps {
  className?: string
  screenClassName?: string
}

const IphoneMockup: React.FC<IphoneMockupProps> = ({
  className,
  screenClassName,
  children,
}) => {
  return (
    <div className={cx('component', className)}>
      <div className={cx('screen h-full overflow-hidden', screenClassName)}>
        {children}
      </div>
      <style jsx>{`
        .component {
          box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
            0 30px 60px -30px rgba(0, 0, 0, 0.3),
            inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
          border-radius: 42px;
          width: 301px;
          height: 615px;
          background: #f6f9fc;
          padding: 8px;
        }
        .screen {
          border-radius: 34px;
        }
      `}</style>
    </div>
  )
}

IphoneMockup.displayName = 'IphoneMockup'

export { IphoneMockup }
export default IphoneMockup
