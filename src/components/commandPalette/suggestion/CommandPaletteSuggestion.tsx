import React, { memo, useCallback } from 'react'
import cx from 'classnames'
import { Suggestion, LinkSuggestion } from '@components/commandPalette'
import Link from 'next/link'
import reactStringReplace from 'react-string-replace'
import ShadowColor from '@components/ShadowColor'
import { CommandPaletteReturnButton } from '@components/commandPalette/returnButton'
import { useRouter } from 'next/router'
import { localizePathname } from '@lib/intl'

export interface CommandPaletteSuggestionProps {
  suggestion: Suggestion
  highlightRegex?: RegExp
  className?: string
  selected?: boolean
  onSelect: (suggestion: Suggestion) => void
}

export const CommandPaletteSuggestion: React.FC<CommandPaletteSuggestionProps> =
  memo(({ suggestion, highlightRegex, selected, className, onSelect }) => {
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
          {selected && <CommandPaletteReturnButton />}
          {suggestion.icon.type === 'component' && (
            <div className="flex items-center justify-center float-left w-8 h-8 my-1 -ml-12">
              <suggestion.icon.component
                size={28}
                className="text-gray-800 dark:text-gray-200"
              />
            </div>
          )}
          {suggestion.icon.type === 'color' && (
            <ShadowColor
              color={suggestion.icon.color}
              className="float-left w-8 h-8 my-1 -ml-12"
              distance="1"
            >
              <div
                className={`w-full h-full rounded-full bg-accent-100 border-2 border-${suggestion.icon.color}-500 relative`}
              />
            </ShadowColor>
          )}
          <div className="flex flex-col justify-center h-10 leading-5">
            <span
              className={`block font-medium text-base text-gray-900 dark:text-white truncate`}
            >
              {typeof suggestion.title === 'string' ? (
                highlightText(suggestion.title)
              ) : (
                <suggestion.title context={{ highlightText }} />
              )}
              {href && (
                <span className="ml-2 text-sm truncate text-primary-600 dark:text-primary-400">
                  {href}
                </span>
              )}
            </span>
            {suggestion.description && suggestion.showDescription !== false && (
              <p className="text-xs text-gray-600 truncate dark:text-gray-400">
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
  })

CommandPaletteSuggestion.displayName = 'CommandPaletteSuggestion'
