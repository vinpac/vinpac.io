import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import ArrowMessage from './ArrowMessage'
import { FaDribbble } from 'react-icons/fa'
import { intlRenderer } from '@lib/intl'

const messages = defineMessages({
  paragraph1: {
    id: 'k8PzCR',
    defaultMessage: `Olá, sou <span>Vinicius Pacheco</span> e sou desenvolvedor Full-stack com mais de 7 anos de experiência, especializado em React, Node.js e TypeScript. Com uma combinação única de experiência em design e desenvolvimento, crio interfaces profissionais e pixel-perfect em um curto espaço de tempo. Sou excelente em construir soluções inteligentes que permitem experiências ideais.`,
  },
  paragraph3: {
    id: '7xYPxA',
    defaultMessage: `Cresci em Petrópolis, uma pequena cidade do Rio de Janeiro. As coisas não eram tão fáceis. <span>Com 14 anos, eu conheci na programação a minha forma de expressão</span>. Alguns anos e projetos depois, aos 17, a Atados me contratou como freelancer para construir sua primeira plataforma internacional. Eles me convidaram para mudar pra São Paulo, a 400 quilômetros dali. Aceitei o convite e me aventurei numa cidade nova aos 19.`,
  },
  arrowMessage: {
    id: 'oNYXnh',
    defaultMessage: 'Veja todas meus desenhos no',
  },
})

interface Props {
  className?: string
}

const LPAboutMe: React.FC<Props> = ({ className }) => {
  const intl = useIntl()
  return (
    <section
      id="about-me"
      className={cx('overflow-hidden dark:bg-gray-800 -mt-24 pt-24', className)}
    >
      <div className="pt-36 pb-16 md:pb-36 container px-8 relative">
        <ArrowMessage
          shape="1"
          message={
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/vinpac"
              className="hover:underline text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white"
            >
              {intl.formatMessage(messages.arrowMessage)}{' '}
              <FaDribbble className="inline-block" />
            </a>
          }
          className="bottom-48 absolute -right-16 text-gray-300 dark:text-gray-600 hidden lg:flex"
        />
        <img
          src="/assets/Cavaco.svg"
          alt=""
          className="inset-y-0 my-auto lg:-right-36 absolute hidden lg:block"
          width="300px"
          height="704.59px"
        />

        <img
          src="/assets/lp_about_me_leaf.png"
          alt=""
          className="transform rotate-45 -top-24 left-18 my-auto lg:-left-36 absolute z-20"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          <FormattedMessage id="PscvAo" defaultMessage="Sobre mim" />
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-primary-700 dark:text-primary-300 mb-8">
          <FormattedMessage
            id="N5DL11"
            defaultMessage="De Petropólis para o mundo"
          />
        </p>
        <div className="text-lg max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage(
                messages.paragraph1,
                intlRenderer({
                  span: {
                    class: 'font-medium text-primary-700 dark:text-primary-300',
                  },
                }),
              ),
            }}
          />
          <h2 className="text-2xl mb-4 font-medium mt-8 text-gray-800 dark:text-white">
            <FormattedMessage
              id="K5hD19"
              defaultMessage="Programação como uma forma de expressão"
            />
          </h2>
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage(
                messages.paragraph3,
                intlRenderer({
                  span: {
                    class:
                      'bg-green-300 dark:bg-green-700 bg-opacity-50 leading-loose md:leading-none  dark:text-white  py-1 rounded px-1',
                  },
                }),
              ),
            }}
          />

          <p className="mb-4">
            <FormattedMessage
              id="QpMbuR"
              defaultMessage="Em São Paulo conheci uma gama muito diversificada de pessoas. Trabalhando na Atados fiz amigos para a vida. Conheci pessoas sensíveis que me deram um espaço para criar, o que fortaleceu minha empatia, minha capacidade de ouvir e minha expressão vulnerável."
            />
          </p>
          <p className="mb-4">
            <FormattedMessage
              id="h/PBBt"
              defaultMessage="Aprendi a ouvir, sentir, comunicar e pedir ajuda. Olhando pra trás, vejo que decidir não fazer
              faculdade e mudar pra São Paulo para trabalhar foi a melhor decisão que eu podia ter tomado. Foi aprendendo na prática que eu criei meu próprio caminho."
            />
          </p>
          <h2 className="text-2xl mb-4  font-medium text-gray-800 dark:text-white mt-8">
            <FormattedMessage
              id="WK/SgI"
              defaultMessage="Não só de trabalho, eu vou vivendo..."
            />
          </h2>
          <p className="mb-4">
            <FormattedMessage
              id="71KGgl"
              defaultMessage="Amo brincar de músico. Toco cavaquinho, banjo e pandeiro. Um samba na rua é minha
            praia. Alias, me amarro numa boa praia. Sempre
            que dá carrego minha prancha pro mar. Dificil é eu não aceitar uma
            aventura. Principalmente se for com prancha. Bora dar um rolé de Skate?
            Tenho 2!"
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export type LPAboutMeProps = Props
export default LPAboutMe
