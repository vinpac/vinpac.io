import React from 'react'
import { FaStar } from 'react-icons/fa'
import s from './KindMessage.styled'

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
      <s.Card>
        <s.Stars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </s.Stars>
        <s.Message>&quot;{message}&quot;</s.Message>

        <s.Author>
          {authorAvatarURL && (
            <s.AuthorAvatarCircle>
              <s.AuthorAvatarImage src={authorAvatarURL} alt={authorName} />
            </s.AuthorAvatarCircle>
          )}

          <div>
            <s.AuthorName>{authorName}</s.AuthorName>
            <s.AuthorRole>
              {authorRole}
              {company && ` @ ${company}`}
            </s.AuthorRole>
          </div>
        </s.Author>
      </s.Card>
    </div>
  )
}

export type KindMessageProps = Props
