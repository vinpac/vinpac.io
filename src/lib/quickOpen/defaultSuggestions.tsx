import { Suggestion } from 'lib/quickOpen/types'
import { FaGithub, FaTwitter, FaMoon } from 'react-icons/fa'
import { MdEdit, MdHome } from 'react-icons/md'
import { defineMessages, FormattedMessage } from 'react-intl'
import QuickOpenSuggestionThemeSwapTitle from 'components/QuickOpenSuggestionThemeSwapTitle'

const messages = defineMessages({
  myBlog: {
    id: 'defaultSuggestions/myBlog',
    defaultMessage: 'Meu blog',
  },
  home: {
    id: 'defaultSuggestions/home',
    defaultMessage: 'Início',
  },
})

const formatedMessageComponent = (message: {
  id: string
  defaultMessage: string
}): React.FC => {
  const component: React.FC = () => <FormattedMessage {...message} />
  component.displayName = `intlMessage(${message.id})`

  return component
}

export const staticSuggestions: Suggestion[] = [
  {
    id: 'blog',
    href: '/blog',
    nextHref: '/blog',
    icon: { type: 'component', component: MdEdit },
    keywords: ['Blog'],
    title: formatedMessageComponent(messages.myBlog),
    showDescription: false,
  },
  {
    id: 'home',
    href: '/',
    nextHref: '/',
    icon: { type: 'component', component: MdHome },
    keywords: ['Home', 'Inicio'],
    title: formatedMessageComponent(messages.home),
    showDescription: false,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/vinpac98/',
    icon: { type: 'component', component: FaTwitter },
    keywords: ['Twitter', 'tweet', 'vinpac'],
    title: 'Twitter',
    showDescription: false,
  },
  {
    id: 'github',
    href: 'https://github.com/vinpac/',
    icon: { type: 'component', component: FaGithub },
    keywords: ['Github', 'git', 'vinpac'],
    title: 'Github',
    showDescription: false,
  },
  {
    id: 'theme',
    as: 'button',
    icon: { type: 'component', component: FaMoon },
    keywords: [
      'Tema',
      'Theme',
      'Dark',
      'Light',
      'Claro',
      'Escuro',
      'Modo',
      'Mode',
    ],
    title: QuickOpenSuggestionThemeSwapTitle,
    showDescription: false,
  },
]
