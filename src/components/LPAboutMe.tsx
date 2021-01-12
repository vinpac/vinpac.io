import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import Head from 'next/head'
import ArrowMessage from './ArrowMessage'
import { FaDribbble } from 'react-icons/fa'

const messages = defineMessages({
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
      <div className="py-36 container px-8 relative">
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
          className="bottom-72 absolute -right-16 text-gray-300 dark:text-gray-600 hidden lg:flex"
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
        <h1 className="text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          <FormattedMessage
            id="components/LPAboutMe/title"
            defaultMessage="Sobre mim"
          />
        </h1>
        <p className="text-3xl font-medium text-green-700 dark:text-green-300 mb-12">
          <FormattedMessage
            id="components/LPAboutMe/subtitle"
            defaultMessage="Leia com atenção"
          />
        </p>
        <div className="text-lg max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-medium mb-4 text-gray-800 dark:text-white">
            Pra além da programação
          </h2>
          <p className="mb-4">
            Eu me chamo <span className="font-medium">Vinicius Pacheco</span>,
            um desenvolvedor que sabe combinar design com uma vasta experiência
            em programação. Eu transformo problemas complexos em soluções
            completas. Minha maior força é minha velocidade parar criar e
            sensibilidade para ouvir. Seja criando APIs, websites, aplicativos
            ou prototipos eu foco em harmonizar funcionalidade e elegância.
          </p>
          <p>
            Meu trabalho vai para além da criação. Tive a oportunidade de
            liderar uma equipe de 4 pessoas por 1 ano com objetivo de criar
            soluções de impacto social para empresas como Samsung, Boticário e
            Via Varejo. Nesse periodo a minha visão se expandiu para além de
            engenharia, incluindo coordenação de pessoas, visão de produto e o
            tomada de decisões baseadas em dados.
          </p>
          <h2 className="text-2xl mb-4 font-medium mt-8 text-gray-800 dark:text-white">
            Como abri meu coração para ouvir
          </h2>
          <p className="mb-4">
            Vindo do interior, cresci em um ambiente aonde minha voz não tinha
            valor. Volência e falta de empatia eram normais.{' '}
            <span className="bg-gradient-to-r from-green-100 dark:to-green-600 dark:from-green-700 dark:text-white to-green-200 py-1 rounded px-1">
              Foi na programação que encontrei meu espaço de expressão
            </span>
            . Aos 18 anos eu já amava o que fazia. Confiante e curioso, decidi
            em não fazer faculdade. Eu confio no meu eram maiores do que minha
            paciência para fazer faculdade, então eu decidi não fazer e confiar
            em mim. Aos 16 eu já trabalhava e aos 19, com muita coragem (e um
            buscado de ingenuidade de um garoto) mudei sozinho para São Paulo -
            que é mais 450km de onde minha família está.
          </p>
          <p className="mb-4">
            Em São Paulo conheci todo tipo de gente. No Atados criei amigos pra
            vida. Pessoas sensíveis que não só me ofereceram um espaço para
            criar, mas também me mostraram o poder da empatia, da escuta e da
            vulnerabilidade.
          </p>
          <h2 className="text-2xl mb-4  font-medium text-gray-800 dark:text-white mt-8">
            Ah, eu adoro sair!
          </h2>
          <p className="mb-4">
            Tocar samba na rua? Dar um rolé de skate? Surfar um final de semana
            inteiro? To muuito dentro! Pensa numa pessoa que gosta de dançar:
            sou eu. Samba no pé, forró improvisado, funk requebrado. Eu gosto é
            de mexer. Tem pouco coisa que eu não goste de fazer na real. Tenho 2
            skates, 1 prancha de surf e muito amor por aventura.
          </p>
        </div>
      </div>
    </section>
  )
}

export type LPAboutMeProps = Props
export default LPAboutMe
