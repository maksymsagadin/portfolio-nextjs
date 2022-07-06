import React from 'react'
import { aboutData } from '../../data/AboutData'
import { Section } from '../../styles/globalStyles'
import {
	InfoWrapper,
	InfoDesc,
	InfoRow,
	InfoColumn,
	InfoHeading,
} from './AboutStyles'
import Image from 'next/image'
import heroimg from '/public/hero_image.jpg'
import bgimg from '/public/backgrounds/bg-dark.png'


const Info = ({ id }) => {
    const { headline, intro, description, } = aboutData

    return (
        <Section id={id} >
			<Image alt='Background' src={bgimg} priority layout='fill' objectFit='cover' objectPosition='center'/>
			<InfoRow>
				<InfoColumn>
					<Image alt="Maksym" src={heroimg} objectFit='contain' objectPosition='center' height={600} quality={100} />
					
				</InfoColumn>
				<InfoColumn>
					<InfoWrapper>
						<InfoHeading>{headline}</InfoHeading>
						<InfoDesc>{intro}</InfoDesc>
						<InfoDesc>{description}</InfoDesc>
					</InfoWrapper>
				</InfoColumn>
			</InfoRow>
		</Section>
    )
}

export default Info