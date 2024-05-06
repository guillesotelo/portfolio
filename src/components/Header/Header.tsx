import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const [page, setPage] = useState('')
  const history = useHistory()

  useEffect(() => {
    setPage(history.location.pathname)
  }, [window.location.href])

  return (
    <div className="header__container">
      <Button
        label='Experiences'
        handleClick={() => history.push('/')}
        bgColor='transparent'
        textColor='#c1b7e0'
        style={{
          border: page === '/' ? '1px solid #c1b7e0' : ''
        }}
      />
      <Button
        label='Clients & Projects'
        handleClick={() => history.push('/clients')}
        bgColor='transparent'
        textColor='#c1b7e0'
        style={{
          border: page === '/clients' ? '1px solid #c1b7e0' : ''
        }}
      />
      <Button
        label='About'
        handleClick={() => history.push('/about')}
        bgColor='transparent'
        textColor='#c1b7e0'
        style={{
          border: page === '/about' ? '1px solid #c1b7e0' : ''
        }}
      />
      <Button
        label='Contact'
        handleClick={() => history.push('/contact')}
        bgColor='transparent'
        textColor='#c1b7e0'
        style={{
          border: page === '/contact' ? '1px solid #c1b7e0' : ''
        }}
      />
    </div>
  )
}