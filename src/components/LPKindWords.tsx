import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import KindMessage from './KindMessage'

const messages = {
  daniel: {
    id: 'components/LPKindWords/daniel',
    defaultMessage: `Vinicius foi o responsável por construir e escalar o site do Atados (atados.com.br).
    Ele gerenciou nossa equipe por alguns anos. Com ele, além de criarmos uma plataforma com fácil usabilidade para ONGs, criamos também um sistema de gerenciamento inteligente, escalável e que possibilitou a área ser auto-sustentável.
    Espero que a gente possa criar mais projetos juntos no futuro`,
  },
  marcos: {
    id: 'components/LPKindWords/marcos',
    defaultMessage: `Vinicius surpreende a qualquer um pela capacidade técnica e de gestão, excelente profissional. Lida com novos desafios e problemas como degraus do dia a dia, é um profissional pra qualquer equipe.`,
  },
  josias: {
    id: 'components/LPKindWords/josias',
    defaultMessage: `O Vinícius é simplesmente uma daquelas pessoas que está completamente fora da curva. Sua capacidade técnica e gestora se desenvolvem de uma maneira que deixa qualquer um pasmo. definitivamente um dos melhores profissionais que já tive o prazer de trabalhar.`,
  },
}

interface Props {
  className?: string
}

const LPKindWords: React.FC<Props> = ({ className }) => {
  const intl = useIntl()
  return (
    <div
      id="kind-words"
      className={cx(
        'py-16 sm:pt-24 bg-gradient-to-t from-red-50 to-white dark:from-gray-700 dark:to-gray-800',
        className,
      )}
    >
      <div className="container">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 dark:text-white">
          <FormattedMessage id="nhjJTT" defaultMessage="Espaço da gentileza" />
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-yellow-500 mb-12">
          <FormattedMessage
            id="yt94QM"
            defaultMessage="Mensagens de quem trabalhou comigo"
          />
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 sm:px-4 space-y-4 md:space-y-8 mb-4 md:mb-0">
            <KindMessage
              authorAvatarURL="/assets/kind-words-authors/ze.jpeg"
              authorName="Daniel Morais de Assunção"
              authorRole="CEO"
              company="Atados"
              message={intl.formatMessage(messages.daniel)}
              takenFrom="LinkedIn"
            />
            {
              <KindMessage
                authorName="Pat"
                authorRole="Client"
                message="Contractor provided exactly what was requested. He understood what was required and delivered on that and did so in a very timely manner. An excellent communicator, he asked questions to clarify. Highly recommended. Will hire him again for future projects."
                takenFrom="LinkedIn"
                company="UpWork"
              />
            }
          </div>
          <div className="w-full md:w-1/2 sm:px-4 space-y-4 md:space-y-8">
            <KindMessage
              authorAvatarURL="/assets/kind-words-authors/marcos.jpeg"
              authorName="Marcos Nunes"
              authorRole="Ex-CEO"
              company="FoxxTecnologia"
              message={intl.formatMessage(messages.marcos)}
              takenFrom="LinkedIn"
            />
            <KindMessage
              authorName="Andrae"
              company="UpWork"
              authorRole="Client"
              message={
                <>
                  I have been using Upwork for many years (since eLance days),
                  and Vinicius is by for the most professional freelancer I have
                  worked with. I could not have asked for better documentation
                  for my project and his communication skills and speed is the
                  best I’ve ever seen.
                  <br />
                  <br />
                  If Vinicius is interested in working with you on a project, do
                  not turn him down. By for the best of the best.
                  <br />
                  <br />I am beyond pleased with his work and he is now on my go
                  to list.
                </>
              }
              takenFrom="LinkedIn"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPKindWordsProps = Props
export default LPKindWords
