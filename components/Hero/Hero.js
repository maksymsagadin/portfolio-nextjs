import React, { useState } from 'react'
import Image from 'next/image'
import { Container, Heading } from '../../styles/globalStyles'
import Navbar from '../Navbar/Navbar'
import ContactForm from '../ContactForm/ContactForm'
import Modal from '../Modal/Modal'
import { HeroSection, ImageFilter, HeroTitle, HeroText, ButtonContainer, ButtonWrapper, HeroButton, ContactIcon } from './HeroStyles'
import { useInView } from 'react-intersection-observer'
import { heroData } from '../../data/HeroData'
import bgimg from '/public/backgrounds/bg-blue.jpg'

const Hero = () => {
	const [showModal, setShowModal] = useState(false)

	const { ref, inView } = useInView({
		rootMargin: '-100px',
	})

  return (
	<>
		<HeroSection ref={ref} >
			<Image alt='Background' src={bgimg} priority layout='fill' objectFit='cover' objectPosition='center' quality={100}/>
			<ImageFilter />
			<Container>
				<Heading center>{heroData.heading}</Heading>
				<HeroTitle center>{heroData.title}</HeroTitle>
				<HeroText>{heroData.statement}</HeroText>
				<ButtonContainer>
					<ButtonWrapper>
						<HeroButton onClick={() => setShowModal(true)} className={inView ? '' : 'corner'}>
							{inView ? <> Get in touch </> : <ContactIcon />}
						</HeroButton>
					</ButtonWrapper>
				</ButtonContainer>
			</Container>
		</HeroSection>
		<Navbar hide={inView} />
		<Modal show={showModal} onHide={() => setShowModal(false)}>
			<ContactForm />
		</Modal>
	</>
	
   
  )
}

export default Hero