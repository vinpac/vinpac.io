import React from 'react'

export interface QuickOpen_OpenConfig {
  text: string
}

export interface QuickOpenContextType {
  open: (config: QuickOpen_OpenConfig) => void
  close: () => void
}

export const QuickOpenContext = React.createContext<QuickOpenContextType | null>(
  null,
)
