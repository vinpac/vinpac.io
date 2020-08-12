import React, { useState, useEffect } from 'react'
import { BlogIndex } from 'lib/notion/types'
import Layout from 'components/Layout'
import BlogPostGridItem from 'components/BlogPostGridItem'
import FilterPostsByTagButton from 'components/FilterPostsByTagButton'
import { useSWRFetch } from 'lib/fetch/hooks'
import { updateBlogIndexCacheInBrowser } from 'lib/blog/browser'
import { NextSeo } from 'next-seo'
import BlockPlaceholder from 'components/BlockPlaceholder'

const BlogPage: React.FC = () => {
  const [view] = useState<'list' | 'grid'>('grid')
  const { data } = useSWRFetch<BlogIndex>('/api/blog')
  useEffect(() => {
    if (data) {
      updateBlogIndexCacheInBrowser(data)
    }
  }, [data])
  return (
    <Layout
      hero={
        <div className="container pb-10">
          <h1 className="text-6xl font-bold mb-4">Blog</h1>
          {data && (
            <div className="h-10 animated fadeInUp-25 animated_faster">
              {data?.tags.map((tag) => (
                <FilterPostsByTagButton key={tag} tag={tag} />
              ))}
            </div>
          )}
          {!data && <BlockPlaceholder className="w-1/4 h-10" />}
        </div>
      }
      color="gray"
    >
      <NextSeo title="Blog" />
      <div className="container relative z-10 -translate-y-8 transform">
        <div className="flex flex-wrap -mx-2">
          {data?.posts.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 px-2 mb-4">
              <BlogPostGridItem
                post={post}
                compact={view === 'list'}
                className="h-full flex flex-col justify-between"
                shadowClassName="h-full"
              />
            </div>
          ))}
          {!data && (
            <>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <BlockPlaceholder className="h-48" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <BlockPlaceholder className="h-48" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <BlockPlaceholder className="h-48" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <BlockPlaceholder className="h-48" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <BlockPlaceholder className="h-48" />
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

BlogPage.displayName = 'BlogPage'

export { BlogPage }

export default BlogPage
