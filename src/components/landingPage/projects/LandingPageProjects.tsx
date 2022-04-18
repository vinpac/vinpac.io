import React from 'react'
import SVGProjectsPattern from '@assets/svg/lp_projects_pattern.svg'
import cx from 'classnames'
import { LandingPageProject } from './project'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import { FiPlay } from 'react-icons/fi'
import { FaDribbble, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const financas = defineMessages({
  title: {
    id: 'AOsrhY',
    defaultMessage: 'Protótipo: App para gerenciamente financeiro',
  },
  description: {
    id: 'JflVZj',
    defaultMessage:
      'Controle a finanças pessoais através de uma interface clara e direta. O desafio sempre foi ter vontade de registrar. Ser fácil é um grande primeiro passo.',
  },
})

const nexusTypeORMPlugin = defineMessages({
  description: {
    id: 'FOsGM9',
    defaultMessage:
      'Este plugin cria definições e resolvers automaticamente transformando modelos do TypeORM em uma API GraphQL',
  },
})

const atados = defineMessages({
  title: {
    id: '+j0BYY',
    defaultMessage: 'Atados: Plataforma de voluntariado',
  },
  description: {
    id: 'VOTlCZ',
    defaultMessage: `Uma Plataforma Web em React que capacita projetos sociais. Gerentes de Projetos o usam para encontrar e gerenciar voluntários, além receber doações por meio de uma integração de pagamentos. Por outro lado, os voluntários podem encontrar projetos e começar sua jornada voluntária.

      Fui o principal desenvolvedor Front-End e me comunicava diretamente com o desenvolvedor Back-End para integração a API Django em nosso produto principal e em plataformas específicas do cliente. Para a integração de pagamentos, trabalhei como desenvolvedor Back-End, onde criei Funções Lambda para servir como nossa ponte de integração. Isso nos permitiu receber mais de R$ 200.000 (200 mil reais) em março de 2020. Também trabalhei como desenvolvedor Back-End para habilitar a funcionalidade White-Label. Nesta função, criei um sistema onde uma plataforma para um cliente poderia substituir facilmente partes do nosso aplicativo para funcionar de acordo com as necessidades do cliente.
      
      Para melhorar a experiência de desenvolvimento, criei integrações contínuas para melhorar o processo de deploy. A integração validava a nova versão, fazia a publicação de previews e garantia que todos as plataformas dos clientes estivessem atualizadas com o núcleo do aplicativo.`,
  },
})

interface Props {
  className?: string
}

export const LandingPageProjects: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  return (
    <div
      id="projects"
      className={cx(
        'relative bg-gradient-to-b from-white dark:from-gray-800 to-gray-100 dark:to-gray-900 py-24 overflow-hidden',
        className,
      )}
    >
      <div className="container relative">
        <SVGProjectsPattern className="absolute my-auto text-white top-20 sm:top-0 -right-80 dark:text-gray-700" />
        <SVGProjectsPattern className="absolute inset-y-0 my-auto text-indigo-100 -left-80 top-2/4 dark:text-indigo-900" />

        <div className="relative z-10">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-7xl">
            <FormattedMessage id="6EqXIC" defaultMessage="Projetos" />
          </h2>

          <p className="mb-12 text-xl font-medium text-gray-400 sm:text-2xl md:text-3xl">
            <FormattedMessage
              id="ifZxwY"
              defaultMessage="{count} projetos selecionados"
              values={{ count: 4 }}
            />
          </p>
          <div className="-mx-4 space-y-8 sm:mx-0">
            <LandingPageProject
              className="shadow-lg"
              title={formatMessage(atados.title)}
              description={formatMessage(atados.description)}
              years="> 4"
              technologies={[
                'Figma',
                'GraphQL',
                'React',
                'TailwindCSS',
                'Node.js',
                'Python',
              ]}
              team={[
                {
                  name: 'Fabio Garcia',
                  profileURL: 'https://github.com/fabiogarciasalgado',
                },
                {
                  name: 'Leonardo Arroyo',
                  profileURL: 'https://github.com/leonardoarroyo',
                },
                {
                  name: 'Peterson Passos',
                  profileURL: 'https://github.com/PetersonJFP',
                },
                {
                  name: 'Josias Furtado',
                  profileURL: 'https://github.com/JosiasFurtado',
                },
              ]}
              resources={[
                {
                  url: 'https://www.figma.com/proto/JTRzWcqeUbG6znVyQ37Zyr/Finan%C3%A7as?node-id=482%3A1031&viewport=359%2C216%2C0.3740769326686859&scaling=scale-down',
                },
              ]}
            >
              <div className="p-4">
                <Image
                  src="/assets/projects/Atados.png"
                  alt="Atados plataform in 3 different colors"
                  className="w-full"
                  quality="100"
                  width={1078}
                  height={492}
                />
              </div>
            </LandingPageProject>
            <LandingPageProject
              className="shadow-md"
              title={formatMessage(financas.title)}
              description={formatMessage(financas.description)}
              technologies={['Figma', 'GraphQL', 'React']}
              divider
              resources={[
                {
                  icon: FaDribbble,
                  url: 'https://dribbble.com/shots/14885485-Finances-management-app',
                  label: 'Dribbble',
                },

                {
                  icon: FiPlay,
                  label: 'Play',
                  url: 'https://www.figma.com/proto/JTRzWcqeUbG6znVyQ37Zyr/Finan%C3%A7as?node-id=482%3A1031&viewport=359%2C216%2C0.3740769326686859&scaling=scale-down',
                },
              ]}
            >
              <div className="px-8 py-4 text-center">
                <Image
                  src="/assets/projects/Financas.png"
                  alt="5 screens of Financas app"
                  className="w-full leading-none"
                  quality="100"
                  width={1547}
                  height={568}
                />
              </div>
            </LandingPageProject>
            <h2 className="items-center px-4 text-2xl text-gray-700 dark:text-gray-300 md:px-0">
              <span
                dangerouslySetInnerHTML={{
                  __html: formatMessage(
                    {
                      id: 'eL0Zgf',
                      defaultMessage:
                        '// Sou um grande fã de <span>Código aberto</span>',
                    },
                    {
                      span: (...chunks: any) =>
                        `<span class="font-medium text-purple-800 dark:text-purple-300">${chunks.join(
                          '',
                        )}</span>`,
                    },
                  ),
                }}
              />
              <span role="presentation" className="opacity-50">
                <span className="relative inline-block w-4 h-8 -ml-3.5 align-baseline bg-purple-800 top-1 dark:bg-purple-400 animate-blink" />
              </span>
            </h2>
            <div className="-mx-4 space-y-8 md:flex md:space-y-0">
              <div className="w-full px-4 md:w-1/2">
                <LandingPageProject
                  className="shadow-md md:h-full"
                  title={formatMessage({
                    defaultMessage: 'Windstitch',
                    id: 'KRA21T',
                  })}
                  description={formatMessage({
                    defaultMessage:
                      'Stiches-like API for Tailwind CSS. A 2kb, Simple Styling Library that helps you set when a className should be applied to a component.',
                    id: '3v/iPC',
                  })}
                  technologies={['Typescript', 'TailwindCSS', 'React']}
                  resources={[
                    {
                      icon: FaGithub,
                      url: 'https://github.com/vinpac/windstitch',
                    },
                  ]}
                >
                  <div className="p-4">
                    <Image
                      src="/assets/projects/windstitch.gif"
                      alt=""
                      className="w-full rounded-xl"
                      width={630}
                      height={480}
                    />
                  </div>
                </LandingPageProject>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <LandingPageProject
                  className="shadow-md md:h-full"
                  title="nexus-typeorm-plugin"
                  description={formatMessage(nexusTypeORMPlugin.description)}
                  technologies={['Typescript']}
                  resources={[
                    {
                      icon: FaGithub,
                      url: 'https://github.com/vinpac/nexus-typeorm-plugin#readme',
                    },
                  ]}
                >
                  <div className="p-4">
                    <Image
                      src="/assets/projects/Doky.png"
                      alt=""
                      className="w-full"
                      width={489}
                      height={370}
                    />
                  </div>
                </LandingPageProject>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type LandingPageProjectsProps = Props
