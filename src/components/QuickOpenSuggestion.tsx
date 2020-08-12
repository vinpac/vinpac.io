import React, { useCallback } from 'react'
import cx from 'classnames'
import { Suggestion } from 'lib/quickOpen/types'
import Link from 'next/link'
import reactStringReplace from 'react-string-replace'
import { MdChevronRight, MdKeyboardReturn } from 'react-icons/md'
import ShadowColor from 'components/ShadowColor'

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
  const hrefParts = suggestion.href.split('/').filter(Boolean)
  const highlightText = useCallback(
    (text: string) => {
      if (!highlightRegex) {
        return text
      }

      return reactStringReplace(
        text,
        highlightRegex,
        (match: string, i: number) => (
          <span key={`${match}${i}`} className="bg-primary-200">
            {match}
          </span>
        ),
      )
    },
    [highlightRegex],
  )

  const anchor = (
    <button
      type="button"
      className={cx(
        'block px-4 py-2 leading-tight hover:bg-primary-100 text-left w-full',
        selected && 'bg-primary-100 pr-16',
        className,
      )}
      onClick={() => onSelect(suggestion)}
    >
      <div className="pl-12">
        {selected && (
          <span className="-mr-12 w-8 h-8 rounded-lg border-2 border-primary-500 block float-right my-1 text-center leading-7 text-primary-500">
            <MdKeyboardReturn size={18} className="inline-block" />
          </span>
        )}
        {suggestion.icon.type === 'component' && (
          <div className="w-8 h-8 float-left -ml-12 flex items-center justify-center my-1">
            <suggestion.icon.component size={28} className="text-gray-800" />
          </div>
        )}
        {suggestion.icon.type === 'color' && (
          <ShadowColor
            color={suggestion.icon.color}
            className="w-8 h-8 float-left -ml-12 my-1"
            distance="1"
          >
            <div
              className={`w-full h-full rounded-full bg-${suggestion.icon.color}-100 border-2 border-${suggestion.icon.color}-500 relative`}
            />
          </ShadowColor>
        )}
        <div className="flex justify-center flex-col leading-5 h-10">
          <span className="block font-medium text-base text-gray-900 truncate">
            {highlightText(suggestion.title)}
            <span className="text-sm text-primary-500 truncate ml-2">
              {hrefParts.map((part, i) => (
                <span key={`${suggestion.href}${i}`}>
                  {part}
                  {i !== hrefParts.length - 1 && (
                    <MdChevronRight
                      size={12}
                      className="inline-block text-gray-600"
                    />
                  )}
                </span>
              ))}
            </span>
          </span>
          {suggestion.description && suggestion.showDescription !== false && (
            <p className="text-gray-600 truncate text-xs">
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
