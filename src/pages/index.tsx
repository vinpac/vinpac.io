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
import PageDivider from 'components/PageDivider'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  hi: {
    id: 'pages/index/hi',
    defaultMessage: 'Oi, eu<br /> sou o Vinicius :)',
  },
  description: {
    id: 'pages/index/description',
    defaultMessage:
      'Eu sou um apaixonado por criar. Neste espaço eu quero compartilhar minhas criações e histórias',
  },
  readMyBlog: {
    id: 'pages/index/readMyBlog',
    defaultMessage: 'Leia meu blog',
  },
  contactMe: {
    id: 'pages/index/contactMe',
    defaultMessage: 'Me manda um oi',
  },
})

const HomePage: React.FC = () => {
  const intl = useIntl()
  return (
    <Layout
      heroClassName="overflow-x-hidden pb-10 md:pb-20"
      hero={
        <div className="container flex">
          <div className="w-full lg:w-1/2">
            <div className="animated mb-8 pt-8">
              <h1
                className="text-6xl font-bold leading-tight max-w-2xl mb-6"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage(messages.hi),
                }}
              />
              <p className="max-w-md text-xl text-theme-600">
                {intl.formatMessage(messages.description)}
              </p>
            </div>
            <div className="md:flex items-center space-x-4 animated fadeInUp-25">
              <ShadowColor color="primary" distance="2">
                <Link href="/blog" passHref>
                  <Button
                    as="a"
                    color="primary"
                    className="block text-lg relative z-10 transform hover:-translate-y-1 duration-75 mb-4 md:mb-0 text-center "
                    paddingClassName="px-8 py-5"
                  >
                    <FaBookOpen size={24} className="inline-block mr-2" />{' '}
                    {intl.formatMessage(messages.readMyBlog)}
                  </Button>
                </Link>
              </ShadowColor>
              <a
                href="https://wa.me/5511976574407"
                className={`block px-8 py-4 text-theme-800 rounded-lg font-medium text-lg text-center hover:bg-theme-200`}
                target="__blank"
              >
                <span className="w-6 h-6 bg-green-200 rounded-full mr-2 inline-block align-text-top relative">
                  <span className="block w-3 h-3 bg-green-500 rounded-full absolute left-0 right-0 top-0 bottom-0 m-auto" />
                </span>
                {intl.formatMessage(messages.contactMe)}
              </a>
            </div>
          </div>
          <div className="w-1/2 pt-8 hidden lg:flex">
            <BestMomentsCarousel className="ml-auto" />
          </div>
        </div>
      }
    >
      <NextSeo title="Inicio" description="A short description goes here." />
      <PageDivider color="primary" />
      <LastProjectsSection />
      <Footer />
    </Layout>
  )
}

HomePage.displayName = 'HomePage'

export { HomePage }
export default HomePage
