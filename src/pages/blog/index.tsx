import React, { useState } from 'react'
import Layout from '@components/Layout'
import BlogPostGridItem from '@components/BlogPostGridItem'
import FilterPostsByFolderButton from '@components/FilterPostsByFolderButton'
import { NextSeo } from 'next-seo'
import BlockPlaceholder from '@components/BlockPlaceholder'
import PageDivider from '@components/PageDivider'
import { useBlogIndex } from '@lib/blog/hooks'

const BlogPage: React.FC = () => {
  const [view] = useState<'list' | 'grid'>('grid')
  const { data } = useBlogIndex()
  return (
    <Layout
      hero={
        <div className="container pb-12">
          <h1 className="text-6xl font-bold mb-2">Blog</h1>
          {data && (
            <div className="h-10 animated fadeInUp-25 animated_faster whitespace-no-wrap -mx-2 px-2 py-1 overflow-x-scroll scrolling-touch scrollbar-none">
              {data?.folders.map((folder) => (
                <FilterPostsByFolderButton key={folder} folder={folder} />
              ))}
            </div>
          )}
          {!data && <BlockPlaceholder className="w-1/4 h-10" />}
        </div>
      }
      heroClassName="bg-theme"
    >
      <NextSeo title="Blog" />
      <PageDivider color="primary" />
      <div className="container relative z-10 -translate-y-12 transform">
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
