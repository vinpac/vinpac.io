import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import { getBlogPostBySlug } from 'lib/blog/server'
import { BlogPostPageIndex } from 'lib/notion/types'
import Layout from 'components/Layout'
import { useTailwindCx } from 'lib/css'
import moment from 'moment'
import { NotionRenderer } from 'react-notion'
import { NextSeo } from 'next-seo'
import TextPlaceholder from 'components/TextPlaceholder'
import BlockPlaceholder from 'components/BlockPlaceholder'

export interface BlogPostPageProps extends Partial<BlogPostPageIndex> {
  readonly className?: string
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  notionBlockMap,
}) => {
  const vx = useTailwindCx((!post ? 'gray' : post?.color) || 'gray')
  return (
    <Layout
      hero={
        <div className="container max-w-2xl pb-6">
          <h1 className="text-5xl font-bold">
            {post?.name || <TextPlaceholder />}
          </h1>

          {post && (
            <div className="space-x-2">
              {post?.date && (
                <>
                  <span className={vx('text', 600)}>
                    {moment(post.date).fromNow()}
                  </span>
                  <span className={vx('text', 700)}>.</span>
                </>
              )}
              <span className={vx('text', 600)}>☕️ 5 min</span>
            </div>
          )}
          {!post && <BlockPlaceholder className="h-6 w-1/2" />}
        </div>
      }
      heroClassName={`${vx('border', 500)} border-b-4`}
      color={!post ? 'gray' : post.color}
    >
      <NextSeo
        title={!post ? 'Carregando...' : `${post.name} | Blog`}
        description={post?.description || '...'}
      />
      <div
        className={`h-2 ${vx('bg', 200)}${!post ? ' animate-bounce' : ''}`}
      ></div>
      <div className="container max-w-2xl text-gray-800 prose prose-md py-8">
        {notionBlockMap && post && <NotionRenderer blockMap={notionBlockMap} />}
        {!post && (
          <>
            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 w-1/2 mb-8" />

            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 mb-3" />
            <BlockPlaceholder className="h-4 w-1/2 mb-8" />
            <BlockPlaceholder className="h-48 bg-gray-200" />
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
