import React from 'react'
import cx from 'classnames'
import { Tooltip } from '@reach/tooltip'

export interface TechStackItemProps {
  name:
    | 'Figma'
    | 'React'
    | 'Next.js'
    | 'Hasura'
    | 'TailwindCSS'
    | 'Node.js'
    | 'React Native'
  className?: string
}

const nameToTechLogoSrc: { [name in TechStackItemProps['name']]: string } = {
  'Next.js': '/assets/TechStack/NextJs.png',
  TailwindCSS: '/assets/TechStack/TailwindCSS.png',
  React: '/assets/TechStack/React.png',
  Figma: '/assets/TechStack/Figma.svg',
  Hasura: '/assets/TechStack/Hasura.svg',
  'Node.js': '/assets/TechStack/NodeJs.svg',
  'React Native': '/assets/TechStack/React-White.svg',
}

const TechStackItem: React.FC<TechStackItemProps> = ({ name, className }) => {
  const techLogoSrc = nameToTechLogoSrc[name]
  return (
    <Tooltip label={name}>
      <button
        className={cx(
          'w-24 h-24 rounded-xl shadow-md bg-gra inline-block overflow-hidden hover:shadow-outline focus:shadow-outline',
          className,
          name === 'Hasura' && 'bg-gray-200 px-3 py-2',
          name === 'Figma' && 'bg-white px-6 py-3',
          name === 'Node.js' && 'bg-green-100 px-3 py-2',
          name === 'React Native' && 'bg-blue-400 px-2 py-3',
          name === 'TailwindCSS' && 'bg-white py-1',
        )}
      >
        <img src={techLogoSrc} className="rounded w-full" alt={name} />
      </button>
    </Tooltip>
  )
}

TechStackItem.displayName = 'TechStackItem'

export { TechStackItem }
export default TechStackItem
