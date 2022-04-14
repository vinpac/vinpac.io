import React, { useMemo, useCallback, useState, useRef } from 'react'
import { Dialog } from '@reach/dialog'
import {
  CommandPaletteContext,
  CommandPaletteOpenConfig,
  CommandPaletteContextType,
} from '@components/commandPalette/context'
import { Suggestion } from '@components/commandPalette'

import Router from 'next/router'
import dynamic from 'next/dynamic'
import { useHotkeys } from 'react-hotkeys-hook'
import { buildSuggestionsList } from '@components/commandPalette/suggestions'
import { useTheme } from '@hooks'

const CommandPaletteDynamic = dynamic(
  () => import('@components/commandPalette/card'),
)

export const CommandPaletteProvider: React.FC = ({ children }) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [defaultText, setDefaultText] = useState('')
  const initialRoute = useRef<{ pathname: string; asPath: string } | null>(null)

  // Enable hot keys to open CommandPalette
  useHotkeys('ctrl+k, command+k, ctrl+p', () => open({ text: '' }), [])

  const open = useCallback((openConfig: CommandPaletteOpenConfig) => {
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

  const ctx = useMemo<CommandPaletteContextType>(() => {
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
    <CommandPaletteContext.Provider value={ctx}>
      {children}
      {showDialog && (
        <Dialog
          isOpen
          onDismiss={close}
          className="max-w-xl search-dialog"
          aria-labelledby="Quick Open"
        >
          <CommandPaletteDynamic
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
    </CommandPaletteContext.Provider>
  )
}

CommandPaletteProvider.displayName = 'CommandPaletteProvider'
