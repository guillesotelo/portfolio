import React from 'react'
import Profile from '../../assets/images/guille.png'
import { useHistory } from 'react-router-dom'

export default function About() {
  const isMobile = window.innerWidth < 640
  const history = useHistory()

  return (
    <div className="about__container">
      <div className="about__col">
        <h1 className="about__title">A bit of me</h1>
        {isMobile ? <img src={Profile} alt="Linkedin" className="about__image" /> : ''}
        <p className="about__text">
          Hi! I'm Guille, and I'm thrilled you stopped by my corner of the internet.
        </p>
        <p className="about__text">
          So, what's my deal? Well, I'm a tech enthusiast, and all-around digital explorer. In simpler terms, I'm a software developer with a passion for turning caffeine into code.
        </p>
        <p className="about__text">
          When I'm not diving into the world of ones and zeros, you can find me in my natural habitat spending some family time, investigating new technologies or designing and building furniture for my home that may not really be necessary.
        </p>
        <p className="about__text">
          I believe in the power of technology to make our lives better, and I'm here to share my digital adventures with you. From front-end wizardry to back-end sorcery, I'm always up for a new challenge and a good laugh along the way.
        </p>
        {/* <p className="about__text">
          Join me on this journey through the ever-evolving world of bits and bytes. Together, we'll uncover the secrets of software and make technology work its magic for us.
        </p> */}
        <p className="about__text">
          Thanks for being a part of this geeky expedition. Let's <a style={{ cursor: 'pointer' }} onClick={() => history.push('/contact')}>connect & collaborate!</a>
        </p>
      </div>
      {!isMobile ?
        <div className="about__col">
          <img src={Profile} style={{ margin: '1rem' }}  alt="Linkedin" className="about__image" />
        </div>
        : ''}
    </div>
  )
}