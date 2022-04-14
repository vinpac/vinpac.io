import { BlogIndex, BlogPost } from '@lib/notion'
import { SWRResponse } from 'swr'
import { ValidLocale } from '@lib/i18n'
import { useMemo } from 'react'

export const useBlogIndex = (): SWRResponse<BlogIndex, Error> => {
  throw new Error('Not implemented yet')
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
