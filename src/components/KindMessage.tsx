import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  authorName: string
  authorRole: string
  company: string
  takenFrom: string
  message: string
  translatedByMe?: boolean
}

const KindMessage: React.FC<Props> = ({
  className,
  authorName,
  authorRole,
  company,
  message,
}) => {
  return (
    <div
      className={cx(
        'p-10 bg-white shadow dark:bg-gray-800 dark:border-gray-700',
        className,
      )}
    >
      <div className="flex mb-4">
        <div className="w-12 h-12 bg-orange-500 rounded-full mr-3" />

        <div className="-mt-1">
          <h4 className="font-medium text-lg  text-gray-700 dark:text-white">
            {authorName}
          </h4>
          <p className="text-gray-500">
            {authorRole}
            {company && ` @ ${company}`}
          </p>
        </div>
      </div>
      <p className="text-lg font-sans text-gray-800 dark:text-gray-200">
        {message}
      </p>
    </div>
  )
}

export type KindMessageProps = Props
export default React.memo(KindMessage)
