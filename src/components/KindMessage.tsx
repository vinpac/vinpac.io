import React from 'react'
import cx from 'classnames'
import { FaStar } from 'react-icons/fa'

interface Props {
  className?: string
  authorName: string
  authorRole: string
  authorAvatarURL?: string
  company: string
  takenFrom: string
  message: string | React.ReactNode
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
      <div className="p-8 bg-white border border-white relative rounded-lg shadow dark:bg-gray-800 dark:border-gray-600 mb-8">
        <div className="space-x-2 flex text-yellow-500 text-xl mb-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-lg text-gray-800 italic dark:text-gray-200 mb-5">
          &quot;{message}&quot;
        </p>

        <div className="flex items-center">
          {authorAvatarURL && (
            <div className="w-10 h-10 bg-orange-500 rounded-full mr-3">
              <img
                src={authorAvatarURL}
                alt={authorName}
                className="rounded-full w-full"
              />
            </div>
          )}

          <div>
            <h4 className="font-medium text-md  text-gray-700 dark:text-white">
              {authorName}
            </h4>
            <p className="text-gray-400 font-medium text-sm">
              {authorRole}
              {company && ` @ ${company}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export type KindMessageProps = Props
export default React.memo(KindMessage)
