import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import Button, { ButtonProps } from './Button'

const ButtonLink: React.FC<
  ButtonProps & DetailedHTMLProps<AnchorHTMLAttributes<'a'>, 'a'>
> = (props) => {
  return <Button {...(props as any)} as="a" />
}

export default ButtonLink
