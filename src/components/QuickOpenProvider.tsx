import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react'
import { Dialog } from '@reach/dialog'
import {
  QuickOpenContext,
  QuickOpen_OpenConfig,
  QuickOpenContextType,
} from 'lib/quickOpen/context'
import { BuildSuggestionsListFn, Suggestion } from 'lib/quickOpen/types'
import { useTheme } from 'lib/theme'
import Router, { useRouter } from 'next/router'
import queryString from 'querystring'
import dynamic from 'next/dynamic'

const QuickOpenDynamic = dynamic(() => import('components/QuickOpen'))

const RE_ROUTE = /^\/q\?query=(.*)/

export interface QuickOpenProviderProps {
  buildSuggestionsList: BuildSuggestionsListFn
}

const QuickOpenProvider: React.FC<QuickOpenProviderProps> = ({
  children,
  buildSuggestionsList,
}) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [defaultText, setDefaultText] = useState('')
  const router = useRouter()
  const initialRoute = useRef<{ pathname: string; asPath: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.keyCode === 80 && event.metaKey) {
        event.preventDefault()
        setShowDialog(true)
        setDefaultText('')
      }
    }

    window.document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  useEffect(() => {
    const matches = RE_ROUTE.exec(router.asPath)
    if (matches || router.pathname === '/q' || router.asPath === '/q') {
      const routerQueryStr = router.query.query && String(router.query.query)
      const query = matches ? matches[1] : routerQueryStr || ''

      const text = String(unescape(query))
      if (text !== defaultText) {
        setDefaultText(text)
      }

      setShowDialog(true)
    } else if (showDialog) {
      setShowDialog(false)
    }
  }, [
    router.asPath,
    router.pathname,
    router.query?.query,
    defaultText,
    showDialog,
  ])

  const open = useCallback((openConfig: QuickOpen_OpenConfig) => {
    setDefaultText(openConfig.text)
    initialRoute.current = {
      pathname: Router.pathname,
      asPath: Router.asPath,
    }

    Router.push(
      `${Router.pathname}?${queryString.stringify(Router.query)}`,
      `/q?query=${escape(openConfig.text)}`,
      { shallow: true },
    )
  }, [])
  const replaceTimeoutRef = useRef<number | null>(null)
  const handleResultsChange = useCallback(
    (input: string) => {
      if (replaceTimeoutRef.current !== null) {
        clearTimeout(replaceTimeoutRef.current)
        replaceTimeoutRef.current = null
      }

      if (!showDialog) {
        return
      }

      replaceTimeoutRef.current = window.setTimeout(() => {
        Router.replace(
          `${Router.pathname}?${queryString.stringify(Router.query)}`,
          `/q?query=${escape(input)}`,
          { shallow: true },
        )
      }, 400)
    },
    [showDialog],
  )
  const close = useCallback(() => {
    if (replaceTimeoutRef.current !== null) {
      clearTimeout(replaceTimeoutRef.current)
      replaceTimeoutRef.current = null
    }

    if (initialRoute.current) {
      Router.push(initialRoute.current.pathname, initialRoute.current.asPath, {
        shallow: true,
      })
    } else {
      Router.push('/')
    }
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
          <QuickOpenDynamic
            defaultText={defaultText}
            onSelectItem={handleSelectItem}
            onResultsChange={handleResultsChange}
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
