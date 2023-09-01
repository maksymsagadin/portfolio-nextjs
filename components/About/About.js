import React from 'react'
import Image from 'next/image'
import { aboutData } from '../../data/AboutData'
import { Section, SubHeading, BodyText } from '../../styles/globalStyles'
import { Wrapper, Row, Column, Selfie, PullTabColumn, PullTab, PullTabLink, PullTabText } from './AboutStyles'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { dark } from '../../data/GlobalData'


const Info = ({ id }) => {
    const { headline, intro, description, } = aboutData

    return (
		<>
			<Section id={id} >
				<Image alt='Background' src={aboutData.bgImg} layout='fill' objectFit='cover' objectPosition='center'/>
				<Row>
					<Column>
						<Selfie alt="Maksym Sagadin" src={aboutData.heroImg} quality={100} height={500} width={500} objectFit='cover' objectPosition='center' loading="lazy"/>
					</Column>
					<Column>
						<Wrapper>
							<SubHeading>{headline}</SubHeading>
							<BodyText>{intro}</BodyText>
							<BodyText>{description}</BodyText>
						</Wrapper>
					</Column>
				</Row>
				
			</Section>
			<PullTabColumn >
				<ul>
					<PullTab >
						<PullTabLink
							href='https://github.com/maksymsagadin/'
							target='_blank'
							rel="noreferrer"
							>
							<FaGithubAlt color={dark} size={30} />
							<PullTabText>
								Github
							</PullTabText>
						</PullTabLink>
					</PullTab>
					<PullTab >
						<PullTabLink
							href='https://www.linkedin.com/in/maksym-sagadin/'
							target='_blank'
							rel="noreferrer"
							>
							<FaLinkedinIn color={dark} size={30} />
							<PullTabText>
								LinkedIn
							</PullTabText>
						</PullTabLink>
					</PullTab>
				</ul>
			</PullTabColumn>
		</>
    )
}

export default Info