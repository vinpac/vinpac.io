import React from 'react'
import SVGProjectsPattern from '@assets/svg/lp_projects_pattern.svg'
import cx from 'classnames'
import LPProject from './LPProject'
import { FormattedMessage } from 'react-intl'

interface Props {
  className?: string
}

const LPProjects: React.FC<Props> = ({ className }) => {
  return (
    <div
      id="projects"
      className={cx(
        'relative bg-gradient-to-b from-white dark:from-gray-800 to-gray-100 dark:to-gray-900 py-24 overflow-hidden',
        className,
      )}
    >
      <div className="container relative">
        <SVGProjectsPattern className="absolute top-20 sm:top-0 my-auto -right-80 text-white dark:text-gray-700" />
        <SVGProjectsPattern className="absolute inset-y-0 my-auto -left-80 top-2/4 text-indigo-100 dark:text-indigo-900" />

        <div className="relative z-10">
          <h2 className="text-7xl font-bold mb-4">
            <FormattedMessage
              id="components/LPProjects/projects"
              defaultMessage="Projetos"
            />
          </h2>

          <p className="text-3xl font-medium text-gray-400 mb-12">
            <FormattedMessage
              id="components/LPProjects/selectedProjects"
              defaultMessage="4 projetos selecionados"
            />
          </p>
          <div className="space-y-8">
            <LPProject
              className="shadow-lg"
              title="Atados: SASS de voluntariado"
              description="Uma plataforma social (SASS) que conecta pessoas e organizações,
          facilitando o engajamento nas mais diversas possibilidades de
          voluntariado"
              technologies={['Figma', 'GraphQL', 'React']}
              team={[
                {
                  name: 'Fabio Garcia',
                  profileURL: 'https://github.com.br/fabio',
                },
                { name: 'John', profileURL: 'https://github.com.br/vinpac' },
              ]}
            >
              <div className="py-32 m-4 mx-8 rounded-lg bg-blue-500">
                <div className="h-64">_</div>
              </div>
            </LPProject>
            <LPProject
              className="shadow-md"
              title="Atados: Plataforma de voluntariado"
              description="Uma plataforma social (SASS) que conecta pessoas e organizações,
          facilitando o engajamento nas mais diversas possibilidades de
          voluntariado"
              technologies={['Figma', 'GraphQL', 'React']}
              team={[
                {
                  name: 'Fabio Garcia',
                  profileURL: 'https://github.com.br/fabio',
                },
                { name: 'John', profileURL: 'https://github.com.br/vinpac' },
              ]}
            >
              <div className="text-center p-8">
                <img
                  src="/assets/projects/Financas.png"
                  alt=""
                  className="w-full leading-none"
                />
              </div>
            </LPProject>
            <div className="lg:flex -mx-4 space-y-8 lg:space-y-0">
              <div className="md:w-1/2 px-4">
                <LPProject
                  className="shadow-md"
                  title="Atados: Plataforma de voluntariado"
                  description="Uma plataforma social (SASS) que conecta pessoas e organizações,
          facilitando o engajamento nas mais diversas possibilidades de
          voluntariado"
                  technologies={['Figma', 'GraphQL', 'React']}
                >
                  <div className="p-4">
                    <img
                      src="/assets/projects/GraphQL.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </LPProject>
              </div>
              <div className="md:w-1/2 px-4">
                <LPProject
                  className="shadow-md"
                  title="Atados: Plataforma de voluntariado"
                  description="Uma plataforma social (SASS) que conecta pessoas e organizações,
          facilitando o engajamento nas mais diversas possibilidades de
          voluntariado"
                  technologies={['Figma', 'GraphQL', 'React']}
                >
                  <div className="p-4">
                    <img
                      src="/assets/projects/Doky.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </LPProject>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPProjectsProps = Props
export default LPProjects
