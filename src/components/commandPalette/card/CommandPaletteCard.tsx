import React, { useState, useCallback, useEffect, useMemo } from 'react'
import cx from 'classnames'
import { FiSearch } from 'react-icons/fi'
import { useHotkeys } from 'react-hotkeys-hook'
import { buildSearchRegex } from '@components/commandPalette/suggestions'
import { CommandPaletteSuggestion } from '@components/commandPalette/suggestion'
import Router from 'next/router'
import {
  BuildSuggestionsListFn,
  Suggestion,
  LinkSuggestion,
} from '@components/commandPalette'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import { localizePathname } from '@lib/intl'

const messages = defineMessages({
  placeholder: {
    id: 'FWkoiv',
    defaultMessage: 'Navegue / Busque / Se divirta',
  },
})

export interface CommandPaletteCardProps {
  className?: string
  defaultText?: string
  onSelectItem?: (suggestion: Suggestion) => void
  onResultsChange?: (input: string, suggestion: Suggestion[]) => void
  onTextChange?: (text: string) => void
  buildSuggestionsList: BuildSuggestionsListFn
}

const CommandPaletteCard: React.FC<CommandPaletteCardProps> = ({
  className,
  onSelectItem,
  defaultText,
  onTextChange,
  buildSuggestionsList,
  onResultsChange,
}) => {
  const intl = useIntl()
  const [text, setText] = useState(defaultText || '')
  const [selectionIndex, setSelectionIndex] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const highlightRegex = useMemo<RegExp | undefined>(() => {
    // Avoid empty highlights
    return text.trim().length > 0 ? buildSearchRegex(text) : undefined
  }, [text])

  // Moves selection index
  const moveSelection = useCallback(
    (direction: 'up' | 'down'): void => {
      const diff = direction === 'up' ? -1 : 1
      setSelectionIndex((currentIndex) =>
        Math.max(0, Math.min(currentIndex + diff, suggestions.length - 1)),
      )
    },
    [suggestions, setSelectionIndex],
  )
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const nextText = event.target.value
      setText(nextText)

      if (onTextChange) {
        onTextChange(nextText)
      }
    },
    [onTextChange],
  )

  // Takes a suggestion and fires its event
  const handleSuggestionSelect = useCallback(
    (suggestion: Suggestion, mimicEvent?: boolean) => {
      if (mimicEvent) {
        const { nextHref, href } = suggestion as Partial<LinkSuggestion>
        if (nextHref) {
          Router.push(
            nextHref,
            href,
            suggestion.localize ? { locale: intl.locale } : undefined,
          )
        } else if (href) {
          window.setTimeout(() => {
            document.location.href = suggestion.localize
              ? localizePathname(href, intl.locale)
              : href
          }, 1)
        }
      }

      if (onSelectItem) {
        onSelectItem(suggestion)
      }
    },
    [onSelectItem, intl.locale],
  )

  // Handle ENTER, UP and DOWN when the text input is focused
  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault()
        moveSelection(event.keyCode === 38 ? 'up' : 'down')
      }

      if (event.keyCode === 13) {
        event.preventDefault()
        const suggestion = suggestions[selectionIndex]
        handleSuggestionSelect(suggestion, true)
      }
    },
    [selectionIndex, suggestions, handleSuggestionSelect, moveSelection],
  )

  // Listen for ENTER to activate selection
  // Listen for UP and DOWN arrow to move selection index
  useHotkeys(
    'enter, up, down',
    (event, handler) => {
      if (handler.key === 'enter' && selectionIndex !== -1) {
        event.preventDefault()
        const suggestion = suggestions[selectionIndex]
        handleSuggestionSelect(suggestion, true)
        return
      }

      moveSelection(handler.key as 'up' | 'down')
    },
    [selectionIndex, moveSelection, handleSuggestionSelect],
  )

  // Build new suggestions on text change
  useEffect(() => {
    let timedout = false

    // Put it in a timeout so we don't update before the user stops
    // typing
    const timeout = window.setTimeout(async () => {
      const suggestionsList = await buildSuggestionsList(text)

      if (timedout) {
        return
      }

      setSuggestions(suggestionsList)
      setSelectionIndex(0)
      setLoading(false)
    }, 130)

    return () => {
      timedout = true
      clearTimeout(timeout)
    }
  }, [text, setSuggestions, buildSuggestionsList, setSelectionIndex])
  useEffect(() => {
    if (onResultsChange) {
      onResultsChange(text, suggestions)
    }
  }, [text, suggestions, onResultsChange])

  return (
    <div
      className={cx(
        'bg-white dark:bg-gray-800 rounded-lg',
        !isLoading && 'pb-3',
        className,
      )}
    >
      <div className="relative">
        <input
          type="text"
          className="w-full pt-4 pb-3 pl-16 pr-4 text-xl bg-transparent rounded-t-lg outline-none"
          placeholder={intl.formatMessage(messages.placeholder)}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={text}
          autoFocus
        />
        <FiSearch
          size={28}
          className="absolute top-0 bottom-0 left-0 mt-4 ml-5 text-primary-600"
        />
      </div>
      {suggestions.map((suggestion, idx) => (
        <CommandPaletteSuggestion
          key={suggestion.id}
          suggestion={suggestion}
          highlightRegex={highlightRegex}
          selected={selectionIndex === idx}
          onSelect={handleSuggestionSelect}
        />
      ))}
      {!isLoading && suggestions.length === 0 && (
        <div className="py-6">
          <img
            src="/assets/nature-for-fun.svg"
            className="w-full h-24 mx-auto mb-3"
            loading="lazy"
          />
          <p className="font-medium text-center text-gray-700 dark:text-gray-300 fadeInUp-25 animated_faster">
            <FormattedMessage
              defaultMessage="Infelizmente nada foi encontrado"
              id="SWLuzB"
            />
          </p>
        </div>
      )}
      {isLoading && (
        <div className="py-8 bg-gray-100 rounded-b-lg dark:bg-gray-900"></div>
      )}
    </div>
  )
}

CommandPaletteCard.displayName = 'CommandPalette'

export { CommandPaletteCard }
export default React.memo(CommandPaletteCard)
