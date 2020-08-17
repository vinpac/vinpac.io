import React, { useCallback } from 'react'
import { useQuickOpen } from 'lib/quickOpen/hooks'

export interface SearchLinkProps {
  readonly query: string
  readonly passHref?: boolean
}

const SearchLink: React.FC<SearchLinkProps> = ({
  query,
  passHref,
  children,
}) => {
  const quickOpen = useQuickOpen()
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      quickOpen.open({ text: query })
    },
    [query, quickOpen],
  )
  const props: { onClick: typeof handleClick; href?: string } = {
    onClick: handleClick,
  }

  if (passHref) {
    props.href = `?search=${query}`
  }

  const child = React.Children.only(children)

  if (!child) {
    throw new Error('Search link needs one child to pass events')
  }

  return React.cloneElement(child as React.ReactElement, props)
}

SearchLink.displayName = 'SearchLink'

export { SearchLink }
export default SearchLink
