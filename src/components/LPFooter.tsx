import React from 'react'
import { FormattedMessage } from 'react-intl'
import cx from 'classnames'

interface Props {
  className?: string
}

const LPFooter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx('container', className)}>
      <p className="border-t-2 dark:border-gray-700 py-12 text-center text-lg font-medium text-gray-500">
        <FormattedMessage
          id="tc4VSe"
          defaultMessage="Eu desenhei e desenvolvi este site em Janeiro de 2021"
        />
      </p>
    </div>
  )
}

export type LPFooterProps = Props
export default LPFooter
