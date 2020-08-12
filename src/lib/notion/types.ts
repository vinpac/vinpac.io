import { AppColorName } from 'lib/css'

export interface BlogPost {
  id: string
  slug: string
  name: string
  isPublished: boolean
  date: string | null
  color: AppColorName
  description: string | null
  tags: string[]
}

export interface BlogIndex {
  posts: BlogPost[]
  tags: string[]
}

export type NotionPageBlockMap = any

export interface BlogTableRow {
  id: string
  Slug: string
  Tags?: string[]
  Description: string
  Date: string
  Color: AppColorName
  Page: string
  Published?: boolean
}

export interface BlogPostPageIndex {
  post: BlogPost
  notionBlockMap: NotionPageBlockMap
}
