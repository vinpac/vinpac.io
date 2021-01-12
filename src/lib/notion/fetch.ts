import { NotionPageBlockMap } from '@lib/notion/types'

export const fetchTableFromNotion = async <Row>(
  pageId: string,
): Promise<Row[]> => {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${pageId}`)
  return await res.json()
}

export const fetchPageFromNotion = async (
  pageId: string,
): Promise<NotionPageBlockMap> => {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
  return await res.json()
}
