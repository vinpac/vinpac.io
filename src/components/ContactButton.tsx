import React from 'react'

interface Props {
  href: string
  label: string
  description: string
  className?: string
}

const ContactButton: React.FC<Props> = ({
  className,
  href,
  label,
  description,
}) => {
  return (
    <a href={href} className={className} target="__blank">
      <span className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white block md:mb-2 hover:underline">
        {label}
      </span>
      <span className="md:text-xl text-gray-400">{description}</span>
    </a>
  )
}

export type ContactButtonProps = Props
export default ContactButton
