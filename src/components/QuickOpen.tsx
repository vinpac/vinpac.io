import React, { useState, useCallback, useEffect, useMemo } from 'react'
import cx from 'classnames'
import { MdSearch } from 'react-icons/md'
import { useHotkeys } from 'react-hotkeys-hook'
import { buildSearchRegex } from '@lib/quickOpen/suggestions'
import QuickOpenSuggestion from '@components/QuickOpenSuggestion'
import Router from 'next/router'
import {
  BuildSuggestionsListFn,
  Suggestion,
  LinkSuggestion,
} from '@lib/quickOpen/types'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  placeholder: {
    id: 'components/QuickOpen/placeholder',
    defaultMessage: 'Navegue / Busque / Se divirta',
  },
})

export interface QuickOpenProps {
  readonly className?: string
  readonly defaultText?: string
  readonly onSelectItem?: (suggestion: Suggestion) => void
  readonly onResultsChange?: (input: string, suggestion: Suggestion[]) => void
  readonly onTextChange?: (text: string) => void
  readonly buildSuggestionsList: BuildSuggestionsListFn
}

const QuickOpen: React.FC<QuickOpenProps> = ({
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
          Router.push(nextHref, href)
        } else if (href) {
          window.setTimeout(() => {
            document.location.href = href
          }, 1)
        }
      }

      if (onSelectItem) {
        onSelectItem(suggestion)
      }
    },
    [onSelectItem],
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
          className="w-full pl-16 pr-4 pt-4 pb-3 rounded-t-lg outline-none text-xl bg-transparent"
          placeholder={intl.formatMessage(messages.placeholder)}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={text}
        />
        <MdSearch
          size={28}
          className="absolute left-0 top-0 bottom-0 ml-5 mt-4 text-primary-600"
        />
      </div>
      {suggestions.map((suggestion, idx) => (
        <QuickOpenSuggestion
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
          <p className="text-gray-700 dark:text-gray-300 text-center font-medium fadeInUp-25 animated_faster">
            Infelizmente nada foi encontrado
          </p>
        </div>
      )}
      {isLoading && (
        <div className="py-8 bg-gray-100 dark:bg-gray-900 rounded-b-lg"></div>
      )}
    </div>
  )
}

QuickOpen.displayName = 'QuickOpen'

export { QuickOpen }
export default React.memo(QuickOpen)
