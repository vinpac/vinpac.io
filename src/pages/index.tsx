import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FiGlobe } from 'react-icons/fi'
import { LandingPage } from '@components/landingPage'

const Index: React.FC = () => {
  const { locale } = useRouter()
  return (
    <>
      {locale === 'pt-BR' && (
        <div className="text-white bg-blue-500">
          <Link href="/" locale="en">
            <a className="container flex items-center py-2 hover:underline">
              <FiGlobe className="mr-2" />
              <span>
                Check out the <span className="underline">English version</span>
              </span>
            </a>
          </Link>
        </div>
      )}

      <LandingPage />
    </>
  )
}

export default Index
