import React from 'react'
import Layout from 'components/Layout'
import { NextSeo } from 'next-seo'
import BestMomentsCarousel from 'components/BestMomentsCarousel'
import LastProjectsSection from 'components/LastProjectsSection'
import { FaBookOpen } from 'react-icons/fa'
import Footer from 'components/Footer'
import Link from 'next/link'
import ShadowColor from 'components/ShadowColor'
import Button from 'components/Button'
import { useTailwindCx } from 'lib/theme'

const HomePage: React.FC = () => {
  const tcx = useTailwindCx('primary')
  return (
    <Layout
      heroClassName="overflow-x-hidden pb-10 md:pb-20"
      hero={
        <div className="container relative">
          <div>
            <div className="animated fadeInUp-15 mb-8 pt-8">
              <h1 className="text-6xl font-bold leading-tight max-w-2xl mb-6">
                Oi, eu sou o
                <br />
                Vinicius :)
              </h1>
              <p className="max-w-md text-xl text-theme-600">
                Fully integrated payments APIs to support any type of
                business—with solutions that help online and in-person
                retailers, subscription businesses, and software
              </p>
            </div>
            <div className="md:flex items-center space-x-4 animated fadeInUp-25 animated_delay-05s">
              <ShadowColor color="primary" distance="2">
                <Link href="/blog" passHref>
                  <Button
                    as="a"
                    color="primary"
                    className="block text-lg relative z-10 transform hover:-translate-y-1 duration-75 mb-4 md:mb-0 text-center "
                    paddingClassName="px-8 py-5"
                  >
                    <FaBookOpen size={24} className="inline-block mr-2" /> Leia
                    meu blog
                  </Button>
                </Link>
              </ShadowColor>
              <a
                href="https://wa.me/5511976574407"
                className={`block px-8 py-4 text-theme-800 rounded-lg font-medium text-lg text-center hover:bg-theme-200`}
                target="__blank"
              >
                <span className="w-6 h-6 bg-green-500 bg-opacity-25 rounded-full mr-2 inline-block align-text-top relative">
                  <span className="block w-3 h-3 bg-green-500 rounded-full absolute left-0 right-0 top-0 bottom-0 m-auto" />
                </span>
                Me manda um oi
              </a>
            </div>
          </div>
          <BestMomentsCarousel
            className="hidden md:block top-0 right-0 -mr-8 mt-8"
            positionClassName="absolute"
          />
        </div>
      }
    >
      <NextSeo title="Inicio" description="A short description goes here." />
      <div
        className={`h-3 ${tcx('bg', 200)} ${tcx('border', 500)} border-t-4`}
      />
      <LastProjectsSection />
      <Footer />
    </Layout>
  )
}

HomePage.displayName = 'HomePage'

export { HomePage }
export default HomePage
