import React, { useEffect, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'

interface Props {
  className?: string
}

const CurrentTimeAndCity: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

  // Adjust time for GMT-3
  const [now, setNow] = useState<Date | undefined>(undefined)

  useEffect(() => {
    const date = new Date()
    date.setHours(date.getUTCHours() - 3)
    setNow(date)
  }, [])

  return (
    <div className={cx('', className)}>
      <h5 className="text-gray-400 uppercase text-xs font-semibold">
        <FormattedMessage id="Equvau" defaultMessage="Cidade atual" />
      </h5>
      <p className={now ? undefined : 'blur'}>
        <FormattedMessage
          id="3kNnP9"
          defaultMessage="São Paulo, SP {time} 🇧🇷"
          values={{ time: now ? intl.formatTime(now) : '00:00' }}
        />
      </p>
    </div>
  )
}

export type CurrentTimeAndCityProps = Props
export default CurrentTimeAndCity
