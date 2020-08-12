import React from 'react'
import cx from 'classnames'
import { useTailwindCx, AppColorName } from 'lib/css'
import ShadowColor from 'components/ShadowColor'

export interface ProjectCompactDetailsButtonProps {
  readonly className?: string
  readonly href: string
  readonly name: string
  readonly description: string
  readonly logoSrc: string
  readonly active?: boolean
  readonly color?: AppColorName
}

const ProjectCompactDetailsButton: React.FC<ProjectCompactDetailsButtonProps> = ({
  className,
  name,
  description,
  logoSrc,
  color = 'gray',
}) => {
  const tcx = useTailwindCx(color)
  return (
    <ShadowColor color={color} distance="1" className={className}>
      <button
        className={cx(
          'rounded-xl w-full text-left p-4 bg-white relative z-10 border-2',
          tcx('border', 500),
        )}
      >
        <div className="flex mb-2">
          <img
            src={logoSrc}
            className="w-12 h-12 rounded-full bg-gray-500 block mr-3"
          />
          <div className="leading-tight flex flex-col justify-center">
            <h4 className="text-xl font-medium -mt-1 truncate text-gray-900">
              {name}
            </h4>
            <p className="text-sm text-gray-600 mb-0">4 anos . CTO</p>
          </div>
        </div>
        <p className="text-base text-gray-700 mb-2">{description}</p>
      </button>
    </ShadowColor>
  )
}

ProjectCompactDetailsButton.displayName = 'ProjectCompactDetailsButton'

export { ProjectCompactDetailsButton }
export default ProjectCompactDetailsButton
