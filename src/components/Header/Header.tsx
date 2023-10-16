import React from 'react'
import Button from '../Button/Button'
import { useHistory } from 'react-router-dom'

type Props = {}

export default function Header({ }: Props) {
  const history = useHistory()
  return (
    <div className="header__container">
      <Button
        label='About'
        handleClick={() => history.push('/about')}
        bgColor='transparent'
        textColor='lightgray'
      />
      <Button
        label='Contact'
        handleClick={() => history.push('/contact')}
        bgColor='transparent'
        textColor='lightgray'
      />
    </div>
  )
}