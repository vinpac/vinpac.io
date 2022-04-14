import React from 'react'
import { FormattedMessage } from 'react-intl'
import cx from 'classnames'

interface Props {
  className?: string
}

export const LandingPageFooter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx('container', className)}>
      <p className="py-12 text-lg font-medium text-center text-gray-500 border-t-2 dark:border-gray-700">
        <FormattedMessage
          id="tc4VSe"
          defaultMessage="Eu desenhei e desenvolvi este site em Janeiro de 2021"
        />
      </p>
    </div>
  )
}

export type LandingPageFooterProps = Props
