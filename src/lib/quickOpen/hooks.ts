import { QuickOpenContextType, QuickOpenContext } from 'lib/quickOpen/context'
import { useContext } from 'react'

export const useQuickOpen = (): QuickOpenContextType => {
  const ctx = useContext(QuickOpenContext)

  if (!ctx) {
    throw new Error('Você deve adicionar o <QuickOpenProvider> no _app.tsx')
  }

  return ctx
}
