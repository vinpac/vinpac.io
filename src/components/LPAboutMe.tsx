import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import Head from 'next/head'
import ArrowMessage from './ArrowMessage'
import { FaDribbble } from 'react-icons/fa'
import { intlRenderer } from '@lib/intl'

const messages = defineMessages({
  paragraph1: {
    id: 'components/LPAboutMe/p/1',
    defaultMessage: `Eu me chamo <span>Vinicius Pacheco</span> e eu
    sou um Desenvolvedor FullStack e Designer com experiência em
    liderança. Sei combinar design com uma vasta experiência em
    programação transformar problemas complexos em soluções completas e
    elegantes. Tenho muita experiência com Node.js, React e Typescript,
    mas também consigo desenvolver em Python e PHP. Minha maior força é
    minha velocidade parar criar e sensibilidade para ouvir. Sempre
    busco harmonizar funcionalidade e elegância.`,
  },
  paragraph3: {
    id: 'components/LPAboutMe/p/3',
    defaultMessage: `Eu cresci em uma família pequena no interior do Rio do Janeiro. As
    coisas não eram muito fáceis. A violência era normal no dia a dia.
    Olhando pra trás eu vejo que dificilmente eu me sentia ouvido.
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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="pt-36 pb-16 md:pb-36 container px-8 relative">
        <ArrowMessage
          shape="1"
          message={
            <a
              href="https://dribbble"
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
        <p className="text-2xl md:text-3xl font-medium text-primary-700 dark:text-primary-300 mb-12">
          <FormattedMessage
            id="components/LPAboutMe/subtitle"
            defaultMessage="Um artista do Brasil"
          />
        </p>
        <div className="text-lg max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-medium mb-4 text-gray-800 dark:text-white">
            <FormattedMessage
              id="components/LPAboutMe/title/1"
              defaultMessage="Primeiro, quem sou eu:"
            />
          </h2>
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
              defaultMessage="Como abri meu coração para ouvir"
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
              defaultMessage="Em São Paulo conheci todo tipo de gente. No Atados criei amigos pra
            vida. Pessoas sensíveis que não só me ofereceram um espaço para
            criar, mas também me mostraram o poder da empatia, da escuta e da
            vulnerabilidade."
            />
          </p>
          <p className="mb-4">
            <FormattedMessage
              id="components/LPAboutMe/p/5"
              defaultMessage="Ter aprendido a ser uma pessoa melhor me ajudou a criar pontes e não
            muralhas. A ouvir, sentir, comunicar e pedir ajuda. Fico muito feliz
            de, mesmo com muito medo, ter decidido não fazer faculdade e
            arriscar uma vida em São Paulo."
            />
          </p>
          <h2 className="text-2xl mb-4  font-medium text-gray-800 dark:text-white mt-8">
            <FormattedMessage
              id="components/LPAboutMe/title/3"
              defaultMessage="Ah, e eu adoro sair!"
            />
          </h2>
          <p className="mb-4">
            <FormattedMessage
              id="components/LPAboutMe/p/6"
              defaultMessage="Eu toco cavaquinho, banjo e pandeiro. Então um samba na rua é minha
            praia. Falando nisso, praia é um dos meus lugares favoritos. Sempre
            que dá carrego minha prancha pro mar. Pra falar a verdade não tem
            aventura que eu não tope. Principalmente se for com prancha. Skate?
            Tenho 2 - bora!"
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export type LPAboutMeProps = Props
export default LPAboutMe
