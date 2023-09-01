import React from 'react'
import { projectData } from '../../data/ProjectData'
import { Heading } from '../../styles/globalStyles'
import Content from '../Content/Content'

const Projects = ({ id }) => {
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