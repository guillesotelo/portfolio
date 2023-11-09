import React, { useState } from 'react'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import Csa360 from '../../assets/images/csa360.png'
import DeeJS from '../../assets/images/deejs.png'
import HtmlMdConverter from '../../assets/images/confluence.png'
import DownDetector from '../../assets/images/downdetector.png'
import ImageCompressor from '../../assets/images/iamgecompressor.png'
import EasyBaby from '../../assets/images/easybaby.jpg'
import SqliteSearch from '../../assets/images/sqlitesearch.png'
import CanvasShooting from '../../assets/images/canvasshooting.png'
import PyTorch from '../../assets/images/pytorch.png'
import Boxy from '../../assets/images/boxy.png'

type Props = {}

export default function ({ }: Props): JSX.Element {
  const [hover, setHover] = useState('')

  return (
    <div className="home__container">
      <div className="home__text">
        <h1 className="home__title">Welcome to my tech journey!</h1>
        <p className="home__intro">
          Hey there! I'm Guille, a software developer on a mission to make tech awesome.
          <br />
          Each card below tells a unique story of my digital adventures.
        </p>
      </div>
      <div className="home__experiences">
        <ExperienceCard
          title='CV Maker'
          subtitle='Sigma Connectivity Engineering'
          description="A platform to build your entire resume with a bunch of built-in editing tools. For manager roles, there's also modules to manage employee and client data with activity and statistics modules."
          cover=''
          iframe='https://sigma-cvmaker.vercel.app/'
          repo='https://github.com/guillesotelo/sigma-cvmaker'
          project='https://sigma-cvmaker.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='0s'
        />
        <ExperienceCard
          title='Angelita'
          subtitle='Angela Sanguino'
          description="Landing and web app for psichology consulting. It has a complete booking platform with payments connected through Stripe and mailing campaigns."
          cover=''
          iframe='https://angelita.vercel.app/'
          repo='https://github.com/guillesotelo/angelita'
          project='https://angelita.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.1s'
        />
        <ExperienceCard
          title='CtrlShift'
          subtitle=''
          description="Mobile and desktop app for finance control, for home and small businesses. With it you can have a clear picture of your monthly expenses setting budgets for your categories. It also has modules like tasks, notes and the posibility of creating an sharing different ledger books."
          cover=''
          iframe='https://ctrlshift-app.vercel.app/'
          repo='https://github.com/guillesotelo/ctrlshift-app'
          project='https://ctrlshift-app.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.2s'
        />
        <ExperienceCard
          title='by Dany Garcia'
          subtitle='Daniela Garcia'
          description="Creative, Aware, Inspire, is the slogan for this fantastic blog written by Daniela. It represents a landing page for the artist, her blog and a platform for her unique business called 'Bespoken'."
          cover=''
          iframe='https://bydanygarcia.vercel.app/'
          repo='https://github.com/guillesotelo/bydanygarcia'
          project='https://bydanygarcia.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.3s'
        />
        <ExperienceCard
          title='CSA360'
          subtitle=''
          description="All-In-One physical security operations management software that helps security teams enhance management of their operations. Seamlessly link your field activities and admin back office, automate tasks, and save money with this single platform solution."
          cover=''
          iframe='https://www.csa360software.com/'
          repo=''
          project='https://login.csa360.app/'
          img={Csa360}
          hover={hover}
          setHover={setHover}
          delay='.4s'
        />
        <ExperienceCard
          title='DeeJS'
          subtitle=''
          description="A simple but complete DJ app for online mixing with multiple modules and advanced audio control. Made with the professional help of DJ Brian Kuhn."
          cover=''
          iframe='https://deejs.vercel.app/'
          repo='https://github.com/guillesotelo/threejs-boxy'
          project='https://deejs.vercel.app/'
          img={DeeJS}
          hover={hover}
          setHover={setHover}
          delay='.5s'
        />
        <ExperienceCard
          title='Code Compiler'
          subtitle=''
          description="Write, compile and run your code with this excellent code editor, capable of work with 40+ languages. With autosaving and debugging functions."
          cover=''
          iframe='https://code-compiler-v2.vercel.app/'
          repo='https://github.com/guillesotelo/code-compiler'
          project='https://code-compiler-v2.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.6s'
        />
        <ExperienceCard
          title='ML Self-Driving'
          subtitle=''
          description="This is a self-driving car simulation powered by machine learning and implemented in JavaScript. The project focuses on training an AI model to control a car and navigate it safely through an environment with other cars, avoiding collisions."
          cover=''
          iframe='https://ml-self-driving.vercel.app/'
          repo='https://github.com/guillesotelo/ml-self-driving'
          project='https://ml-self-driving.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='.7s'
        />
        <ExperienceCard
          title='HTML to MD Converter'
          subtitle=''
          description="With a pretty straightforward title, this Python application is made to run in a backend server and fetch Confluence pages to convert them into Markdown. It has several parsers to handle complex scenarios that Confluence documentation pages can bring with them."
          cover=''
          iframe='https://github.com/guillesotelo/html-to-md-converter'
          repo='https://github.com/guillesotelo/html-to-md-converter'
          // project='https://github.com/guillesotelo/html-to-md-converter'
          img={HtmlMdConverter}
          hover={hover}
          setHover={setHover}
          delay='.8s'
        />
        <ExperienceCard
          title='DownDetector'
          subtitle='Volvo Cars'
          description="Customizable API endpoint checker with admin panels. Inspired by the original DownDetector, it brings some specific features like API ownerships and system reporting."
          cover=''
          iframe='https://github.com/guillesotelo/down-detector'
          repo='https://github.com/guillesotelo/down-detector'
          // project='https://github.com/guillesotelo/down-detector'
          img={DownDetector}
          hover={hover}
          setHover={setHover}
          delay='.9s'
        />
        <ExperienceCard
          title='Image & Video Compressor'
          subtitle=''
          description="This script can convert image and video files (jpg, jpeg, png, gif, mp4, avi and mkv) and compresses them using sharp and ffmpeg algorithms. It was created to run before cloud uploading and it can reduce data space down to 70% without much compression loss."
          cover=''
          iframe='https://github.com/guillesotelo/image-compressor'
          repo='https://github.com/guillesotelo/image-compressor'
          // project='https://github.com/guillesotelo/image-compressor'
          img={ImageCompressor}
          hover={hover}
          setHover={setHover}
          delay='1s'
        />
        <ExperienceCard
          title='E.A.S.Y Notes'
          subtitle=''
          description="A simple mobile app to control and take notes on the baby's activity. Inspired on the book 'Secrets of the Baby Whisperer', this app can be your close friend in the early days of your newborn as it was with mine."
          cover=''
          iframe='https://easybaby-notes.vercel.app/'
          repo='https://github.com/guillesotelo/easybaby-notes'
          project='https://easybaby-notes.vercel.app/'
          img={EasyBaby}
          hover={hover}
          setHover={setHover}
          delay='1.2s'
        />
        <ExperienceCard
          title='Flying Game'
          subtitle=''
          description="Test your ability to fly an aeroplane with this incredible simulation made with Three.js. The map and scenary are made with Blender and the entire game is coded with vanilla JavaScript."
          cover=''
          iframe='https://flying-game.vercel.app'
          repo='https://github.com/guillesotelo/flying-game'
          project='https://flying-game.vercel.app'
          hover={hover}
          setHover={setHover}
          delay='1.2s'
        />
        <ExperienceCard
          title='SQLite Search Engine'
          subtitle=''
          description="Full-text search engine built using SQLite database with python and javascript controllers to fetch data fasater than a regular frontend indexing. Used for Volvo documentation platform."
          cover=''
          iframe=''
          repo='https://github.com/guillesotelo/sqlite-search'
          project=''
          img={SqliteSearch}
          hover={hover}
          setHover={setHover}
          delay='1.3s'
        />
        <ExperienceCard
          title='Space Punks'
          subtitle=''
          description="An infinite fight against enemy space ships, inspired in the great Space Invaders from Nintendo. It is made with pure JavaScript and the use of canva."
          cover=''
          iframe='https://canvas-space-punks.vercel.app/'
          repo='https://github.com/guillesotelo/space-punks'
          project='https://canvas-space-punks.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='1.4s'
        />
        <ExperienceCard
          title='Magis Hogar Home'
          subtitle='Magis Hogar'
          description="A landing page and client platform for the everyday real state investments. This page is a mock for the real one (not public), which is used for small investors across Latin America."
          cover=''
          iframe='https://magishogar-public.vercel.app/'
          repo='https://github.com/guillesotelo/magishogar'
          project='https://magishogar-public.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='1.5s'
        />
        <ExperienceCard
          title='Canvas Shooting'
          subtitle=''
          description="An intense shooting game made with canva and Vanilla JavaScript. This is the result of a practical study of canva and its browser behaviour in real time."
          cover=''
          iframe='https://canvas-shooting.vercel.app/'
          repo='https://github.com/guillesotelo/canvas-shooting'
          project='https://canvas-shooting.vercel.app/'
          img={CanvasShooting}
          hover={hover}
          setHover={setHover}
          delay='1.6s'
        />
        <ExperienceCard
          title='Pytorch Training'
          subtitle=''
          description="A full study on how to create datasets, train a model, predict results using linear algorithms and run testings. All made with the power of Pytorch toolkit and the most common mathematical python libraries."
          cover=''
          iframe=''
          repo='https://colab.research.google.com/drive/18BFuL-hmroiIgZOgNVxX_c-L4WxlQdI3#scrollTo=qQLqFQMoSnov'
          project=''
          img={PyTorch}
          hover={hover}
          setHover={setHover}
          delay='1.7s'
        />
        <ExperienceCard
          title='Boxy'
          subtitle=''
          description="Fun and simple game developed using Three.js. Choosen to give some first steps into the Three library using Vanilla JS."
          cover=''
          iframe='https://threejs-boxy.vercel.app/'
          repo='https://github.com/guillesotelo/threejs-boxy'
          project='https://threejs-boxy.vercel.app/'
          img={Boxy}
          hover={hover}
          setHover={setHover}
          delay='1.8s'
        />
        <ExperienceCard
          title='Schedy'
          subtitle=''
          description="Booking App for a hairdressing store, made with Node, React and Mongo. It includes administrator panel and custom mailing notifications."
          cover=''
          iframe='https://schedy.vercel.app/'
          repo='https://github.com/guillesotelo/schedy'
          project='https://schedy.vercel.app/'
          hover={hover}
          setHover={setHover}
          delay='1.9s'
        />
      </div>
      <p className="home__copyright">Guillermo Sotelo © 2023</p>
    </div>
  )
}