import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import ArrowMessage from './ArrowMessage'
import { FaDribbble } from 'react-icons/fa'
import { intlRenderer } from '@lib/intl'

const messages = defineMessages({
  paragraph1: {
    id: 'components/LPAboutMe/p/1',
    defaultMessage: `Eu me chamo <span>Vinicius Pacheco</span> e eu
    sou um Desenvolvedor FullStack e Designer com experiência em
    liderança. Eu combino design com a minha experiência em
    programação pra transformar problemas complexos em soluções completas e
    elegantes. Tenho muita experiência com Node.js, React e Typescript,
    mas também consigo desenvolver em Python e PHP. Minha maior força é
    minha velocidade para criar e sensibilidade para ouvir. Sempre
    busco harmonizar funcionalidade e elegância.`,
  },
  paragraph3: {
    id: 'components/LPAboutMe/p/3',
    defaultMessage: `Eu cresci em uma família pequena no interior do Rio do Janeiro. As
    coisas não eram muito fáceis.
    <span>Foi na programação que encontrei meu espaço de expressão aos 14 anos</span>.
    Aos 17 anos fui chamado para trabalhar em um projeto de São Paulo.
    Não demorou muito pra eu decidir em mudar pra lá. Fui pra mais de
    450km da onde eu morava, sozinho, aos 19 anos.`,
  },
  arrowMessage: {
    id: 'components/LPAboutMe/arrowMessage',
    defaultMessage: 'Curtiu? Segue lá no',
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
          className="bottom-64 absolute -right-16 text-gray-300 dark:text-gray-600 hidden lg:flex"
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
          <FormattedMessage
            id="components/LPAboutMe/title"
            defaultMessage="Sobre mim"
          />
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-primary-700 dark:text-primary-300 mb-8">
          <FormattedMessage
            id="components/LPAboutMe/subtitle"
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
              id="components/LPAboutMe/title/2"
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
              id="components/LPAboutMe/p/4"
              defaultMessage="Em São Paulo conheci todo tipo de gente. Na Atados criei amigos pra
            vida. Conheci pessoas sensíveis que não só me ofereceram um espaço para
            criar, mas também me mostraram o poder da empatia, da escuta e da
            vulnerabilidade."
            />
          </p>
          <p className="mb-4">
            <FormattedMessage
              id="components/LPAboutMe/p/5"
              defaultMessage="Aprendi a ouvir, sentir, comunicar e pedir ajuda. Olhando pra trás, vejo que tomar a decisão de não fazer
              faculdade e mudar pra São Paulo foi a melhor decisão que eu podia ter tomado."
            />
          </p>
          <h2 className="text-2xl mb-4  font-medium text-gray-800 dark:text-white mt-8">
            <FormattedMessage
              id="components/LPAboutMe/title/3"
              defaultMessage="Não só de trabalho, eu vou vivendo..."
            />
          </h2>
          <p className="mb-4">
            <FormattedMessage
              id="components/LPAboutMe/p/6"
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
