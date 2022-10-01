import React from 'react'
import Image from 'next/image'
import { aboutData } from '../../data/AboutData'
import { Section, SubHeading, BodyText } from '../../styles/globalStyles'
import { Wrapper, Row, Column, Selfie } from './AboutStyles'


const Info = ({ id }) => {
    const { headline, intro, description, } = aboutData

    return (
        <Section id={id} >
			<Image alt='Background' src={aboutData.bgImg} priority layout='fill' objectFit='cover' objectPosition='center'/>
			<Row>
				<Column>
					<Selfie alt="Maksym Sagadin" src={aboutData.heroImg} height={500} width={500} objectFit='cover' objectPosition='right'  quality={100} />
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
    )
}

export default Info