import React from 'react'

export interface CommandPaletteOpenConfig {
  text: string
}

export interface CommandPaletteContextType {
  open: (config: CommandPaletteOpenConfig) => void
  close: () => void
}

export const CommandPaletteContext =
  React.createContext<CommandPaletteContextType | null>(null)
