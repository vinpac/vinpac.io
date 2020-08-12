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
import { useTailwindCx } from 'lib/css'

const HomePage: React.FC = () => {
  const tcx = useTailwindCx('primary')
  return (
    <Layout
      heroClassName="overflow-x-hidden md:pb-20"
      hero={
        <div className="container relative">
          <div>
            <div className="animated fadeInUp-25 mb-8 pt-16">
              <h1 className="text-6xl font-bold leading-tight max-w-2xl mb-6">
                Oi, eu me chamo Vinicius
              </h1>
              <p className="max-w-md text-xl text-gray-600">
                Fully integrated payments APIs to support any type of
                business—with solutions that help online and in-person
                retailers, subscription businesses, and software
              </p>
            </div>
            <div className="flex items-center space-x-4 animated fadeInUp-50 animated_delay-1s">
              <ShadowColor color="primary" distance="2">
                <Link href="/blog" passHref>
                  <Button
                    as="a"
                    color="primary"
                    className="block text-lg relative z-10 transform hover:-translate-y-1 duration-75"
                    paddingClassName="px-8 py-5"
                  >
                    <FaBookOpen size={24} className="inline-block mr-2" /> Read
                    my blog
                  </Button>
                </Link>
              </ShadowColor>
              <a
                href="https://wa.me/5511976574407"
                className="px-8 py-4 text-gray-800 rounded-lg font-medium text-lg hover:bg-gray-200"
                target="__blank"
              >
                <span className="w-5 h-5 border-green-300 border-4 bg-green-500 rounded-full mr-2 inline-block align-text-top"></span>
                Mê manda um oi
              </a>
            </div>
          </div>
          <BestMomentsCarousel
            className="hidden md:block top-0 right-0 -mr-8"
            positionClassName="absolute"
            color="primary"
          />
        </div>
      }
    >
      <NextSeo title="Inicio" description="A short description goes here." />
      <div
        className={`h-3 ${tcx('bg', 200)} ${tcx('border', 500)} border-t-4`}
      ></div>
      <LastProjectsSection />
      <Footer />
    </Layout>
  )
}

HomePage.displayName = 'HomePage'

export { HomePage }
export default HomePage
