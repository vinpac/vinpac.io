import React, { useCallback } from 'react'
import cx from 'classnames'
import { Suggestion } from 'lib/quickOpen/types'
import Link from 'next/link'
import reactStringReplace from 'react-string-replace'
import ShadowColor from 'components/ShadowColor'
import { useThemeName } from 'lib/theme'
import QuickOpenSuggestionReturnButton from 'components/QuickOpenSuggestionReturnButton'

export interface QuickOpenSuggestionProps {
  readonly suggestion: Suggestion
  readonly highlightRegex?: RegExp
  readonly className?: string
  readonly selected?: boolean
  readonly onSelect: (suggestion: Suggestion) => void
}

const QuickOpenSuggestion: React.FC<QuickOpenSuggestionProps> = ({
  suggestion,
  highlightRegex,
  selected,
  className,
  onSelect,
}) => {
  const theme = useThemeName()
  const highlightText = useCallback(
    (text: string) => {
      if (!highlightRegex) {
        return text
      }

      return reactStringReplace(
        text,
        highlightRegex,
        (match: string, i: number) => (
          <span
            key={`${match}${i}`}
            className={
              selected
                ? 'bg-theme-400'
                : 'bg-theme-300 group-hover:bg-theme-400'
            }
          >
            {match}
          </span>
        ),
      )
    },
    [highlightRegex, selected],
  )

  const anchor = (
    <button
      type="button"
      className={cx(
        'block px-4 py-2 leading-tight hover:bg-theme-300 text-left w-full group',
        selected && 'bg-theme-300 pr-16',
        className,
      )}
      onClick={() => onSelect(suggestion)}
    >
      <div className="pl-12">
        {selected && <QuickOpenSuggestionReturnButton />}
        {suggestion.icon.type === 'component' && (
          <div className="w-8 h-8 float-left -ml-12 flex items-center justify-center my-1">
            <suggestion.icon.component size={28} className="text-theme-800" />
          </div>
        )}
        {suggestion.icon.type === 'color' && (
          <ShadowColor
            color={suggestion.icon.color}
            className="w-8 h-8 float-left -ml-12 my-1"
            distance="1"
          >
            <div
              className={`w-full h-full rounded-full bg-theme-standout-100 border-2 border-${suggestion.icon.color}-500 relative`}
            />
          </ShadowColor>
        )}
        <div className="flex justify-center flex-col leading-5 h-10">
          <span
            className={`block font-medium text-base text-theme-900 truncate`}
          >
            {highlightText(suggestion.title)}
            <span
              className={cx('text-sm truncate ml-2', {
                ['text-primary-500']: theme === 'light',
                ['text-primary-400']: theme === 'dark',
              })}
            >
              {suggestion.href}
            </span>
          </span>
          {suggestion.description && suggestion.showDescription !== false && (
            <p className="text-theme-600 truncate text-xs">
              {highlightText(suggestion.description)}
            </p>
          )}
        </div>
      </div>
    </button>
  )

  if (suggestion.nextHref) {
    return (
      <Link href={suggestion.nextHref} as={suggestion.href}>
        {anchor}
      </Link>
    )
  }

  return anchor
}

QuickOpenSuggestion.displayName = 'QuickOpenSuggestion'

export { QuickOpenSuggestion }
export default React.memo(QuickOpenSuggestion)
