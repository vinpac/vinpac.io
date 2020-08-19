import { ColorName } from 'lib/theme'

export interface BuildSuggestionsListFn {
  (input: string): Promise<Suggestion[]>
}

export interface BaseSuggestion {
  id: string
  title: string | React.ComponentType
  description?: string
  showDescription?: boolean
  keywords: Array<string | number>
  icon: IconComponent | IconAsset | ColorIcon
}
export interface LinkSuggestion extends BaseSuggestion {
  nextHref?: string
  href: string
}
export interface ButtonSuggestion extends BaseSuggestion {
  as: 'button'
}

export type Suggestion = ButtonSuggestion | LinkSuggestion

interface IconComponent {
  type: 'component'
  component: React.ComponentType<{ size?: number; className?: string }>
}

interface IconAsset {
  type: 'image'
  source: string
}

interface ColorIcon {
  type: 'color'
  color: ColorName
}
