import { BlogTableRow, BlogPost } from '@lib/notion'

export const blogRowToPost = (row: BlogTableRow): BlogPost => {
  return {
    id: row.id,
    slug: row.Slug,
    name: row.Page,
    description: row.Description || null,
    date: row.Date || null,
    isPublished: Boolean(row.Published),
    tags: row.Tags || [],
    color: row.Color || 'gray',
    folder: row.Folder,
    language: row.Lingua || 'en-US',
  }
}
