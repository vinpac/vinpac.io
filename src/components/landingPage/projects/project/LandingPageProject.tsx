import React from 'react'
import cx from 'classnames'
import {
  LandingPageProjectTechnology,
  LandingPageProjectTechName,
} from './technology'
import { LandingPageProjectTeamMember, TeamMember } from './teamMember'
import { FiExternalLink } from 'react-icons/fi'
import { FormattedMessage } from 'react-intl'
import { Button } from '@components/input'

interface Props {
  title: string
  description: string
  years?: string
  technologies: LandingPageProjectTechName[]
  team?: TeamMember[]
  children?: React.ReactNode
  resources?: Array<{ icon?: React.FC<any>; url: string; label?: string }>
  divider?: boolean
  className?: string
}

export const LandingPageProject: React.FC<Props> = React.memo(
  ({
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
        <span className="font-medium">
          <FormattedMessage id="dkTf+d" defaultMessage="Tempo" />
          {': '}
        </span>
        {team.map((member, i) => (
          <React.Fragment key={member.profileURL}>
            <LandingPageProjectTeamMember
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
        <div className="px-8 pt-2 pb-8 sm:pb-20">
          {divider && (
            <hr className="mt-0 mb-6 border-gray-200 dark:border-gray-700" />
          )}
          <h1 className="mb-2 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
            {title}
            {years && (
              <span className="ml-3 text-lg font-normal text-green-500">
                <FormattedMessage
                  id="kUEOEk"
                  defaultMessage="{years} anos"
                  values={{ years }}
                />
              </span>
            )}
          </h1>
          <p className="flex-grow mb-4 text-lg text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {team && (
            <div className="mb-4 -mt-2 text-gray-500 md:hidden">
              {renderedTeam}
            </div>
          )}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:absolute bottom-8 inset-x-8">
            <div className="flex items-center mr-4 space-x-2">
              {technologies.slice(0, 4).map((tech) => (
                <LandingPageProjectTechnology key={tech} label={tech} />
              ))}
              {technologies.length > 4 && (
                <LandingPageProjectTechnology
                  label={technologies.slice(4).join(', ')}
                >
                  +{technologies.length - 4}
                </LandingPageProjectTechnology>
              )}
            </div>
            {team && (
              <div className="hidden pl-3 leading-loose text-gray-400 border-l border-gray-300 md:block dark:border-gray-700">
                {renderedTeam}
              </div>
            )}

            {actions && (
              <div className="flex flex-col w-full space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 sm:ml-auto sm:w-auto">
                {actions.map((action) => {
                  const Icon = action.icon || FiExternalLink

                  return (
                    <Button
                      as="a"
                      key={action.url}
                      href={action.url}
                      color="theme"
                      className="flex items-center justify-center w-full shadow"
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
                          id="PZVEAt"
                          defaultMessage="Visitar"
                        />
                      )}
                    </Button>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  },
)

export type LandingPageProjectProps = Props
