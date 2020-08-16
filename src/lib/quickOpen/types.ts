import { ColorName } from 'lib/theme'

export interface BuildSuggestionsListFn {
  (input: string): Promise<Suggestion[]>
}

export interface Suggestion {
  id: string
  title: string
  description?: string
  showDescription?: boolean
  nextHref?: string
  keywords: Array<string | number>
  href: string
  icon: IconComponent | IconAsset | ColorIcon
}

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
