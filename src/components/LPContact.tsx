import React from 'react'
import { FormattedMessage } from 'react-intl'
import cx from 'classnames'
import ContactButton from './ContactButton'
import { vinicius } from '@static-constants'
import { useMyWhatsAppLink } from '@lib/whatsapp'

interface Props {
  className?: string
}

const LPContact: React.FC<Props> = ({ className }) => {
  const whatsAppLink = useMyWhatsAppLink()

  return (
    <div id="contact" className={cx('py-16 sm:py-24', className)}>
      <div className="container">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          <FormattedMessage
            id="components/LPAboutContact/title"
            defaultMessage="Bora conversar!"
          />
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-12">
          <FormattedMessage
            id="components/LPAboutContact/subtitle"
            defaultMessage="Eu não sou dificil de achar, seguinte:"
          />
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.linkedInURL}
              label="Linkedin"
              description="Meu perfil profissional"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.dribbbleURL}
              label="Dribbble"
              description="Trabalhos em andamento"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.gitHubURL}
              label="GitHub"
              description="Muito código e estudo"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={`mailto:${vinicius.email}`}
              label="Email"
              description={vinicius.email}
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={vinicius.instagramURL}
              label="Instagram"
              description="Minha vida pessoal"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactButton
              href={whatsAppLink}
              label="WhatsApp"
              description="+55 11 976574407"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export type LPContactProps = Props
export default LPContact
