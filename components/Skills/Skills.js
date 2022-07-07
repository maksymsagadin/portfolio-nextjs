import React from 'react'
import Image from 'next/image'
import { Section, Container, Heading } from '../../styles/globalStyles'
import { SkillsGrid, SkillWrapper } from './SkillsStyles'
import { skillData } from '../../data/SkillData'
import bgimg from '/public/backgrounds/bg-creme.png'

const Skills = ({ id }) => {
  return (
    <Section id={id} >
		<Image alt='Background' src={bgimg} priority layout='fill' objectFit='cover' objectPosition='center'/>
        <Container>
            <Heading inverse >Expertise</Heading>
            <SkillsGrid>
                {skillData.map((skill, index) => (
                <SkillWrapper key={index}>
                    <Image src={skill.img} width='64px' height='64px' />
                    {skill.text}
                </SkillWrapper>
            ))}
            </SkillsGrid>
        </Container>
    </Section>
  )
}

export default Skills