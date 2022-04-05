import { PropsPassedToSuggestion, Suggestion } from '@lib/quickOpen/types'
import { FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa'
import { defineMessages, useIntl } from 'react-intl'
import QuickOpenSuggestionThemeSwapTitle from '@components/QuickOpenSuggestionThemeSwapTitle'
import {
  FiEdit,
  FiHeart,
  FiHome,
  FiMessageCircle,
  FiPackage,
  FiUser,
} from 'react-icons/fi'
import SwapThemeIcon from '@components/SwapThemeIcon'

const messages = defineMessages({
  myBlog: {
    defaultMessage: 'Meu blog',
    id: 'IPAhkW',
  },
  home: {
    defaultMessage: 'Início',
    id: 'm42V4+',
  },
  projects: {
    defaultMessage: 'Projetos',
    id: '6EqXIC',
  },
  aboutMe: {
    defaultMessage: 'Sobre Mim',
    id: 'xbP7qa',
  },
  kindWords: {
    defaultMessage: 'Espaço da gentileza',
    id: 'nhjJTT',
  },
  contact: {
    defaultMessage: 'Contato',
    id: 'SgXTSK',
  },
})

const formatedMessageComponent = (message: {
  id: string
  defaultMessage: string
}): React.FC<PropsPassedToSuggestion> => {
  const Component: React.FC<PropsPassedToSuggestion> = ({
    context: { highlightText },
  }) => {
    const intl = useIntl()

    return highlightText(intl.formatMessage(message)) as any
  }
  Component.displayName = `intlMessage(${message.id})`

  return Component
}

export const staticSuggestions: Suggestion[] = [
  {
    id: 'blog',
    href: '/blog',
    nextHref: '/blog',
    icon: { type: 'component', component: FiEdit },
    keywords: ['Blog'],
    title: formatedMessageComponent(messages.myBlog),
    showDescription: false,
  },
  {
    id: 'home',
    href: '/#hero',
    localize: true,
    nextHref: '/',
    icon: { type: 'component', component: FiHome },
    keywords: ['Home', 'Inicio'],
    title: formatedMessageComponent(messages.home),
    showDescription: false,
    useAsFallback: true,
  },
  {
    id: 'projects',
    href: '/#projects',
    localize: true,
    icon: { type: 'component', component: FiPackage },
    keywords: ['Projetos', 'project'],
    title: formatedMessageComponent(messages.projects),
    showDescription: false,
    useAsFallback: true,
  },
  {
    id: 'about-me',
    href: '/#about-me',
    localize: true,
    icon: { type: 'component', component: FiUser },
    keywords: ['Sobre mim', 'About me'],
    title: formatedMessageComponent(messages.aboutMe),
    showDescription: false,
    useAsFallback: true,
  },
  {
    id: 'kindWords',
    href: '/#kind-words',
    localize: true,
    icon: { type: 'component', component: FiHeart },
    keywords: ['Mensagens de quem já trabalhou comigo'],
    title: formatedMessageComponent(messages.kindWords),
    showDescription: false,
    useAsFallback: true,
  },
  {
    id: 'contact',
    href: '/#contact',
    localize: true,
    icon: { type: 'component', component: FiMessageCircle },
    keywords: ['Text', 'message'],
    title: formatedMessageComponent(messages.contact),
    showDescription: false,
    useAsFallback: true,
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
    id: 'dribbble',
    href: 'https://dribbble.com/vinpac/',
    icon: { type: 'component', component: FaDribbble },
    keywords: ['Dribbble', 'art', 'design', 'vinpac'],
    title: 'Dribbble',
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
    icon: { type: 'component', component: SwapThemeIcon },
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
    useAsFallback: true,
    title: QuickOpenSuggestionThemeSwapTitle,
    showDescription: false,
  },
]
