import React, { useState } from 'react'
import { 
	HeroSection, 
	ImageFilter, 
	HeroName, 
	HeroTitle, 
	HeroText, 
	ButtonContainer, 
	ButtonWrapper, 
	HeroButton, 
	ContactIcon } from './HeroStyles'
import Image from 'next/image'
import { Container, Heading } from '../../styles/globalStyles'
import bgimg from '/public/backgrounds/sunset.jpg'
import Navbar from '../Navbar/Navbar'
import Modal from '../Modal/Modal'
import ContactForm from '../ContactForm/ContactForm'
import { useInView } from 'react-intersection-observer'
import { heroData } from '../../data/HeroData'

const Hero = () => {
	const [showModal, setShowModal] = useState(false)

	const { ref, inView } = useInView({
		rootMargin: '-100px',
	})

  return (
	<>
		<HeroSection ref={ref} >
			<Image alt='Background' src={bgimg} priority layout='fill' objectFit='cover' objectPosition='center' />
			<ImageFilter />
			<Container>
				<Heading center>
					{heroData.heading}
					<HeroName>{heroData.name}</HeroName>
				</Heading>
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