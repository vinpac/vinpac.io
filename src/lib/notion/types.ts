import { ColorName } from 'lib/theme'
import { ValidLocale } from 'lib/i18n'

export interface BlogPost {
  id: string
  slug: string
  name: string
  isPublished: boolean
  date: string | null
  color: ColorName
  description: string | null
  tags: string[]
  language: ValidLocale
  folder?: string
}

export interface BlogIndex {
  posts: BlogPost[]
  tags: string[]
  folders: string[]
}

export type NotionPageBlockMap = any

export interface BlogTableRow {
  id: string
  Slug: string
  Tags?: string[]
  Description: string
  Date: string
  Color: ColorName
  Page: string
  Published?: boolean
  Folder?: string
  Lingua?: ValidLocale
}

export interface BlogPostPageIndex {
  post: BlogPost
  notionBlockMap: NotionPageBlockMap
}
