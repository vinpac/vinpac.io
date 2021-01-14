import React from 'react'
import IconFigma from '@assets/svg/Arrow/Figma.svg'
import IconTypescript from '@assets/svg/Arrow/Vector.svg'
import IconNextJS from '@assets/svg/Arrow/Vector-1.svg'
import IconGraphQL from '@assets/svg/Arrow/Vector-2.svg'
import IconTailwindCSS from '@assets/svg/Arrow/Vector-3.svg'
import IconReact from '@assets/svg/Arrow/Vector-4.svg'
import cx from 'classnames'
import Tooltip from '@reach/tooltip'
import { FaNodeJs, FaPython } from 'react-icons/fa'

interface Props {
  label: LPProjectTechName | string
  className?: string
}

const techToIcon = {
  Figma: IconFigma,
  Typescript: IconTypescript,
  'Next.js': IconNextJS,
  GraphQL: IconGraphQL,
  TailwindCSS: IconTailwindCSS,
  React: IconReact,
  'Node.js': FaNodeJs,
  Python: FaPython,
} as const

export type LPProjectTechName = keyof typeof techToIcon

const LPProjectTechnology: React.FC<Props> = ({
  className,
  label,
  children,
}) => {
  const Icon = label && (techToIcon as any)[label]

  return (
    <Tooltip label={label}>
      <span
        className={cx(
          'w-8 h-8 p-1 relative block bg-gradient-to-b from-gray-400 to-gray-700  rounded-lg text-white',
          className,
        )}
      >
        {Icon && <Icon className="w-5 h-5 inset-0 absolute m-auto" />}
        {children}
      </span>
    </Tooltip>
  )
}

export type LPProjectTechnologyProps = Props
export default LPProjectTechnology
