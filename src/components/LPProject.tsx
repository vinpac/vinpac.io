import React from 'react'
import cx from 'classnames'
import LPProjectTechnology, { LPProjectTechName } from './LPProjectTechnology'
import LPProjectTeamMember, { TeamMember } from './LPProjectTeamMember'
import { FiExternalLink } from 'react-icons/fi'
import ButtonLink from './ButtonLink'
import { FormattedMessage } from 'react-intl'

interface Props {
  title: string
  description: string
  years?: string
  technologies: LPProjectTechName[]
  team?: TeamMember[]
  children?: React.ReactNode
  resources?: Array<{ icon?: React.FC<any>; url: string; label?: string }>
  divider?: null
  className?: string
}

const LPProject: React.FC<Props> = ({
  title,
  description,
  technologies,
  years,
  team,
  children,
  resources: actions,
  className,
  divider,
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
        'rounded-lg bg-white dark:bg-gray-900 border dark:border-gray-700 dark:shadow-none relative',
        className,
      )}
    >
      <div className="overflow-hidden rounded-t-lg">{children}</div>
      <div className="px-8 pb-20">
        {divider !== null && (
          <hr className="my-2 border-gray-200 dark:border-gray-700" />
        )}
        <div className="pt-4">
          <h1 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white leading-tight">
            {title}
            {years && (
              <span className="font-normal text-lg ml-3 text-green-500">
                <FormattedMessage
                  id="components/LPProject/years"
                  defaultMessage="{years} anos"
                  values={{ years }}
                />
              </span>
            )}
          </h1>
          <p className="text-lg text-gray-400 mb-4 flex-grow">{description}</p>
          {team && (
            <div className="text-gray-400 mb-4 -mt-2 md:hidden">
              {renderedTeam}
            </div>
          )}
          <div className="flex items-center absolute bottom-8 inset-x-8">
            <div className="space-x-2 flex items-center mr-4">
              {technologies.slice(0, 4).map((tech) => (
                <LPProjectTechnology key={tech} label={tech} />
              ))}
              {technologies.length > 4 && (
                <LPProjectTechnology label={technologies.slice(4).join(', ')}>
                  +{technologies.length - 4}
                </LPProjectTechnology>
              )}
            </div>
            {team && (
              <div className="hidden md:block border-l border-gray-300 dark:border-gray-700 pl-3 leading-loose text-gray-400">
                {renderedTeam}
              </div>
            )}

            {actions && (
              <div className="ml-auto space-x-3 flex">
                {actions.map((action) => {
                  const Icon = action.icon || FiExternalLink

                  return (
                    <ButtonLink
                      key={action.url}
                      href={action.url}
                      colorSchema="theme"
                      className="shadow flex items-center"
                      size="md"
                      target="__blank"
                      rel="nofollow"
                    >
                      <Icon
                        className="mr-2 text-gray-700 dark:text-white"
                        size={18}
                      />
                      {action.label || (
                        <FormattedMessage
                          id="components/LPProject/defaultAction"
                          defaultMessage="Visitar"
                        />
                      )}
                    </ButtonLink>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPProjectProps = Props
export default React.memo(LPProject)
