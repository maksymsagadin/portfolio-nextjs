import React, { useEffect } from 'react'
import Link from 'next/link'
import { Container } from '../../styles/globalStyles'
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

const Content = ({ 
	topLine,
	headline,
	description,
	img,
	alt,
	linkTo,
    github,
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
	}, [inView, animation])


    return (
        <SectionWrapper ref={ref} >
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
								transition={{ delay: 0.4, duration: 0.6 }}
								animate={animation}
							    >
                                {headline}
                            </Heading>
                            <Description
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
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
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                        animate={animation}
                                        >
                                        {'View Website'}
                                    </ProjectButton>
                                </a>
                            </Link>
                            <Link href={github}>
                                <a target='_blank'>
                                    <ProjectButton
                                        initial={initial}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                        animate={animation}
                                        >
                                        {'Github'}
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
                        <ImgWrapper inverse={inverse}>
                            <Img
                                src={img}
                                alt={alt}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />
                        </ImgWrapper>
                    </ContentColumn>
                </ContentRow>
            </Container>
        </SectionWrapper>
    )
}

export default Content