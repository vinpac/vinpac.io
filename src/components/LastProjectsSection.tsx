import React from 'react'
import cx from 'classnames'
import ProjectShowcaseOnMockups from 'components/ProjectShowcaseOnMockups'
import { ProjectCompactDetailsButton } from 'components/ProjectCompactDetailsButton'

export interface LastProjectsSectionProps {
  readonly className?: string
}

const LastProjectsSection: React.FC<LastProjectsSectionProps> = ({
  className,
}) => {
  return (
    <div className={cx('component bg-gray-100 relative', className)}>
      <div className="container pt-16 relative z-10">
        <div className="relative z-30">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Produtos</h2>
        </div>
        <div className="flex -mx-3">
          <div className="w-1/2 px-3 relative z-10">
            <div className="max-w-md">
              <ProjectCompactDetailsButton
                name="Atados"
                description="Uma plataforma que conecta voluntários com ONGs"
                href="https://www.atados.com.br"
                logoSrc="/assets/Project/Logo/Atados.png"
                className="mb-2"
                active
                color="primary"
              />
              <ProjectCompactDetailsButton
                name="Minhas Finanças"
                description="Lorem Ipsum dolor iset"
                href="https://www.atados.com.br"
                logoSrc="/assets/Project/Logo/Atados.png"
                className="mb-2"
                color="purple"
              />
              <ProjectCompactDetailsButton
                name="Minhas Finanças"
                description="Lorem Ipsum dolor iset"
                href="https://www.atados.com.br"
                logoSrc="/assets/Project/Logo/Atados.png"
                className="mb-2"
                color="orange"
              />
            </div>
          </div>
          <div className="w-1/2 px-3">
            <ProjectShowcaseOnMockups className="transform -translate-y-24" />
          </div>
          <div className="gradient-shadow absolute top-0 bottom-0 m-auto"></div>
        </div>
      </div>
      <style jsx>{`
        .component {
          min-height: 800px;
        }
        .gradient-shadow {
          width: 500px;
          height: 500px;
          left: -50px;
          background: radial-gradient(
            circle closest-side at 50% 50%,
            rgba(0, 0, 0, 0.1),
            #f7fafc
          );
        }
      `}</style>
    </div>
  )
}

LastProjectsSection.displayName = 'LastProjectsSection'

export { LastProjectsSection }
export default LastProjectsSection
