import React from 'react'
import Linkedin from '../../assets/icons/linkedin.svg'
import Github from '../../assets/icons/github.svg'
import Instagram from '../../assets/icons/instagram.svg'

type Props = {}

export default function Contact({ }: Props) {
  return (
    <div className="contact__container">
      <h1 className="contact__title">Get in touch</h1>
      <p className="contact__text">Hey there! Thanks for swinging by and wanting to chat. I'm all ears and super excited to hear from you. Here are a few ways to reach out:</p>
      <h2 className="contact__subtitle">Shoot me an email</h2>
      <p className="contact__text">Feeling old-school? You can send me an email at <a href='mailto:guille.sotelo.cloud@gmail.com'>guille.sotelo.cloud@gmail.com</a>. Don't stress; I'll reply in a language even a compiler would appreciate - no code-breaking skills needed!</p>
      <h2 className="contact__subtitle">Hit me up on social</h2>
      <p className="contact__text">Catch me on the flip side of the internet! You can find me kicking it on platforms like:</p>
      <div className="contact__social">
        <a target='_blank' href='https://www.linkedin.com/in/guillermosotelo'><img src={Linkedin} alt="Linkedin" className="contact__social-svg" /></a>
        <a target='_blank' href='https://github.com/guillesotelo'><img src={Github} alt="Github" className="contact__social-svg" /></a>
        <a target='_blank' href='https://www.instagram.com/gui.lle_'><img src={Instagram} alt="Instagram" className="contact__social-svg" /></a>
      </div>
      <p className="contact__text" style={{ textAlign: 'center', marginTop: '3rem' }}>Thanks a bunch for getting in touch. I'm looking forward to our digital rendezvous!</p>
    </div>
  )
}