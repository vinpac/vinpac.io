import { BlogIndex } from 'lib/notion'

let cachedBlogIndex: BlogIndex | undefined

export const getBlogIndexInBrowser = async (): Promise<BlogIndex> => {
  if (cachedBlogIndex) {
    return cachedBlogIndex
  }

  const res = fetch('/api/blog')

  const blogIndex = ((await res).json() as any) as BlogIndex

  cachedBlogIndex = blogIndex

  return cachedBlogIndex
}

export const updateBlogIndexCacheInBrowser = (
  blogIndex: BlogIndex | undefined,
): void => {
  cachedBlogIndex = blogIndex
}
