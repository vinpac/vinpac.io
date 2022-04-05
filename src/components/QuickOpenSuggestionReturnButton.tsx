import React from 'react'
import cx from 'classnames'
import { FiCornerDownLeft } from 'react-icons/fi'

export interface QuickOpenSuggestionReturnButtonProps {
  className?: string
}

const QuickOpenSuggestionReturnButton: React.FC<
  QuickOpenSuggestionReturnButtonProps
> = ({ className }) => {
  return (
    <span
      className={cx(
        '-mr-12 w-8 h-8 rounded-lg border-2 block float-right my-1 text-center leading-7 border-gray-700 text-gray-800 dark:border-white dark:text-white',
        className,
      )}
    >
      <FiCornerDownLeft size={18} className="inline-block" />
    </span>
  )
}

QuickOpenSuggestionReturnButton.displayName = 'QuickOpenSuggestionReturnButton'

export { QuickOpenSuggestionReturnButton }
export default QuickOpenSuggestionReturnButton
