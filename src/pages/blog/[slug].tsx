import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import { getBlogPostBySlug } from '@lib/blog/server'
import { BlogPostPageIndex } from '@lib/notion/types'
import Layout from '@components/Layout'
import { NotionRenderer } from 'react-notion'
import { NextSeo } from 'next-seo'
import TextPlaceholder from '@components/TextPlaceholder'
import BlockPlaceholder from '@components/BlockPlaceholder'
import PageDivider from '@components/PageDivider'
import { FaClock, FaFolder } from 'react-icons/fa'
import SearchLink from '@components/SearchLink'
import { format, formatDistanceToNow } from 'date-fns'
import PostAuthorAvatarWithLink from '@components/PostAuthorAvatarWithLink'
import ChangePostLanguageLink from '@components/ChangePostLanguageLink'
import { defineMessages, useIntl } from 'react-intl'
import LocaleLabel from '@components/LocaleLabel'
import { useDateFNSLocale } from '@lib/date'

const messages = defineMessages({
  changeLanguage: {
    id: 'pages/blog/[slug]/changeLanguage',
    defaultMessage: 'Leia em:',
  },
})

export interface BlogPostPageProps extends Partial<BlogPostPageIndex> {
  readonly className?: string
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  notionBlockMap,
}) => {
  const intl = useIntl()
  const color = post?.color || 'theme'
  const fnsLocale = useDateFNSLocale()

  return (
    <Layout
      heroClassName={`bg-theme text-${color}-900`}
      hero={
        <div className="container max-w-2xl py-8">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {post?.name || <TextPlaceholder />}
          </h1>
          <h2 className="text-xl font-normal mb-8">
            {post?.description || <TextPlaceholder />}
          </h2>

          {post && (
            <div className="md:flex space-y-4 md:space-y-0">
              <PostAuthorAvatarWithLink />
              <div className="mr-auto"></div>
              <div className="block md:flex">
                {post.folder && (
                  <SearchLink query={`${post.folder}/`} passHref>
                    <a
                      className={`px-2 py-2 font-medium hover:bg-${color}-200 text-theme-600 hover:text-${color}-700 rounded-md mr-2`}
                    >
                      <FaFolder
                        size={14}
                        className="inline-block mr-2 align-middle -mt-1"
                      />
                      {post.folder}
                    </a>
                  </SearchLink>
                )}
                {post.date && (
                  <abbr
                    title={format(new Date(post.date), 'LLL', {
                      locale: fnsLocale,
                    })}
                    className={`py-2 text-theme-600`}
                  >
                    <FaClock
                      size={14}
                      className="inline-block mr-2 align-middle -mt-1"
                    />
                    {formatDistanceToNow(new Date(post.date), {
                      locale: fnsLocale,
                    })}
                  </abbr>
                )}
              </div>
            </div>
          )}
          {!post && <BlockPlaceholder className="h-6 w-1/2" />}
        </div>
      }
    >
      <NextSeo
        title={!post ? 'Carregando...' : `${post.name} | Blog`}
        description={post?.description || '...'}
      />
      <PageDivider color={post?.color || 'theme'} />
      <div className="container max-w-2xl text-theme-800 prose prose-md py-4">
        {post && (
          <div className="space-x-2 mb-4 flex">
            <span className="text-theme-600">
              {intl.formatMessage(messages.changeLanguage)}
            </span>
            <div className={`text-${color}-700 space-x-2`}>
              <ChangePostLanguageLink post={post} locale="en-US">
                <LocaleLabel locale="en-US" />
              </ChangePostLanguageLink>

              <ChangePostLanguageLink post={post} locale="pt-BR">
                <LocaleLabel locale="pt-BR" />
              </ChangePostLanguageLink>
            </div>
          </div>
        )}
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
  const locale = String(query.params?.locale || 'pt-BR')

  if (typeof slug !== 'string') {
    throw new Error('Missing slug')
  }

  const { post, notionBlockMap } = await getBlogPostBySlug(slug, locale)

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
