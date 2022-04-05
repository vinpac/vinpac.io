import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'

interface Props {
  className?: string
}

const CurrentTimeAndCity: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

  // Adjust time for GMT-3
  const now = new Date()
  now.setHours(now.getUTCHours() - 3)

  return (
    <div className={cx('', className)}>
      <h5 className="text-gray-400 uppercase text-sm font-medium">
        <FormattedMessage id="Equvau" defaultMessage="Cidade atual" />
      </h5>
      <p>
        <FormattedMessage
          id="MJx0vh"
          defaultMessage="São Paulo, SP {time} BR"
          values={{ time: intl.formatTime(now) }}
        />
      </p>
    </div>
  )
}

export type CurrentTimeAndCityProps = Props
export default CurrentTimeAndCity
