import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Maksym | Front-End Developer</title>
        <meta name="og:locale" content="en_US" />
        <meta name="description" content='I’m a front-end web developer specializing in building (and occasionally designing) digital experiences.' />
        <meta name="keywords" content="Web Development, Front-end, Fullstack, JavaScript, Typescript React, Python, Next.js" />
        <meta name="author" content="Maksym Sagadin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/MS.png" />
      </Head>
      <main>
        <Hero />
        <About id='about' />
        <Skills id='skills' />
        <Projects id='projects' />
      </main>
    </div>
  )
}
