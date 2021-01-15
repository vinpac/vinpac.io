import React, { useCallback } from 'react'
import cx from 'classnames'
import { Suggestion, LinkSuggestion } from '@lib/quickOpen/types'
import Link from 'next/link'
import reactStringReplace from 'react-string-replace'
import ShadowColor from '@components/ShadowColor'
import QuickOpenSuggestionReturnButton from '@components/QuickOpenSuggestionReturnButton'
import { useRouter } from 'next/router'
import { localizePathname } from '@lib/intl'

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
  const { locale } = useRouter()
  const { href, nextHref } = suggestion as Partial<LinkSuggestion>
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
            className={`bg-green-200 dark:bg-green-700 dark:text-white`}
          >
            {match}
          </span>
        ),
      )
    },
    [highlightRegex],
  )

  const Component = href || nextHref ? 'a' : 'button'
  const localizedHref =
    href && suggestion.localize ? localizePathname(href, locale) : href

  const anchor = (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      href={Component === 'a' ? localizedHref : undefined}
      className={cx(
        'block px-4 py-2 leading-tight text-left w-full group',
        selected && 'bg-gray-300 dark:bg-gray-600 pr-16',
        !selected &&
          'bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800',
        className,
      )}
      onClick={() => onSelect(suggestion)}
    >
      <div className="pl-12">
        {selected && <QuickOpenSuggestionReturnButton />}
        {suggestion.icon.type === 'component' && (
          <div className="w-8 h-8 float-left -ml-12 flex items-center justify-center my-1">
            <suggestion.icon.component
              size={28}
              className="text-gray-800 dark:text-gray-200"
            />
          </div>
        )}
        {suggestion.icon.type === 'color' && (
          <ShadowColor
            color={suggestion.icon.color}
            className="w-8 h-8 float-left -ml-12 my-1"
            distance="1"
          >
            <div
              className={`w-full h-full rounded-full bg-accent-100 border-2 border-${suggestion.icon.color}-500 relative`}
            />
          </ShadowColor>
        )}
        <div className="flex justify-center flex-col leading-5 h-10">
          <span
            className={`block font-medium text-base text-gray-900 dark:text-white truncate`}
          >
            {typeof suggestion.title === 'string' ? (
              highlightText(suggestion.title)
            ) : (
              <suggestion.title context={{ highlightText }} />
            )}
            {href && (
              <span className="text-sm truncate ml-2 text-primary-600 dark:text-primary-400">
                {href}
              </span>
            )}
          </span>
          {suggestion.description && suggestion.showDescription !== false && (
            <p className="text-gray-600 dark:text-gray-400 truncate text-xs">
              {highlightText(suggestion.description)}
            </p>
          )}
        </div>
      </div>
    </Component>
  )

  if (nextHref) {
    return (
      <Link href={nextHref} as={href}>
        {anchor}
      </Link>
    )
  }

  return anchor
}

QuickOpenSuggestion.displayName = 'QuickOpenSuggestion'

export { QuickOpenSuggestion }
export default React.memo(QuickOpenSuggestion)
