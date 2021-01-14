import React from 'react'
import SVGProjectsPattern from '@assets/svg/lp_projects_pattern.svg'
import cx from 'classnames'
import LPProject from './LPProject'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import { FiPlay } from 'react-icons/fi'
import { FaDribbble, FaGithub } from 'react-icons/fa'

const messages = defineMessages({
  openSourceTitle: {
    id: 'components/LPProjects/openSourceTitle',
    defaultMessage: '// Sou um grande fã de <span>Código aberto</span>',
  },
})

const financas = defineMessages({
  title: {
    id: 'project/financas/title',
    defaultMessage: 'Protótipo: App para gerenciamente financeiro',
  },
  description: {
    id: 'project/financas/description',
    defaultMessage:
      'Controle a finanças pessoais através de uma interface clara e direta. O desafio sempre foi ter vontade de registrar. Ser fácil é um grande primeiro passo.',
  },
})

const pGraphQL = defineMessages({
  title: {
    id: 'project/pGraphQL/title',
    defaultMessage: 'Estudo: GraphQL Parser',
  },
  description: {
    id: 'project/pGraphQL/description',
    defaultMessage:
      'Lexer, Parser e AST. Um estudo afim de entender como linguagens são lidas.',
  },
})

interface Props {
  className?: string
}

const LPProjects: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

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
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <FormattedMessage
              id="components/LPProjects/projects"
              defaultMessage="Projetos"
            />
          </h2>

          <p className="text-2xl md:text-3xl font-medium text-gray-400 mb-12">
            <FormattedMessage
              id="components/LPProjects/selectedProjects"
              defaultMessage="4 projetos selecionados"
            />
          </p>
          <div className="space-y-8 -mx-4 sm:mx-0">
            <LPProject
              className="shadow-lg"
              title="Atados: Plataforma de voluntariado e liderança"
              description="Trabalhei desenvolvendo e liderando a equipe de desenvolvimento da plataforma, possibilitando a escala do produto internacionalmente. Além do site público, a plataforma é utilizada por empresas como Boticário, Via Varejo e Roche somando mais de 150 mil usuários. É a maior plataforma de voluntariado no Brasil."
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
                  url:
                    'https://www.figma.com/proto/JTRzWcqeUbG6znVyQ37Zyr/Finan%C3%A7as?node-id=482%3A1031&viewport=359%2C216%2C0.3740769326686859&scaling=scale-down',
                },
              ]}
            >
              <div className="py-32 m-4 rounded-lg bg-blue-500"></div>
            </LPProject>
            <LPProject
              className="shadow-md"
              title={intl.formatMessage(financas.title)}
              description={intl.formatMessage(financas.description)}
              technologies={['Figma', 'GraphQL', 'React']}
              divider
              resources={[
                {
                  icon: FaDribbble,
                  url:
                    'https://dribbble.com/shots/14885485-Finances-management-app',
                  label: 'Dribbble',
                },

                {
                  icon: FiPlay,
                  label: 'Play',
                  url:
                    'https://www.figma.com/proto/JTRzWcqeUbG6znVyQ37Zyr/Finan%C3%A7as?node-id=482%3A1031&viewport=359%2C216%2C0.3740769326686859&scaling=scale-down',
                },
              ]}
            >
              <div className="text-center px-8 py-4">
                <img
                  src="/assets/projects/Financas.png"
                  alt=""
                  className="w-full leading-none"
                />
              </div>
            </LPProject>
            <h2 className="text-gray-500 dark:text-gray-300 items-center text-2xl">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage(messages.openSourceTitle, {
                    span: (...chunks: any) =>
                      `<span class="font-medium text-purple-800 dark:text-purple-300">${chunks.join(
                        '',
                      )}</span>`,
                  }),
                }}
              />
              <span className="inline-block bg-opacity-50 ml-2 align-baseline w-4 h-8 bg-purple-800 dark:bg-purple-400 animate-blink"></span>
            </h2>
            <div className="md:flex -mx-4 space-y-8 md:space-y-0">
              <div className="w-full md:w-1/2 px-4">
                <LPProject
                  className="shadow-md md:h-full"
                  title={intl.formatMessage(pGraphQL.title)}
                  description={intl.formatMessage(pGraphQL.description)}
                  technologies={['Typescript']}
                  resources={[
                    {
                      icon: FaGithub,
                      url: 'https://github.com/vinpac/graphql-study',
                    },
                  ]}
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
              <div className="w-full md:w-1/2 px-4">
                <LPProject
                  className="shadow-md md:h-full"
                  title="TypeORM "
                  description="Crie uma documentação a partir de arquivos .mdx"
                  technologies={['Typescript']}
                  resources={[
                    {
                      icon: FaGithub,
                      url: 'https://github.com/vinpac/nexus-typeorm-plugin',
                    },
                  ]}
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
