import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'

import { FiMail } from 'react-icons/fi'
import { vini } from '@static-constants'
import Image from 'next/image'
import { Button } from '@components/input'
import { ArrowMessage } from '@components/layout'

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

export const LandingPageHero: React.FC = () => {
  const intl = useIntl()

  return (
    <div
      className="relative overflow-hidden pb-36 md:pb-48"
      style={{ backgroundImage: '/assets/globe.svg' }}
    >
      <div className="container relative z-10 pt-5 md:pt-10">
        <figure className="absolute rounded-xl -right-36 top-10 hidden lg:block lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px]">
          <ArrowMessage
            shape="2"
            message={intl.formatMessage(messages.me)}
            className="absolute -ml-4 -left-64 -bottom-6 dark:text-gray-200 "
            direction="right"
          />
          <ArrowMessage
            shape="3"
            message={intl.formatMessage(messages.chico)}
            className="absolute -ml-4 -bottom-24 right-36 dark:text-gray-200 "
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
          <div className="w-full h-full transform bg-gradient-to-b from-orange-200 to-orange-300 -rotate-12 rounded-xl"></div>
        </figure>
        <div className="lg:max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-7xl dark:text-white md:mb-8">
            <FormattedMessage
              id="5u1Kg0"
              defaultMessage="Há 7 anos trabalhando para tornar o mundo um lugar melhor"
            />
          </h1>
          <h4 className="mb-8 text-xl font-medium leading-tight text-gray-400 sm:text-2xl md:text-3xl">
            <FormattedMessage
              id="7Ibjak"
              defaultMessage="Desenvolvedor Full Stack em {city}"
              values={{ city: 'São Paulo' }}
            />
          </h4>
          <div className="relative flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <Button
              as="a"
              className="transition-transform duration-75 transform shadow-md hover:-translate-y-1"
              color="theme"
              size="lg"
              href={`mailto:${vini.email}`}
            >
              <FiMail size={24} className="inline-block mr-2" />
              <FormattedMessage id="bpZEeb" defaultMessage="Começar Conversa" />
            </Button>
            <ArrowMessage
              shape="1"
              message={intl.formatMessage(messages.contact)}
              className="absolute pointer-events-none -bottom-20 left-6 z-24 sm:-left-24 dark:text-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
