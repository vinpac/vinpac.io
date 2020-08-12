import React from 'react'
import IphoneMockup from 'components/IphoneMockup'

export interface ProjectShowcaseOnMockupsProps {
  readonly className?: string
}

const ProjectShowcaseOnMockups: React.FC<ProjectShowcaseOnMockupsProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className="text-center">
        <div className="block mb-4">
          <div className="border-2 border-primary-500 rounded-full p-1 inline-block">
            <button className="px-3 py-1 rounded-full bg-primary-500 font-bold text-white text-sm">
              Mobile
            </button>
            <button className="px-3 py-1 rounded-full text-gray-700 font-bold text-sm">
              Desktop
            </button>
          </div>
        </div>
        <IphoneMockup
          className="h-64 inline-block mr-6 z-10"
          screenClassName="bg-gray-400"
        />
      </div>
      {/*
        <BrowserMockup
          className="h-64 inline-block align-top ml-8 transform scale-75"
          screenClassName="bg-gray-400"
        />
      */}
    </div>
  )
}

ProjectShowcaseOnMockups.displayName = 'ProjectShowcaseOnMockups'

export { ProjectShowcaseOnMockups }
export default ProjectShowcaseOnMockups
