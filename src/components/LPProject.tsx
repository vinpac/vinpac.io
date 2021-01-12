import React from 'react'
import cx from 'classnames'
import LPProjectTechnology, { LPProjectTechName } from './LPProjectTechnology'
import LPProjectTeamMember, { TeamMember } from './LPProjectTeamMember'
import Button from './Button'
import { FiExternalLink } from 'react-icons/fi'

interface Props {
  title: string
  description: string
  technologies: LPProjectTechName[]
  team?: TeamMember[]
  children?: React.ReactNode
  className?: string
}

const LPProject: React.FC<Props> = ({
  title,
  description,
  technologies,
  team,
  children,
  className,
}) => {
  const renderedTeam = team && (
    <>
      <span className="font-medium">Time: </span>
      {team.map((member, i) => (
        <React.Fragment key={member.profileURL}>
          <LPProjectTeamMember
            name={member.name}
            profileURL={member.profileURL}
          />
          {i === team.length - 2 && ' e '}
          {i < team.length - 2 && ', '}
        </React.Fragment>
      ))}
    </>
  )

  return (
    <div
      className={cx(
        'rounded-lg bg-white dark:bg-gray-900 border dark:border-gray-700 dark:shadow-none',
        className,
      )}
    >
      <div className="overflow-hidden rounded-t-lg">{children}</div>
      <div className="px-8 pb-8">
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-400 mb-4">{description}</p>
          {team && (
            <div className="text-gray-400 mb-4 -mt-2 md:hidden">
              {renderedTeam}
            </div>
          )}
          <div className="flex items-center">
            <div className="space-x-2 flex items-center mr-4">
              {technologies.map((tech) => (
                <LPProjectTechnology key={tech} name={tech} />
              ))}
            </div>
            {team && (
              <div className="hidden md:block border-l border-gray-300 dark:border-gray-700 pl-3 leading-loose text-gray-400">
                {renderedTeam}
              </div>
            )}

            <div className="ml-auto">
              <Button
                colorSchema="theme"
                className="shadow flex items-center"
                size="md"
              >
                <FiExternalLink
                  className="mr-2 text-gray-700 dark:text-white"
                  size={18}
                />
                Visitar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPProjectProps = Props
export default React.memo(LPProject)
