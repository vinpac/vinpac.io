import React from 'react'
import { FaStar } from 'react-icons/fa'
import {
  Card,
  Stars,
  Message,
  Author,
  AuthorAvatarCircle,
  AuthorAvatarImage,
  AuthorName,
  AuthorRole,
} from './KindMessage.styled'

interface Props {
  className?: string
  authorName: string
  authorRole: string
  authorAvatarURL?: string
  company: string
  takenFrom: string
  message: string | React.ReactNode
  translatedByMe?: boolean
}

export const KindMessage: React.FC<Props> = ({
  className,
  authorName,
  authorRole,
  authorAvatarURL,
  company,
  message,
}) => {
  return (
    <div className={className}>
      <Card>
        <Stars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Stars>
        <Message>&quot;{message}&quot;</Message>

        <Author>
          {authorAvatarURL && (
            <AuthorAvatarCircle>
              <AuthorAvatarImage src={authorAvatarURL} alt={authorName} />
            </AuthorAvatarCircle>
          )}

          <div>
            <AuthorName>{authorName}</AuthorName>
            <AuthorRole>
              {authorRole}
              {company && ` @ ${company}`}
            </AuthorRole>
          </div>
        </Author>
      </Card>
    </div>
  )
}

export type KindMessageProps = Props
