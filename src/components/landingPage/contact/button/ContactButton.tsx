import React from 'react'

interface Props {
  href: string
  label: string
  description: string
  className?: string
}

export const ContactButton: React.FC<Props> = ({
  className,
  href,
  label,
  description,
}) => {
  return (
    <a href={href} className={className} target="__blank">
      <span className="block text-2xl font-medium text-gray-900 md:text-3xl dark:text-white md:mb-2 hover:underline">
        {label}
      </span>
      <span className="text-gray-400 md:text-xl">{description}</span>
    </a>
  )
}

export type ContactButtonProps = Props
