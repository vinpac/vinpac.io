import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { Dialog } from '@reach/dialog'
import {
  QuickOpenContext,
  QuickOpen_OpenConfig,
  QuickOpenContextType,
} from 'lib/quickOpen/context'
import QuickOpen from 'components/QuickOpen'
import { BuildSuggestionsListFn, Suggestion } from 'lib/quickOpen/types'
import { useTheme } from 'lib/theme'

export interface QuickOpenProviderProps {
  buildSuggestionsList: BuildSuggestionsListFn
}

const QuickOpenProvider: React.FC<QuickOpenProviderProps> = ({
  children,
  buildSuggestionsList,
}) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [defaultText, setDefaultText] = useState('')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.keyCode === 80 && event.metaKey) {
        event.preventDefault()
        setShowDialog(true)
      }
    }

    window.document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const open = useCallback(
    (openConfig: QuickOpen_OpenConfig) => {
      setShowDialog(true)
      setDefaultText(openConfig.text)
    },
    [setShowDialog],
  )
  const close = useCallback(() => {
    setShowDialog(false)
  }, [setShowDialog])

  const ctx = useMemo<QuickOpenContextType>(() => {
    return { open, close }
  }, [open, close])

  const theme = useTheme()
  const handleSelectItem = useCallback(
    (suggestion: Suggestion) => {
      if (suggestion.id === 'theme') {
        if (theme.name === 'dark') {
          theme.setTheme('light')
        } else {
          theme.setTheme('dark')
        }
      }
      close()
    },
    [close, theme],
  )

  return (
    <QuickOpenContext.Provider value={ctx}>
      {children}
      {showDialog && (
        <Dialog
          isOpen
          onDismiss={close}
          className="max-w-xl bg-accent search-dialog"
          aria-labelledby="Quick Open"
        >
          <QuickOpen
            defaultText={defaultText}
            onSelectItem={handleSelectItem}
            buildSuggestionsList={buildSuggestionsList}
          />
        </Dialog>
      )}
      <style jsx global>{`
        [data-reach-dialog-content].search-dialog {
          margin-top: 1rem;
        }
      `}</style>
    </QuickOpenContext.Provider>
  )
}

QuickOpenProvider.displayName = 'QuickOpenProvider'

export { QuickOpenProvider }
export default QuickOpenProvider
