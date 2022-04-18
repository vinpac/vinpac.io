import { group } from '@lib/windstitch'
import { w } from 'windstitch'

export default group({
  Card: w.div(
    `relative p-8 mb-8 bg-white border border-white
    rounded-lg shadow dark:bg-gray-800 dark:border-gray-600`,
  ),
  Stars: w.div('flex mb-4 space-x-2 text-xl text-yellow-500'),
  Message: w.p('mb-5 text-lg italic text-gray-800 dark:text-gray-200'),
  Author: w.div('flex items-center'),
  AuthorAvatarCircle: w.div('w-10 h-10 mr-3 bg-orange-500 rounded-full'),
  AuthorAvatarImage: w.img('w-full rounded-full'),
  AuthorName: w.h4('font-medium text-gray-700 text-md dark:text-white'),
  AuthorRole: w.p('text-sm font-medium text-gray-400'),
})
