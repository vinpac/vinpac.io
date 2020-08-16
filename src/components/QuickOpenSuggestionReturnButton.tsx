import React from 'react'
import cx from 'classnames'
import { MdKeyboardReturn } from 'react-icons/md'
import { useThemeName } from 'lib/theme'

export interface QuickOpenSuggestionReturnButtonProps {
  readonly className?: string
}

const QuickOpenSuggestionReturnButton: React.FC<QuickOpenSuggestionReturnButtonProps> = ({
  className,
}) => {
  const theme = useThemeName()
  return (
    <span
      className={cx(
        '-mr-12 w-8 h-8 rounded-lg border-2 block float-right my-1 text-center leading-7',
        {
          'border-primary-500 text-primary-500': theme === 'light',
          'border-white text-white': theme === 'dark',
        },
        className,
      )}
    >
      <MdKeyboardReturn size={18} className="inline-block" />
    </span>
  )
}

QuickOpenSuggestionReturnButton.displayName = 'QuickOpenSuggestionReturnButton'

export { QuickOpenSuggestionReturnButton }
export default QuickOpenSuggestionReturnButton
