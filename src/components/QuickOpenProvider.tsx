import React, { useMemo, useCallback, useState, useRef } from 'react'
import { Dialog } from '@reach/dialog'
import {
  QuickOpenContext,
  QuickOpen_OpenConfig,
  QuickOpenContextType,
} from '@lib/quickOpen/context'
import { BuildSuggestionsListFn, Suggestion } from '@lib/quickOpen/types'
import { useTheme } from '@lib/theme'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { useHotkeys } from 'react-hotkeys-hook'

const QuickOpenDynamic = dynamic(() => import('components/QuickOpen'))

export interface QuickOpenProviderProps {
  buildSuggestionsList: BuildSuggestionsListFn
}

const QuickOpenProvider: React.FC<QuickOpenProviderProps> = ({
  children,
  buildSuggestionsList,
}) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [defaultText, setDefaultText] = useState('')
  const initialRoute = useRef<{ pathname: string; asPath: string } | null>(null)

  // Enable hot keys to open QuickOpen
  useHotkeys('ctrl+k, command+k, ctrl+p', () => open({ text: '' }), [])

  const open = useCallback((openConfig: QuickOpen_OpenConfig) => {
    setDefaultText(openConfig.text)
    initialRoute.current = {
      pathname: Router.pathname,
      asPath: Router.asPath,
    }
    setShowDialog(true)
    setDefaultText(openConfig.text)
  }, [])
  const close = useCallback(() => {
    setShowDialog(false)
    setDefaultText('')
  }, [])

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
        return
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
          className="max-w-xl search-dialog"
          aria-labelledby="Quick Open"
        >
          <QuickOpenDynamic
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
