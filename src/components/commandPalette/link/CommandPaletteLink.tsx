import { useCommandPalette } from '@hooks'
import React, { useCallback } from 'react'

export interface CommandPaletteLinkProps {
  query: string
  passHref?: boolean
}

export const CommandPaletteLink: React.FC<CommandPaletteLinkProps> = ({
  query,
  passHref,
  children,
}) => {
  const commandPalette = useCommandPalette()
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      commandPalette.open({ text: query })
    },
    [query, commandPalette],
  )
  const props: { onClick: typeof handleClick; href?: string } = {
    onClick: handleClick,
  }

  if (passHref) {
    props.href = `/q?query=${escape(query)}`
  }

  const child = React.Children.only(children)

  if (!child) {
    throw new Error('Search link needs one child to pass events')
  }

  return React.cloneElement(child as React.ReactElement, props)
}

CommandPaletteLink.displayName = 'CommandPaletteLink'
