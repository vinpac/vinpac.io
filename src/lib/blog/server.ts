import {
  BlogPost,
  BlogIndex,
  BlogTableRow,
  BlogPostPageIndex,
} from 'lib/notion/types'
import { fetchTableFromNotion, fetchPageFromNotion } from 'lib/notion/fetch'
import { BLOG_INDEX_ID } from 'server-constants'
import { NotionPageNotFound } from 'lib/notion/errors'
import { blogRowToPost } from 'lib/blog/helpers'

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
): Promise<BlogPostPageIndex> => {
  const tableRows = await fetchTableFromNotion<BlogTableRow>(BLOG_INDEX_ID)
  const selectedRow = tableRows.find((page) => page.Slug === slug)

  if (!selectedRow) {
    throw new NotionPageNotFound(
      `Blog post with slug "${slug}" not found`,
      'slug',
      slug,
    )
  }

  const post = blogRowToPost(selectedRow)
  const notionBlockMap = await fetchPageFromNotion(post.id)

  return {
    post,
    notionBlockMap,
  }
}
