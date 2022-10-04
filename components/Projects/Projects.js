import React from 'react'
import Image from 'next/image'
import bgimg from '/public/backgrounds/bg-flip.png'
import { projectData } from '../../data/ProjectData'
import { Heading } from '../../styles/globalStyles'
import Content from '../Content/Content'


const Projects = ({id}) => {
  return (
    <div id={id}>
        <Heading main center>Projects</Heading>
        {projectData.map((project, index) => (
          <Content {...project} key={index} />
        ))}
    </div>
  )
}

export default Projects