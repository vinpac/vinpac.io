import wind from '@lib/wind'

export const Card = wind.div(
  `relative p-8 mb-8 bg-white border border-white
  rounded-lg shadow dark:bg-gray-800 dark:border-gray-600`,
)

export const Stars = wind.div('flex mb-4 space-x-2 text-xl text-yellow-500')
export const Message = wind.p(
  'mb-5 text-lg italic text-gray-800 dark:text-gray-200',
)
export const Author = wind.div('flex items-center')
export const AuthorAvatarCircle = wind.div(
  'w-10 h-10 mr-3 bg-orange-500 rounded-full',
)
export const AuthorAvatarImage = wind.img('w-full rounded-full')
export const AuthorName = wind.h4(
  'font-medium text-gray-700 text-md dark:text-white',
)
export const AuthorRole = wind.p('text-sm font-medium text-gray-400')
