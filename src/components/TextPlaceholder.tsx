import React from 'react'
import cx from 'classnames'
import BlockPlaceholder from '@components/BlockPlaceholder'

export interface TextPlaceholderProps {
  className?: string
}

const TextPlaceholder: React.FC<TextPlaceholderProps> = ({ className }) => {
  return (
    <div className="h-full relative">
      <span className="invisible">A</span>
      <BlockPlaceholder
        className={cx(className, 'text-placeholder text-gray-400')}
      />
      <style jsx global>{`
        .text-placeholder {
          height: 1em;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          margin-top: auto;
          margin-bottom: auto;
        }
      `}</style>
    </div>
  )
}

TextPlaceholder.displayName = 'TextPlaceholder'

export { TextPlaceholder }
export default TextPlaceholder
