import React from 'react'
import cx from 'classnames'

import { FiFolder } from 'react-icons/fi'
import { CommandPaletteLink } from '@components/commandPalette'

export interface FilterPostsByFolderButtonProps {
  folder: string
  className?: string
}

const FilterPostsByFolderButton: React.FC<FilterPostsByFolderButtonProps> = ({
  folder,
  className,
}) => {
  return (
    <CommandPaletteLink query={`${folder}/`} passHref>
      <a
        className={cx(
          className,
          `px-2 py-1 border-2 border-theme-400 bg-theme hover:border-primary-500 hover:underline font-medium rounded-lg mr-2`,
        )}
        title={`Filtrar pela por ${folder}`}
      >
        <FiFolder size={14} className="inline-block mr-2 -mt-1 align-middle" />
        {folder}
      </a>
    </CommandPaletteLink>
  )
}

FilterPostsByFolderButton.displayName = 'FilterPostsByFolderButton'

export { FilterPostsByFolderButton }
export default FilterPostsByFolderButton
