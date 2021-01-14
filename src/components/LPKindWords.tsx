import React from 'react'
import { FormattedMessage } from 'react-intl'
import cx from 'classnames'
import KindMessage from './KindMessage'
import { useThemeName } from '@lib/theme'

interface Props {
  className?: string
}

const LPKindWords: React.FC<Props> = ({ className }) => {
  const patternOpacity = useThemeName() === 'dark' ? '.3' : '.15'
  return (
    <div
      id="kind-words"
      className={cx('py-24 bg-gray-100 dark:bg-gray-900', className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23059669' fill-opacity='${patternOpacity}' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      <div className="container">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 dark:text-white">
          <FormattedMessage
            id="components/LPKindWords/title"
            defaultMessage="Espaço da gentileza"
          />
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-green-600 mb-12">
          <FormattedMessage
            id="components/LPKindWords/subtitle"
            defaultMessage="Mensagens de quem trabalhou comigo"
          />
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 sm:px-4 space-y-4 md:space-y-8 mb-4 md:mb-0">
            <KindMessage
              authorName="John Doe"
              authorRole="CEO"
              company="Atados"
              message="Vini foi o responsável por construir e escalar o site do Atados: www.atados.com.br
              Gerenciou nossa equipe por alguns anos e com ele, além de criarmos uma plataforma com fácil usabilidade para ONGs, criamos um sistema de gerenciamento inteligente, escalável e que possibilitou a área ser auto-sustentável.
              Espero que a gente possa criar mais projetos juntos no futuro"
              takenFrom="LinkedIn"
            />
            <KindMessage
              authorName="John Doe"
              authorRole="Líder de Design"
              company="Atados"
              message="Vinicius surpreende a qualquer um pela capacidade técnica e de gestão, excelente profissional. Lida com novos desafios e problemas como degraus do dia a dia, é um profissional pra qualquer equipe."
              takenFrom="LinkedIn"
            />
          </div>
          <div className="w-full md:w-1/2 sm:px-4 space-y-4 md:space-y-8">
            <KindMessage
              authorName="John Doe"
              company="Atados"
              authorRole="CEO da Atados"
              message="O Vinícius é simplesmente uma daquelas pessoas que está completamente fora da curva. Sua capacidade técnica e gestora se desenvolvem de uma maneira que deixa qualquer um pasmo. definitivamente um dos melhores profissionais que já tive o prazer de trabalhar."
              takenFrom="LinkedIn"
            />
            <KindMessage
              authorName="John Doe"
              authorRole="CEO da Atados"
              message="Quero trabalhar em projetos que genuinamente buscam transformar a vida de pessoas através da tecnologia"
              takenFrom="LinkedIn"
              company="Atados"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPKindWordsProps = Props
export default LPKindWords
