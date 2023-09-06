import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Maksym | Full Stack Developer</title>
        <meta name="og:locale" content="en_US" />
        <meta name="description" content='I’m a Full Stack Developer specializing in building (and occasionally designing) digital experiences.' />
        <meta name="keywords" content="Full Stack, Web Development, Front End, HTML, JavaScript, Typescript, React.js, Python, Next.js" />
        <meta name="author" content="Maksym Sagadin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
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
