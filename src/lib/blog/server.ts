import {
  BlogPost,
  BlogIndex,
  BlogTableRow,
  BlogPostPageIndex,
} from '@lib/notion/types'
import { fetchTableFromNotion, fetchPageFromNotion } from '@lib/notion/fetch'
import { BLOG_INDEX_ID } from '@server-constants'
import { NotionPageNotFound } from '@lib/notion/errors'
import { blogRowToPost } from '@lib/blog/helpers'

export const getBlogIndex = async (): Promise<BlogIndex> => {
  const tableRows = await fetchTableFromNotion<BlogTableRow>(BLOG_INDEX_ID)

  const tags = new Set<string>()
  const folders = new Set<string>()
  const posts: BlogPost[] = []
  tableRows.forEach((row) => {
    if (!row.Slug || !row.Page) {
      return
    }

    if (row.Tags?.length) {
      row.Tags.forEach((tag) => tags.add(tag))
    }

    if (row.Folder) {
      folders.add(row.Folder)
    }

    posts.push(blogRowToPost(row))
  })

  return {
    posts,
    tags: Array.from(tags),
    folders: Array.from(folders),
  }
}

export const getBlogPostBySlug = async (
  slug: string,
  language?: string,
): Promise<BlogPostPageIndex> => {
  const posts = await fetchTableFromNotion<BlogTableRow>(
    BLOG_INDEX_ID,
  ).then((rows) => rows.map(blogRowToPost))
  const post = posts.find((post) => {
    const isSameSlug = post.slug === slug

    if (language) {
      return isSameSlug && post.language === language
    }

    return isSameSlug
  })

  if (!post) {
    throw new NotionPageNotFound(
      `Blog post with slug "${slug}" and language "${language}" not found`,
      'slug,language',
      `${slug},${language}`,
    )
  }

  const notionBlockMap = await fetchPageFromNotion(post.id)

  return {
    post,
    notionBlockMap,
  }
}
