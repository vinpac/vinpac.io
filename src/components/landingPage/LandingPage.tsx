import { LandingPageHero } from './hero'
import { LandingPageProjects } from './projects'
import { LandingPageAboutMe } from './aboutMe'
import { LandingPageFooter } from './footer'
import { LandingPageContact } from './contact'
import { LandingPageKindWords } from './kindWords'
import { Layout } from '@components/layout'

export const LandingPage: React.FC = () => {
  return (
    <Layout heroClassName="dark:bg-gray-800" hero={<LandingPageHero />}>
      <LandingPageProjects />
      <LandingPageAboutMe />
      <LandingPageKindWords />
      <LandingPageContact />
      <LandingPageFooter />
    </Layout>
  )
}
