import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import { getBlogPostBySlug } from 'lib/blog/server'
import { BlogPostPageIndex } from 'lib/notion/types'
import Layout from 'components/Layout'
import { NotionRenderer } from 'react-notion'
import { NextSeo } from 'next-seo'
import TextPlaceholder from 'components/TextPlaceholder'
import BlockPlaceholder from 'components/BlockPlaceholder'
import PageDivider from 'components/PageDivider'
import { FaClock, FaFolder } from 'react-icons/fa'
import SearchLink from 'components/SearchLink'

export interface BlogPostPageProps extends Partial<BlogPostPageIndex> {
  readonly className?: string
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  notionBlockMap,
}) => {
  const color = post?.color || 'theme'
  return (
    <Layout
      heroClassName={`bg-theme text-${color}-900`}
      hero={
        <div className="container max-w-2xl py-8">
          <h1 className="text-5xl font-bold mb-2">
            {post?.name || <TextPlaceholder />}
          </h1>

          {post && (
            <div className="md:flex space-y-4 md:space-y-0">
              <div className="block md:flex mr-auto">
                <SearchLink query="Notes/" passHref>
                  <a
                    className={`px-2 py-2 font-medium hover:bg-${color}-300 text-theme-600 rounded-md mr-2`}
                  >
                    <FaFolder
                      size={14}
                      className="inline-block mr-2 align-middle -mt-1"
                    />
                    Notes
                  </a>
                </SearchLink>
                <span className={`py-2 font-medium text-theme-600`}>
                  <FaClock
                    size={14}
                    className="inline-block mr-2 align-middle -mt-1"
                  />
                  há um mês
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  className={`bg-${color}-200 text-${color}-600 rounded-md px-2 py-2 font-medium flex-grow`}
                >
                  🇺🇸 English
                </button>
                <button
                  className={`bg-theme text-theme-800 text-white font-normal rounded-md px-2 py-2 flex-grow`}
                >
                  🇧🇷 Portuguese
                </button>
              </div>
            </div>
          )}
          {!post && <BlockPlaceholder className="h-6 w-1/2" />}
        </div>
      }
      color={color}
    >
      <NextSeo
        title={!post ? 'Carregando...' : `${post.name} | Blog`}
        description={post?.description || '...'}
      />
      <PageDivider color={post?.color || 'gray'} />
      <div className="container max-w-2xl text-theme-800 prose prose-md py-8">
        {notionBlockMap && post && <NotionRenderer blockMap={notionBlockMap} />}
        {!post && (
          <>
            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 w-1/2 mb-8" />

            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 w-1/2 mb-8" />
            <BlockPlaceholder className="h-48 bg-theme-200" />
          </>
        )}
      </div>
    </Layout>
  )
}

BlogPostPage.displayName = 'BlogPostPage'

export const getStaticProps: GetStaticProps = async (query) => {
  const slug = query.params?.slug

  if (typeof slug !== 'string') {
    throw new Error('Missing slug')
  }

  const { post, notionBlockMap } = await getBlogPostBySlug(slug)

  return {
    props: {
      post,
      notionBlockMap,
    },
    revalidate: 3600,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default BlogPostPage
