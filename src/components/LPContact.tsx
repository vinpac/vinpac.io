import React from 'react'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import cx from 'classnames'
import ContactButton from './ContactButton'
import { vinicius } from '@static-constants'

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
    id: 'n5pgGm',
    defaultMessage: 'Fale comigo',
  },
})

interface Props {
  className?: string
}

const LPContact: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

  return (
    <div id="contact" className={cx('py-16 sm:py-24', className)}>
      <div className="container">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-gray-700 dark:text-white">
          <FormattedMessage id="XSO+lQ" defaultMessage="Bora conversar!" />
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-12">
          <FormattedMessage
            id="46Cs0y"
            defaultMessage="Eu não sou dificil de achar, seguinte:"
          />
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.linkedInURL}
              label="Linkedin"
              description={intl.formatMessage(messages.linkedinDesc)}
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.dribbbleURL}
              label="Dribbble"
              description={intl.formatMessage(messages.dribbbleDesc)}
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.gitHubURL}
              label="GitHub"
              description={intl.formatMessage(messages.githubDesc)}
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={`mailto:${vinicius.email}`}
              label="Email"
              description={intl.formatMessage(messages.myEmail)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPContactProps = Props
export default LPContact
