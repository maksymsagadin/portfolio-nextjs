import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Content from '../components/Content/Content'
import { projectData } from '../data/ProjectData'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Maksym | Front-End Developer</title>
        <meta name="description" content='I’m a front-end web developer specializing in building (and occasionally designing) digital experiences.' />
        <link rel="icon" href="/star.png" />
      </Head>
      <Hero />
      <About id='about' />
      {/* <Skills id='skills' /> */}
      <div id='projects'>
        {projectData.map((project, index) => (
          <Content {...project} key={index} />
        ))}
      </div>
    </div>
  )
}
