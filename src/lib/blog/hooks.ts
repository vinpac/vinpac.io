import { BlogIndex, BlogPost } from '@lib/notion'
import { useSWRFetch } from '@lib/fetch/hooks'
import { useEffect, useMemo } from 'react'
import { updateBlogIndexCacheInBrowser } from '@lib/blog/browser'
import { SWRResponse } from 'swr'
import { ValidLocale } from '@lib/i18n'

export const useBlogIndex = (): SWRResponse<BlogIndex, Error> => {
  const result = useSWRFetch<BlogIndex>('/api/blog')
  useEffect(() => {
    if (result.data) {
      updateBlogIndexCacheInBrowser(result.data)
    }
  }, [result.data])
  return result
}

export interface UsePostOnLocaleResult {
  post?: BlogPost
  loading: boolean
}
export const useTranslatedPost = (
  slug: string,
  language: ValidLocale,
): UsePostOnLocaleResult => {
  const blogIndex = useBlogIndex()

  const post = useMemo(() => {
    return blogIndex.data?.posts.find(
      (p) => p.slug === slug && p.language === language,
    )
  }, [blogIndex.data, language, slug])

  return useMemo(
    () => ({
      post,
      loading: blogIndex.isValidating,
    }),
    [blogIndex, post],
  )
}
