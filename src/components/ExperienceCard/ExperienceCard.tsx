import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import { TAG_COLORS } from '../../constants/app'

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
  tags?: string[]
}

export default function ExperienceCard(props: Props) {
  const isMobile = window.innerWidth <= 640
  const cardRef = useRef(null)
  const [iframeStyles, setIframeStyles] = useState<React.CSSProperties>({})

  useEffect(() => {
    if (cardRef && cardRef.current) {
      const { right } = (cardRef.current as HTMLDivElement).getBoundingClientRect()
      if (!isMobile && right && window.innerWidth - right < 640) {
        setIframeStyles({
          left: '-36rem',
          width: '32vw',
        })
      }
    }
  }, [])

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
    img,
    tags
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

  const parseTagColor = (tag: string) => {

  }

  return (
    <div
      className="experience-card__wrapper"
      onMouseEnter={() => setHover(title)}
      onMouseLeave={() => setHover('')}
      style={{
        filter: hover ? hover === title ? 'brightness(1)' : 'brightness(.3)' : 'brightness(1)',
        paddingRight: hover ? hover === title && !isMobile && !iframeStyles.left ? '2rem' : '0' : '0',
        paddingLeft: hover ? hover === title && !isMobile && iframeStyles.left ? '2rem' : '0' : '0',
        animationDelay: `${delay || '0'}`,
        zIndex: hover ? hover === title ? '3' : '1' : '1',
      }}
    >
      <div className="experience-card__container" ref={cardRef}>
        <div className="experience-card__text">
          <h2 className="experience-card__title">{title}</h2>
          <h3 className="experience-card__subtitle">{subtitle}</h3>
          {tags && tags.length &&
            <div className='experience-card__tags'>
              {tags?.map((tag, i) => <p className='experience-card__tag' style={{ backgroundColor: TAG_COLORS[tag] }} key={i}>{tag}</p>)}
            </div>
          }
          <p className="experience-card__description">{description}</p>
        </div>
        {cover ? <img src={cover} alt="Experience Image" className="experience-card__image" /> : ''}
        <div className="experience-card__btns">
          {project ? <Button
            label='Visit project'
            handleClick={goToApp}
            style={{ color: '#000' }}
          /> : ''}
          {repo ? <Button
            label='Go to repo'
            handleClick={goToRepo}
            style={{ color: '#000' }}
          /> : ''}
        </div>
      </div>
      <div className="experience-card__iframe-container" style={iframeStyles}>
        {img ? <img src={img} alt="Experience Image" className="experience-card__image" />
          : <iframe src={iframe} className="experience-card__iframe"></iframe>}
      </div>
    </div>
  )
}