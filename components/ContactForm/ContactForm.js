import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
	FormColumn,
	HeroColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormInputRow,
	FormTextArea,
	FormMessage,
	FormButton,
	FormTitle,
	ContactInfo,
} from './ContactFormStyles'

const ContactForm = () => {
	const form = useRef()
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const sendEmail = (e) => {
		e.preventDefault()
		emailjs.sendForm('portfolio-maksym', 'profile', form.current, 'NBX2xIeOjlCiBoHvl')
			.then((result) => {
				setSuccess('Email was sent successfully!')
		  	}, (error) => {
				setError('There was an error sending your message')
		})
		e.target.reset()
	}

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.6 } },
	}

	// const contactData = {
	// 	location: 'Located in San Jose, CA',
	// 	sms: 'Text me at 650-123-1234',
	// }
	
	const formData = [
		{ label: 'Name', value: 'name', type: 'text', required: 'true' },
		{ label: 'Email', value: 'email', type: 'email', required: 'true' },
		{ label: 'Subject', value: 'subject', type: 'text', required: 'false' },
	]

    return (
        <FormSection>
			<FormRow>
				{/* <HeroColumn>
					<ContactInfo>
						{contactData.sms}
					</ContactInfo>
					<ContactInfo>
						{contactData.location}
					</ContactInfo>
				</HeroColumn> */}
				<FormColumn>
					<FormTitle>Send an Email</FormTitle>
					<FormWrapper ref={form} onSubmit={sendEmail}>
						{formData.map((el, index) => (
							<FormInputRow key={index}>
								<FormInput
									type={el.type}
									placeholder={el.label}
									name={el.value}
									required={el.required}
									autoComplete='off'
								/>
							</FormInputRow>
						))}
						<FormTextArea
							placeholder='How can I help?'
							name='textContent'
							required='true'
						/>
						<FormButton type='submit' value='Send'>Contact</FormButton>
					</FormWrapper>
					{error && (
						<FormMessage
							variants={messageVariants}
							initial="hidden"
							animate="animate"
							error
							>
							{error}
						</FormMessage>
					)}
					{success && (
						<FormMessage
							variants={messageVariants}
							initial="hidden"
							animate="animate"
							>
							{success}
						</FormMessage>
					)}
				</FormColumn>
			</FormRow>
		</FormSection>
    )
}

export default ContactForm