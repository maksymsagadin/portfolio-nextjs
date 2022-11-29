import Head from 'next/head'
import Image from 'next/image'
import bgimg from '/public/backgrounds/bg-dark.png'

import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Maksym | Front-End Developer</title>
        <meta name="description" content='I’m a front-end web developer specializing in building (and occasionally designing) digital experiences.' />
        <link rel="icon" href="/MS.png" />
      </Head>
      <Hero />
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </div>
  )
}
