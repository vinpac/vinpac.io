import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { Dialog } from '@reach/dialog'
import {
  QuickOpenContext,
  QuickOpen_OpenConfig,
  QuickOpenContextType,
} from 'lib/quickOpen/context'
import QuickOpen from 'components/QuickOpen'
import { BuildSuggestionsListFn } from 'lib/quickOpen/types'

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
  }, [open])

  return (
    <QuickOpenContext.Provider value={ctx}>
      {children}
      {showDialog && (
        <Dialog
          isOpen
          onDismiss={close}
          className="max-w-xl bg-white search-dialog"
          aria-labelledby="Quick Open"
        >
          <QuickOpen
            defaultText={defaultText}
            onSelectItem={close}
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
