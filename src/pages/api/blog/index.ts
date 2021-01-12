import { NextApiRequest, NextApiResponse } from 'next'
import { getBlogIndex } from '@lib/blog/server'

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const json = await getBlogIndex()

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.json(json)
}
