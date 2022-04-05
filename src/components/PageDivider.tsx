import React from 'react'
import { ColorName } from '@lib/theme'

export interface PageDividerProps {
  color: ColorName
}

const PageDivider: React.FC<PageDividerProps> = ({ color }) => {
  return (
    <>
      <div className={`h-1 bg-${color}-500`} />
      <div className={`h-2 bg-${color}-500 opacity-25`} />
    </>
  )
}

PageDivider.displayName = 'PageDivider'

export { PageDivider }
export default PageDivider
