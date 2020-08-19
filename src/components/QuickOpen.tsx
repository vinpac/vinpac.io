import React, { useState, useCallback, useEffect, useMemo } from 'react'
import cx from 'classnames'
import { MdSearch } from 'react-icons/md'
import { useHotkeys } from 'react-hotkeys-hook'
import { buildSearchRegex } from 'lib/quickOpen/suggestions'
import QuickOpenSuggestion from 'components/QuickOpenSuggestion'
import NatureForFunSVG from 'assets/svg/nature-for-fun.svg'
import Router from 'next/router'
import {
  BuildSuggestionsListFn,
  Suggestion,
  LinkSuggestion,
} from 'lib/quickOpen/types'

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
  const tip = 'Post [assunto]'
  const [text, setText] = useState(defaultText || '')
  const [selectionIndex, setSelectionIndex] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const highlightRegex = useMemo<RegExp>(() => {
    return buildSearchRegex(text)
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
    (suggestion: Suggestion) => {
      if (suggestion) {
        const { nextHref, href } = suggestion as Partial<LinkSuggestion>
        if (nextHref) {
          Router.push(nextHref, href)
        } else if (href) {
          window.open(href)
        }

        if (onSelectItem) {
          onSelectItem(suggestion)
        }
      }
    },
    [onSelectItem],
  )

  // Handle ENTER, UP and DOWN when the text input is focused
  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 38 || event.keyCode === 40) {
        moveSelection(event.keyCode === 38 ? 'up' : 'down')
      }

      if (event.keyCode === 13) {
        const suggestion = suggestions[selectionIndex]
        handleSuggestionSelect(suggestion)
      }
    },
    [selectionIndex, suggestions, handleSuggestionSelect, moveSelection],
  )

  // Listen for ENTER to activate selection
  // Listen for UP and DOWN arrow to move selection index
  useHotkeys(
    'enter, up, down',
    (_, handler) => {
      if (handler.key === 'enter') {
        const suggestion = suggestions[selectionIndex]
        handleSuggestionSelect(suggestion)
        return
      }

      moveSelection(handler.key as 'up' | 'down')
    },
    [selectionIndex, moveSelection, handleSuggestionSelect],
  )

  // Build new suggestions on text change
  useEffect(() => {
    let timedout = false
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
    <div className={cx(className, !isLoading && 'pb-3')}>
      <div className="relative">
        <input
          type="text"
          className="w-full pl-16 pr-4 pt-4 pb-3 rounded-lg outline-none text-xl bg-accent"
          placeholder={`Tente digitar "${tip}"`}
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
        <div className="py-6 animated">
          <NatureForFunSVG className="w-full h-24 mx-auto mb-3" />
          <p className="text-theme-700 text-center font-medium fadeInUp-25 animated_faster">
            Infelizmente nada foi encontrado
          </p>
        </div>
      )}
      {isLoading && <div className="py-8 bg-theme-100 rounded-b-lg"></div>}
    </div>
  )
}

QuickOpen.displayName = 'QuickOpen'

export { QuickOpen }
export default React.memo(QuickOpen)
