import React from 'react'
import cx from 'classnames'
import { useTailwindCx, ColorName } from 'lib/theme'
import { MdSearch } from 'react-icons/md'
import { useQuickOpen } from 'lib/quickOpen/hooks'

export interface FakeSearchBarProps {
  readonly className?: string
  readonly color: ColorName
}

const FakeSearchBar: React.FC<FakeSearchBarProps> = ({ className, color }) => {
  const quickOpen = useQuickOpen()
  const vx = useTailwindCx(color)
  return (
    <button
      className={cx(
        className,
        `absolute border-b-2 w-64 h-12 text-left text-sm pr-4 pl-8 left-0 right-0 top-0 bottom-0 m-auto`,
        vx('border', 400),
        vx('hover:border', 600),
        vx('text', 900),
      )}
      onClick={() => quickOpen.open({ text: '' })}
    >
      Busca
      <MdSearch
        size={16}
        className={`${vx(
          'text',
          600,
        )} absolute left-0 top-0 bottom-0 ml-2 my-auto`}
      />
      <span
        className={`${vx(
          'bg',
          100,
          200,
        )} absolute right-0 px-1 rounded text-xs`}
      >
        CMD + P
      </span>
    </button>
  )
}

FakeSearchBar.displayName = 'FakeSearchBar'

export { FakeSearchBar }
export default React.memo(FakeSearchBar)
