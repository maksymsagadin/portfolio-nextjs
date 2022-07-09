import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectData } from '../../data/ProjectData'
import { Section, Container } from '../../styles/globalStyles'
import {
    SectionWrapper,
    ContentRow,
    ContentColumn,
    TextWrapper,
    TopText,
    Heading,
    ImgWrapper, 
    Img, 
    Description,
    ProjectButton,
} from './ContentStyles'

import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Tilt from 'react-tilt'

const Content = ({ 
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	backgroundColor,
	linkTo,
	inverse,
    textinverse,
 }) => {
    const initial = { opacity: 0 }
	const transition = { delay: 0.3, duration: 0.6 }
	const animation = useAnimation()

	const { ref, inView } = useInView({
		threshold: 0.3,
	})

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: -20,

			});
			return;
		}

		animation.start({
			opacity: 0,
			y: 0,
		});
	}, [inView, animation])


    return (
        <SectionWrapper ref={ref} backgroundColor={backgroundColor}>
            <Container>
                <ContentRow inverse={inverse}>
                    <ContentColumn initial={initial}
						transition={transition}
						animate={animation}
                        >
                        <TextWrapper inverse={inverse}>
                            <TopText 
                                initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
                                >
                                {topLine}
                            </TopText>
                            <Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
							    >
                                {headline}
                            </Heading>
                            <Description
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
                                textinverse={textinverse}
							    >
								{description}
							</Description>
                            <Link href={linkTo}>
                                <a target='_blank'>
                                    <ProjectButton
                                        initial={initial}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                        animate={animation}
                                        >
                                        {buttonLabel}
                                    </ProjectButton>
                                </a>
                            </Link>
                        </TextWrapper>
                    </ContentColumn>
                    <ContentColumn
                        initial={initial}
						transition={transition}
						animate={animation}
                        >
                        <Tilt className="Tilt" options={{ max: 20, scale: 1, speed: 200 }}>
                            <ImgWrapper inverse={inverse}>
								<Img
									src={img}
									alt={alt}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.6 }}
								/>
							</ImgWrapper>
                        </Tilt>
                    </ContentColumn>
                </ContentRow>
            </Container>
            </SectionWrapper>
    )
}

export default Content