import React from 'react'
import Layout from '@components/Layout'
import LPHero from '@components/LPHero'
import LPProjects from '@components/LPProjects'
import LPAboutMe from '@components/LPAboutMe'
import LPFooter from '@components/LPFooter'
import LPContact from '@components/LPContact'
import LPKindWords from '@components/LPKindWords'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FiGlobe } from 'react-icons/fi'

const Index: React.FC = () => {
  const { locale } = useRouter()
  return (
    <>
      {locale === 'pt-BR' && (
        <div className="bg-blue-500 text-white">
          <Link href="/" locale="en">
            <a className="py-2 container hover:underline flex items-center">
              <FiGlobe className="mr-2" />
              <span>
                Check out the <span className="underline">English version</span>
              </span>
            </a>
          </Link>
        </div>
      )}
      <Layout heroClassName="dark:bg-gray-800" hero={<LPHero />}>
        <LPProjects />
        <LPAboutMe />
        <LPKindWords />
        <LPContact />
        <LPFooter />
      </Layout>
    </>
  )
}

export default Index
