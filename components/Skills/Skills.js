import React from 'react'
import Image from 'next/image'
import { Section, Container, Heading } from '../../styles/globalStyles'
import { SkillsGrid, SkillWrapper, SkillText } from './SkillsStyles'
import { skillData } from '../../data/SkillData'
import bgimg from '/public/backgrounds/bg-blue.jpg'
import Tilt from 'react-tilt'

const Skills = ({ id }) => {
  return (
    <Section height={700} id={id} >
		  <Image alt='Background' src={bgimg} priority layout='fill' objectFit='cover' objectPosition='center'/>
      <Container>
          <Heading>Expertise</Heading>
          <SkillsGrid>
            {skillData.map((skill, index) => (
              <Tilt key={index} className="Tilt" options={{ max: 30, scale: 1, reset: false }}>
                <SkillWrapper>
                  <Image src={skill.img} width={64} height={64} layout='fixed'/>
                  <SkillText>{skill.text}</SkillText>
                </SkillWrapper>
              </Tilt>
            ))}
          </SkillsGrid>
        </Container>
    </Section>
  )
}

export default Skills