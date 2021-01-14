import React from 'react'
import cx from 'classnames'
import { FiGlobe } from 'react-icons/fi'
import ButtonLink from './ButtonLink'

interface Props {
  className?: string
}

const LanguageSwitch: React.FC<Props> = ({ className }) => {
  return (
    <ButtonLink className={cx('border', className)}>
      <FiGlobe className="inline-block mr-2" />
      PT-BR 🇧🇷
    </ButtonLink>
  )
}

export type LanguageSwitchProps = Props
export default LanguageSwitch
