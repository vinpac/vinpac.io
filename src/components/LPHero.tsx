import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import ArrowMessage from './ArrowMessage'
import { FiMail } from 'react-icons/fi'
import s from '@css/components/LPHero.module.css'
import { vini } from '@static-constants'
import ButtonLink from './ButtonLink'
import Image from 'next/image'

const messages = defineMessages({
  me: {
    id: 'SxE3ly',
    defaultMessage: 'Esse sou eu',
  },
  contact: {
    id: '+Br3Cr',
    defaultMessage: 'Aberto a receber propostas, ideias e memes :)',
  },
  chico: {
    id: '/pJiee',
    defaultMessage: 'E o Chico',
  },
})

const LPHero: React.FC = () => {
  const intl = useIntl()

  return (
    <div
      className="relative overflow-hidden pb-36 md:pb-48"
      style={{ backgroundImage: '/assets/globe.svg' }}
    >
      <div className="container pt-5 md:pt-10 z-10 relative">
        <figure
          className={`absolute rounded-xl -right-36 top-10 hidden lg:block ${s.picture}`}
        >
          <ArrowMessage
            shape="2"
            message={intl.formatMessage(messages.me)}
            className="absolute -left-64 -ml-4  -bottom-6 dark:text-gray-200 "
            direction="right"
          />
          <ArrowMessage
            shape="3"
            message={intl.formatMessage(messages.chico)}
            className="absolute -bottom-24 -ml-4 right-36 dark:text-gray-200 "
            direction="right"
          />
          <div className="absolute inset-0 z-10">
            <Image
              src="/assets/Me.jpg"
              alt="Picture of me"
              className="w-full rounded-xl"
              width={682}
              height={691}
            />
          </div>
          <div className="bg-gradient-to-b from-orange-200 to-orange-300 w-full h-full transform -rotate-12 rounded-xl"></div>
        </figure>
        <div className="lg:max-w-2xl">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl text-gray-900 dark:text-white font-bold leading-tight mb-4 md:mb-8 ${s.headline}`}
          >
            <FormattedMessage
              id="5u1Kg0"
              defaultMessage="Há 7 anos trabalhando para tornar o mundo um lugar melhor"
            />
          </h1>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 leading-tight mb-8">
            <FormattedMessage
              id="SR5Zcr"
              defaultMessage="Desenvolver Full Stack em {city}"
              values={{ city: 'São Paulo' }}
            />
          </h4>
          <div className="space-y-4 sm:space-y-0 flex flex-col sm:flex-row sm:space-x-8 relative">
            <ButtonLink
              className="shadow-md transform hover:-translate-y-1 transition-transform duration-75"
              colorSchema="theme"
              size="lg"
              href={`mailto:${vini.email}`}
            >
              <FiMail size={24} className="inline-block mr-2" />
              <FormattedMessage id="bpZEeb" defaultMessage="Começar Conversa" />
            </ButtonLink>
            <ArrowMessage
              shape="1"
              message={intl.formatMessage(messages.contact)}
              className="absolute -bottom-20 left-6 z-24 sm:-left-24 dark:text-gray-200 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LPHero
