import { staticSuggestions } from 'lib/quickOpen/defaultSuggestions'
import { getBlogIndexInBrowser } from 'lib/blog/browser'
import {
  Suggestion,
  BuildSuggestionsListFn,
  LinkSuggestion,
} from 'lib/quickOpen/types'
import { escapeRegex } from 'lib/utils/regexp'

export const buildSearchRegex = (input: string): RegExp => {
  const trimmed = escapeRegex(input.trim())
  const parts = trimmed.split(' ')
  return new RegExp(
    `(${trimmed}|${parts.join('_')}|${parts.join('-')}|${trimmed.replace(
      /(\\-|_|\\\/)/g,
      ' ',
    )})`,
    'i',
  )
}

const suggestionsById: { [suggestionId: string]: Suggestion } = {}
const allSuggestions: Suggestion[] = [...staticSuggestions]
allSuggestions.forEach((suggestion) => {
  suggestionsById[suggestion.id] = suggestion
})
let blogSuggestionsBuilt = false

const buildBlogSuggestions = async (): Promise<void> => {
  if (blogSuggestionsBuilt) {
    return
  }
  blogSuggestionsBuilt = true

  const blogIndex = await getBlogIndexInBrowser()
  blogIndex.posts.forEach((post) => {
    const keywords: string[] = ['post', ...post.tags.map((tag) => `#${tag}`)]

    if (post.folder) {
      keywords.push(`${post.folder}/`)
    }

    allSuggestions.push({
      id: `post/${post.id}`,
      href: `/blog/${post.slug}`,
      icon: { type: 'color', color: post.color },
      keywords: keywords,
      title: post.name,
      nextHref: '/blog/[slug]',
      description: post.description || '',
    })
    const suggestion = allSuggestions[allSuggestions.length - 1]
    suggestionsById[suggestion.id] = suggestion
  })
}

export const buildSuggestionsList: BuildSuggestionsListFn = async (
  input: string,
) => {
  if (input.trim().replace(' ', '') === '') {
    return ['home', 'blog', 'twitter', 'github', 'theme'].map(
      (id) => suggestionsById[id],
    )
  }

  const searchRegex = buildSearchRegex(input)
  await buildBlogSuggestions()

  const scoreMap: { [id: string]: number } = {}
  const suggestions: Suggestion[] = []

  allSuggestions.forEach((suggestion) => {
    let score = 0

    suggestion.keywords.forEach((keyword) => {
      if (searchRegex.test(String(keyword))) {
        score += 1
      }
    })

    if (
      typeof suggestion.title === 'string' &&
      searchRegex.test(suggestion.title)
    ) {
      score += 1
    }

    if (suggestion.description && searchRegex.test(suggestion.description)) {
      score += 1
    }

    const { href } = suggestion as LinkSuggestion
    if (href && searchRegex.test(href)) {
      score += 1
    }

    if (score > 0) {
      suggestions.push(suggestion)
      scoreMap[suggestion.id] = score
    }
  })

  return suggestions.sort((s1, s2) => {
    const score1 = scoreMap[s1.id]
    const score2 = scoreMap[s2.id]

    return score2 - score1
  })
}
