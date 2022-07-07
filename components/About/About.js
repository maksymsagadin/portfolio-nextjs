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


const Info = ({ id }) => {
    const { headline, intro, description, } = aboutData

    return (
        <Section id={id} >
			<Image alt='Background' src={aboutData.bgImg} priority layout='fill' objectFit='cover' objectPosition='center'/>
			<InfoRow>
				<InfoColumn>
					<Image alt="Maksym" src={aboutData.heroImg} height={500} width={500} objectFit='contain' objectPosition='right'  quality={100} />
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