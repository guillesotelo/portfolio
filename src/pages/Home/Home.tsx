import React, { useState } from 'react'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

type Props = {}

export default function ({ }: Props): JSX.Element {
  const [hover, setHover] = useState('')

  return (
    <div className="home__container">
      <div className="home__experiences">
        <ExperienceCard
          title='CV Maker'
          subtitle='Sigma Connectivity Engineering'
          description="A platform to build your entire resume with a bunch of built-in editing tools. For manager roles, there's also modules to manage employee and client data with activity and statistics modules."
          image=''
          iframe='https://sigma-cvmaker.vercel.app/'
          repo='https://github.com/guillesotelo/sigma-cvmaker'
          project='https://sigma-cvmaker.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='0s'
        />
        <ExperienceCard
          title='CtrlShift'
          subtitle=''
          description="Mobile and desktop app for finances control, for home and small businesses."
          image=''
          iframe='https://ctrlshift-app.vercel.app/'
          repo='https://github.com/guillesotelo/ctrlshift-app'
          project='https://ctrlshift-app.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.1s'
        />
        <ExperienceCard
          title='E.A.S.Y Notes'
          subtitle=''
          description="A simple mobile app to control and take notes on baby's activity. Inspired on the book 'Secrets of the Baby Whisperer'"
          image=''
          iframe='https://easybaby-notes.vercel.app/'
          repo='https://github.com/guillesotelo/easybaby-notes'
          project='https://easybaby-notes.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.2s'
        />
        <ExperienceCard
          title='DownDetector'
          subtitle='Volvo Cars'
          description="Customizable API endpoint checker with admin panel."
          image=''
          iframe='https://github.com/guillesotelo/down-detector'
          repo='https://github.com/guillesotelo/down-detector'
          project='https://github.com/guillesotelo/down-detector'
          hover={hover}
          setHover={setHover}
          delay='.3s'
        />
        <ExperienceCard
          title='by Dany Garcia'
          subtitle='Daniela Garcia'
          description="Creative, Aware, Inspire, is the slogan for this fantastic blog written by Daniela. It represents a landing page for the artist, her blog and a platform for her unique business called 'Bespoken'."
          image=''
          iframe='https://bydanygarcia.vercel.app/'
          repo='https://github.com/guillesotelo/bydanygarcia'
          project='https://bydanygarcia.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Code Compiler'
          subtitle=''
          description="Write, compile and run your code with this both simple and complete editor capable of work with 40+ languages."
          image=''
          iframe='https://code-compiler-v2.vercel.app/'
          repo='https://github.com/guillesotelo/code-compiler'
          project='https://code-compiler-v2.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Flying Game'
          subtitle=''
          description="Test your ability to fly an aeroplane with this simulation made with Three.js."
          image=''
          iframe='https://flying-game.vercel.app'
          repo='https://github.com/guillesotelo/flying-game'
          project='https://flying-game.vercel.app'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='HTML to MD Converter'
          subtitle=''
          description="With a pretty straightforward title, this Python application is made to run in a backend server and fetch Confluence pages to convert them into Markdown."
          image=''
          iframe='https://github.com/guillesotelo/html-to-md-converter'
          repo='https://github.com/guillesotelo/html-to-md-converter'
          project='https://github.com/guillesotelo/html-to-md-converter'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='ML Self-Driving'
          subtitle=''
          description="This is a self-driving car simulation powered by machine learning and implemented in JavaScript. The project focuses on training an AI model to control a car and navigate it safely through an environment with other cars, avoiding collisions."
          image=''
          iframe='https://ml-self-driving.vercel.app/'
          repo='https://github.com/guillesotelo/ml-self-driving'
          project='https://ml-self-driving.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Angelita'
          subtitle='Angela Sanguino'
          description="Landing and web app for psichology consulting and sessions."
          image=''
          iframe='https://angelita.vercel.app/'
          repo='https://github.com/guillesotelo/angelita'
          project='https://angelita.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Space Punks'
          subtitle=''
          description="An infinite fight against enemy space ships, inspired in the great Space Invaders from Nintendo. It is made with pure JavaScript and the use of canva."
          image=''
          iframe='https://canvas-space-punks.vercel.app/'
          repo='https://github.com/guillesotelo/space-punks'
          project='https://canvas-space-punks.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Canvas Shooting'
          subtitle=''
          description="An intense shooting game made with canva and Vanilla JavaScript."
          image=''
          iframe='https://canvas-shooting.vercel.app/'
          repo='https://github.com/guillesotelo/canvas-shooting'
          project='https://canvas-shooting.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Boxy'
          subtitle=''
          description="Fun and simple game developed using Three.js"
          image=''
          iframe='https://threejs-boxy.vercel.app/'
          repo='https://github.com/guillesotelo/threejs-boxy'
          project='https://threejs-boxy.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Magis Hogar Home'
          subtitle='Magis Hogar'
          description="A landing page and client platform for the everyday real state investments."
          image=''
          iframe='https://magishogar-public.vercel.app/'
          repo='https://github.com/guillesotelo/magishogar'
          project='https://magishogar-public.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='Schedy'
          subtitle=''
          description="Appointment Calendar App for a hairdressing, made with pure JavaScript, React and Mongo."
          image=''
          iframe='https://schedy.vercel.app/'
          repo='https://github.com/guillesotelo/schedy'
          project='https://schedy.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
      </div>
    </div>
  )
}