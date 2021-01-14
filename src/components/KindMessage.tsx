import React from 'react'
import cx from 'classnames'
import s from '@css/KindMessage.module.css'

interface Props {
  className?: string
  authorName: string
  authorRole: string
  authorAvatarURL: string
  company: string
  takenFrom: string
  message: string
  translatedByMe?: boolean
}

const KindMessage: React.FC<Props> = ({
  className,
  authorName,
  authorRole,
  authorAvatarURL,
  company,
  message,
}) => {
  return (
    <div className={cx('', className)}>
      <div
        className={`p-8 bg-white ${s.bubble} border border-white relative rounded-lg shadow dark:bg-gray-800 dark:border-gray-600 mb-8`}
      >
        <p className="text-lg font-sans text-gray-800 font-serif italic dark:text-gray-200">
          &quot;{message}&quot;
        </p>
      </div>
      <div className="flex items-center mb-4 pl-8">
        <div className="w-16 h-16 bg-orange-500 rounded-full mr-3">
          <img
            src={authorAvatarURL}
            alt={authorName}
            className="rounded-full w-full"
          />
        </div>

        <div>
          <h4 className="font-medium text-lg  text-gray-700 dark:text-white">
            {authorName}
          </h4>
          <p className="text-gray-500 font-medium">
            {authorRole}
            {company && ` @ ${company}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export type KindMessageProps = Props
export default React.memo(KindMessage)
