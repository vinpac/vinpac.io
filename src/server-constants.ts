import { normalizeNotionId } from 'lib/notion/utils'
import { required } from 'lib/utils/required'

export const BLOG_INDEX_ID = normalizeNotionId(
  required('env NOTION_BLOG_INDEX_ID', process.env.NOTION_BLOG_INDEX_ID),
)
