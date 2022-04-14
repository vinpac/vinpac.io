import {
  CommandPaletteContextType,
  CommandPaletteContext,
} from '@components/commandPalette'
import { useContext } from 'react'

export const useCommandPalette = (): CommandPaletteContextType => {
  const ctx = useContext(CommandPaletteContext)

  if (!ctx) {
    throw new Error(
      'Você deve adicionar o <CommandPaletteProvider> no _app.tsx',
    )
  }

  return ctx
}
