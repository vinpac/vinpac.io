import React from 'react'
import cx from 'classnames'
import TechStackCol from 'components/TechStackCol'
import TechStackItem from 'components/TechStackItem'

export interface FavoriteStackSectionProps {
  readonly className?: string
}

const FavoriteStackSection: React.FC<FavoriteStackSectionProps> = ({
  className,
}) => {
  return (
    <div className={cx('bg-gray-900 -mt-64', className)}>
      <div className="container relative border-l border-r border-gray-800 border-dashed h-full">
        <div className="absolute bottom-0 right-0 left-0 top-0 flex flex-row">
          <div className="w-1/4 border-r border-dashed border-gray-800"></div>
          <div className="w-1/4 border-r border-dashed border-gray-800"></div>
          <div className="w-1/4 border-r border-dashed border-gray-800"></div>
          <div className="w-1/4 border-dashed border-gray-800"></div>
        </div>
        <div className="relative pt-48">
          <div className="animated fadeInUp-25 mb-8 pt-24">
            <span className="text-md font-bold text-secondary-600">
              DESENVOLVIMENTO
            </span>
            <h1
              id="stack"
              className="text-6xl font-bold leading-tight max-w-2xl mb-2 text-white"
            >
              Minha Stack
            </h1>
            <p className="max-w-md text-lg text-gray-500">
              Durante os ultimos anos eu fui conhecendo a minha stack favorita
              para desenvolver projetos.
            </p>
          </div>
          <div className="flex flex-row -mx-2">
            <TechStackCol
              className="w-1/4 px-2"
              title="Design"
              description="Figma"
            >
              <TechStackItem name="Figma" />
            </TechStackCol>
            <TechStackCol
              className="w-1/4 px-2"
              title="Front-End"
              description="React + Next.js + TailwindCSS"
              experience="3 anos de experiência"
            >
              <div className="relative h-32">
                <TechStackItem name="TailwindCSS" />
                <TechStackItem
                  name="React"
                  className="-ml-8 transform translate-y-6 align-top relative z-10"
                />

                <TechStackItem
                  name="Next.js"
                  className="-ml-8 transform align-top"
                />
              </div>
            </TechStackCol>

            <TechStackCol
              className="w-1/4 px-2"
              title="Back-End"
              description="Hasura + Node.js"
            >
              <div className="relative h-32">
                <TechStackItem name="Hasura" />
                <TechStackItem
                  name="Node.js"
                  className="-ml-5 transform translate-y-6 align-top"
                />
              </div>
            </TechStackCol>
            <TechStackCol
              className="w-1/4 px-2"
              title="Apps"
              subtitle="(IOS & Android)"
              description="React Native"
            >
              <TechStackItem name="React Native" />
            </TechStackCol>
          </div>
        </div>
      </div>
    </div>
  )
}

FavoriteStackSection.displayName = 'FavoriteStackSection'

export { FavoriteStackSection }
export default FavoriteStackSection
