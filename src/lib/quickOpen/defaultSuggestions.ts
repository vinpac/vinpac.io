import { Suggestion } from 'lib/quickOpen/types'
import { FaGithub, FaTwitter, FaMoon } from 'react-icons/fa'
import { MdEdit, MdHome } from 'react-icons/md'

export const staticSuggestions: Suggestion[] = [
  {
    id: 'blog',
    href: '/blog',
    nextHref: '/blog',
    icon: { type: 'component', component: MdEdit },
    keywords: ['Blog', 'Meu blog'],
    title: 'Meu Blog',
    showDescription: false,
  },
  {
    id: 'home',
    href: '/',
    nextHref: '/',
    icon: { type: 'component', component: MdHome },
    keywords: ['Home', 'Inicio'],
    title: 'Início',
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
    keywords: ['Dark', 'Tema', 'Ativar'],
    title: 'Ativar modo Dark',
    showDescription: false,
  },
]
