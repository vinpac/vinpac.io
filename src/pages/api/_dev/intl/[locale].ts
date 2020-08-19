import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import glob from 'glob'
import fs from 'fs'
import { promisify } from 'util'

const globAsync = promisify(glob)
const readfile = promisify(fs.readFile)
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (process.env.NODE_ENV === 'production') {
    res.json({})
  }

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  const locale = String(req.query.locale)
  const dir = path.resolve('src', 'messages', locale)
  const paths = await globAsync(path.join(dir, '**', '*.json'))

  const messages: Record<string, string> = {}
  await Promise.all(
    paths.map(async (filepath: string) => {
      const idStart = path.relative(dir, filepath).replace(/\.json$/, '')
      const fileMessages = JSON.parse(await readfile(filepath, 'utf8')) || {}

      Object.keys(fileMessages).forEach((messageId) => {
        messages[`${idStart}/${messageId}`] = fileMessages[messageId]
      })
    }),
  )

  res.json(messages)
}
