import React from 'react'
import Layout from '@components/Layout'
import LPHero from '@components/LPHero'
import LPProjects from '@components/LPProjects'
import LPAboutMe from '@components/LPAboutMe'
import LPFooter from '@components/LPFooter'
import LPContact from '@components/LPContact'
import LPKindWords from '@components/LPKindWords'

const Index: React.FC = () => {
  return (
    <Layout heroClassName="dark:bg-gray-800" hero={<LPHero />}>
      <LPProjects />
      <LPAboutMe />
      <LPKindWords />
      <LPContact />
      <LPFooter />
    </Layout>
  )
}

export default Index
