import React, { useState } from 'react'
import { 
	HeroSection, 
	ImageFilter, 
	HeroText, 
	ButtonContainer,
	HeroButton, 
	ContactIcon } from './HeroStyles'
import Image from 'next/image'
import { Container } from '../../styles/globalStyles'
import bgimg from '/public/backgrounds/image1.jpeg'
import Navbar from '../Navbar/Navbar'
import Modal from '../Modal/Modal'
import ContactForm from '../ContactForm/ContactForm'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
	const [showModal, setShowModal] = useState(false)

	// Once the contact button is out of view, the corner class will be added to the button to change it's styling
	const { ref, inView } = useInView({
		rootMargin: '-100px',
	})

  	return (
		<>
			<HeroSection ref={ref} >
				<Image alt='Background' src={bgimg} priority layout='fill' objectFit='cover' objectPosition='center' />
				<ImageFilter />
				<Container>
					<HeroText>Crafting intuitive, high-performance web solutions that captivate and engage.</HeroText>
					<ButtonContainer>
						<HeroButton onClick={() => setShowModal(true)} className={inView ? '' : 'corner'}>
							{inView ? <> Get in touch </> : <ContactIcon />}
						</HeroButton>
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