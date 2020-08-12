import React from 'react'
import cx from 'classnames'
import { useQuickOpen } from 'lib/quickOpen/hooks'

export interface FilterPostsByTagButtonProps {
  readonly tag: string
  readonly className?: string
}

const FilterPostsByTagButton: React.FC<FilterPostsByTagButtonProps> = ({
  tag,
  className,
}) => {
  const quickOpen = useQuickOpen()
  const handleClick = (): void => {
    quickOpen.open({ text: `#${tag}` })
  }
  return (
    <button
      className={cx(
        className,
        `px-2 py-1 border-2 bg-white hover:border-primary-500 hover:underline font-medium rounded-lg mr-2`,
      )}
      title={`Filtrar pela tag #${tag}`}
      onClick={handleClick}
    >
      <span className="text-gray-600">#</span>
      {tag}
    </button>
  )
}

FilterPostsByTagButton.displayName = 'FilterPostsByTagButton'

export { FilterPostsByTagButton }
export default FilterPostsByTagButton
