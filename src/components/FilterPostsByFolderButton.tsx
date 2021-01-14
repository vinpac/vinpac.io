import React from 'react'
import cx from 'classnames'
import SearchLink from '@components/SearchLink'
import { FiFolder } from 'react-icons/fi'

export interface FilterPostsByFolderButtonProps {
  readonly folder: string
  readonly className?: string
}

const FilterPostsByFolderButton: React.FC<FilterPostsByFolderButtonProps> = ({
  folder,
  className,
}) => {
  return (
    <SearchLink query={`${folder}/`} passHref>
      <a
        className={cx(
          className,
          `px-2 py-1 border-2 border-theme-400 bg-theme hover:border-primary-500 hover:underline font-medium rounded-lg mr-2`,
        )}
        title={`Filtrar pela por ${folder}`}
      >
        <FiFolder size={14} className="inline-block mr-2 align-middle -mt-1" />
        {folder}
      </a>
    </SearchLink>
  )
}

FilterPostsByFolderButton.displayName = 'FilterPostsByFolderButton'

export { FilterPostsByFolderButton }
export default FilterPostsByFolderButton
