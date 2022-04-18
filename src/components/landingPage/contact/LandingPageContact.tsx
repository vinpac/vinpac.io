import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import { ContactButton } from './button'
import { vini } from '@static-constants'

const messages = defineMessages({
  linkedinDesc: {
    id: '502GV5',
    defaultMessage: 'Meu Perfil Profissional',
  },
  dribbbleDesc: {
    id: 'K0PYjV',
    defaultMessage: 'Protótipos e Designs',
  },
  githubDesc: {
    id: 'rTpk4S',
    defaultMessage: 'Open Source e Estudos',
  },
  myEmail: {
    id: 'qyjUyf',
    defaultMessage: 'Pra Falar Comigo',
  },
})

interface Props {
  className?: string
}

export const LandingPageContact: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

  return (
    <div id="contact" className={cx('py-16 sm:py-24', className)}>
      <div className="container">
        <h1 className="mb-4 text-4xl font-bold text-gray-700 sm:text-5xl md:text-7xl dark:text-white">
          <FormattedMessage id="XSO+lQ" defaultMessage="Bora conversar!" />
        </h1>
        <p className="mb-12 text-xl text-gray-400 sm:text-2xl md:text-3xl">
          <FormattedMessage
            id="46Cs0y"
            defaultMessage="Eu não sou dificil de achar, seguinte:"
          />
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
            <ContactButton
              href={vini.linkedInURL}
              label="Linkedin"
              description={intl.formatMessage(messages.linkedinDesc)}
            />
          </div>
          <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
            <ContactButton
              href={vini.dribbbleURL}
              label="Dribbble"
              description={intl.formatMessage(messages.dribbbleDesc)}
            />
          </div>
          <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
            <ContactButton
              href={vini.gitHubURL}
              label="GitHub"
              description={intl.formatMessage(messages.githubDesc)}
            />
          </div>
          <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
            <ContactButton
              href={`mailto:${vini.email}`}
              label="Email"
              description={intl.formatMessage(messages.myEmail)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export type LandingPageContactProps = Props
