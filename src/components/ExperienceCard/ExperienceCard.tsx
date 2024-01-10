import React from 'react'
import Button from '../Button/Button'

type Props = {
  title: string
  subtitle: string
  description: string
  cover: string
  iframe?: string
  repo?: string
  project?: string
  hover: string
  setHover: (s: string) => void
  delay?: string
  img?: string
}

export default function ExperienceCard(props: Props) {
  const isMobile = window.innerWidth < 900

  const {
    title,
    subtitle,
    description,
    cover,
    iframe,
    repo,
    project,
    hover,
    setHover,
    delay,
    img
  } = props

  const goToRepo = () => {
    const anchor = document.createElement('a')
    anchor.target = '_blank'
    anchor.href = repo || ''
    anchor.click()
  }

  const goToApp = () => {
    const anchor = document.createElement('a')
    anchor.target = '_blank'
    anchor.href = project || ''
    anchor.click()
  }

  return (
    <div
      className="experience-card__wrapper"
      onMouseEnter={() => setHover(title)}
      onMouseLeave={() => setHover('')}
      style={{
        filter: hover ? hover === title ? 'brightness(1)' : 'brightness(.3)' : 'brightness(1)',
        paddingRight: hover ? hover === title && !isMobile ? '2rem' : '0' : '0',
        animationDelay: `${delay || '0'}`,
        zIndex: hover ? hover === title ? '3' : '1' : '1',
      }}
    >
      <div className="experience-card__container">
        <div className="experience-card__text">
          <h2 className="experience-card__title">{title}</h2>
          <h3 className="experience-card__subtitle">{subtitle}</h3>
          <p className="experience-card__description">{description}</p>
        </div>
        {cover ? <img src={cover} alt="Experience Image" className="experience-card__image" /> : ''}
        <div className="experience-card__btns">
          {project ? <Button
            label='Visit project'
            handleClick={goToApp}
          /> : ''}
          {repo ? <Button
            label='Go to repo'
            handleClick={goToRepo}
          /> : ''}
        </div>
      </div>
      <div className="experience-card__iframe-container">
        {img ? <img src={img} alt="Experience Image" className="experience-card__image" />
          : <iframe src={iframe} className="experience-card__iframe"></iframe>}
      </div>
    </div>
  )
}