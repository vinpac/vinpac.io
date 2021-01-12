import React from 'react'
import IconFigma from '@assets/svg/Arrow/Figma.svg'
import IconTypescript from '@assets/svg/Arrow/Vector.svg'
import IconNextJS from '@assets/svg/Arrow/Vector-1.svg'
import IconGraphQL from '@assets/svg/Arrow/Vector-2.svg'
import IconTailwindCSS from '@assets/svg/Arrow/Vector-3.svg'
import IconReact from '@assets/svg/Arrow/Vector-4.svg'
import cx from 'classnames'
import Tooltip from '@reach/tooltip'

interface Props {
  name: LPProjectTechName
  className?: string
}

const techToIcon = {
  Figma: IconFigma,
  Typescript: IconTypescript,
  'Next.js': IconNextJS,
  GraphQL: IconGraphQL,
  TailwindCSS: IconTailwindCSS,
  React: IconReact,
} as const

export type LPProjectTechName = keyof typeof techToIcon

const LPProjectTechnology: React.FC<Props> = ({ className, name }) => {
  const Icon = techToIcon[name]
  return (
    <Tooltip label={name}>
      <span
        className={cx(
          'w-8 h-8 relative block bg-gradient-to-b from-gray-400 to-gray-700  rounded-lg',
          className,
        )}
      >
        {Icon && <Icon className="w-5 h-5 inset-0 absolute m-auto" />}
      </span>
    </Tooltip>
  )
}

export type LPProjectTechnologyProps = Props
export default LPProjectTechnology
