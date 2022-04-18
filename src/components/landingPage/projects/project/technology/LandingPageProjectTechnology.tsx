import React from 'react'
import cx from 'classnames'
import Tooltip from '@reach/tooltip'
import { FaFigma, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiGraphql,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

interface Props {
  label: LandingPageProjectTechName | string
  className?: string
}

const techToIcon = {
  Figma: FaFigma,
  Typescript: SiTypescript,
  'Next.js': SiNextdotjs,
  GraphQL: SiGraphql,
  TailwindCSS: SiTailwindcss,
  React: FaReact,
  'Node.js': FaNodeJs,
  Python: SiPython,
} as const

export type LandingPageProjectTechName = keyof typeof techToIcon

export const LandingPageProjectTechnology: React.FC<Props> = ({
  className,
  label,
  children,
}) => {
  const Icon = label && (techToIcon as any)[label]

  return (
    <Tooltip label={label}>
      <span
        className={cx(
          'w-8 h-8 relative flex items-center justify-center rounded-lg text-gray-900 dark:text-white',
          className,
        )}
      >
        {Icon && <Icon className="absolute inset-0 w-6 h-6 m-auto" />}
        {children}
      </span>
    </Tooltip>
  )
}

export type LandingPageProjectTechnologyProps = Props
