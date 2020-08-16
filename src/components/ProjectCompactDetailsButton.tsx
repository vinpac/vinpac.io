import React from 'react'
import cx from 'classnames'
import ShadowColor from 'components/ShadowColor'

export interface ProjectCompactDetailsButtonProps {
  readonly className?: string
  readonly href: string
  readonly name: string
  readonly description: string
  readonly logoSrc: string
  readonly active?: boolean
}

const ProjectCompactDetailsButton: React.FC<ProjectCompactDetailsButtonProps> = ({
  className,
  name,
  logoSrc,
}) => {
  return (
    <div className={cx(className)}>
      <div className="pl-32">
        <ShadowColor
          color="primary"
          distance="2"
          className="w-32 float-left -ml-32"
        >
          <img
            src={logoSrc}
            className="w-32 h-32 rounded-xl bg-gray-500 relative z-10"
          />
        </ShadowColor>
        <div className="pl-8">
          <h1 className="text-2xl font-medium truncate text-theme-900 -mt-1">
            {name}
          </h1>
          <h4 className="text-green-600 font-medium mb-1">
            Co-Founder & COO, Since June 2019{' '}
            <span className="text-gray-600 font-normal"> . São Paulo, SP</span>
          </h4>
          <p className="text-base text-theme-700">
            Civics Unplugged (CU) is a nonpartisan 501(c)(3) social enterprise
            and digitally-powered community that provides leaders of Generation
            Z training, funds, and support to build the future of American
            communities and democracy. Civics Unplugged&apos;s flagship program
            is the CU Fellowship, which had its inaugural year in 2020 and
            trained a diverse cohort of two-hundred exceptional high schoolers
            representing every region of the US.
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}

ProjectCompactDetailsButton.displayName = 'ProjectCompactDetailsButton'

export { ProjectCompactDetailsButton }
export default ProjectCompactDetailsButton
