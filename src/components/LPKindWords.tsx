import React from 'react'
import { FormattedMessage } from 'react-intl'
import cx from 'classnames'
import KindMessage from './KindMessage'

interface Props {
  className?: string
}

const LPKindWords: React.FC<Props> = ({ className }) => {
  return (
    <div
      id="kind-words"
      className={cx('py-24 bg-primary-100 dark:bg-gray-900', className)}
    >
      <div className="container">
        <h2 className="text-7xl font-bold mb-4 dark:text-white">
          <FormattedMessage
            id="components/LPKindWords/title"
            defaultMessage="Espaço da gentileza"
          />
        </h2>
        <p className="text-3xl font-medium text-green-600 mb-12">
          <FormattedMessage
            id="components/LPKindWords/subtitle"
            defaultMessage="Mensagens de quem trabalhou comigo"
          />
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 space-y-8 mb-8 md:mb-0">
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
          <div className="w-full md:w-1/2 px-4 space-y-8">
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
