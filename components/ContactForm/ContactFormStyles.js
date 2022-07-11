import styled from 'styled-components'
import { motion } from 'framer-motion'
import { light, dark, primary, secondary } from '../../data/GlobalData'

export const FormSection = styled.div`
	padding: 1rem;
	max-width: 90vw;
	max-height: 90vh;
	@media screen and (max-width: 1000px) {
		max-width: 95vw;
	}
`

export const ContactInfo = styled.h2`
	margin: 1rem;
	color: ${light};
	font-size: 1.2rem;
	/* &:first-child {
		margin-bottom: -1rem;
	} */
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const FormTitle = styled.h2`
	margin-bottom: 1rem;
	font-size: 2rem;
	font-weight: 600;
`

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const FormColumn = styled.div`
	margin: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.75rem;
	flex-direction: column;
	
	@media screen and (max-width: 768px) {
		min-width: 80vw;
		margin-top: 0;
	}
`

export const HeroColumn = styled.div`
	margin: 1rem;
	min-height: 50vh;
	min-width: 50vw;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url('/../../public/backgrounds/bg-dark.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	border-radius: 0.75rem;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		min-width: 44vw;
		margin: 0;
	}
	@media screen and (max-width: 768px) {
		min-height: 25vh;
		min-width: 80vw;
		align-items: flex-start;
	}
`

export const FormWrapper = styled.form`
	width: 100%;
`

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : primary)};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
	
`

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1.4rem;
`

export const FormInput = styled.input`
	background: ${light};
	color: ${secondary};
	padding-left: 16px;
	outline: none;
	border-radius: 0.75rem;
	height: 40px;
	width: 100%;
	border: none;
	transition: all 0.6s ease-in-out;
	border-left: 2px solid ${secondary};
	border-bottom: 1px solid ${secondary};
	font-size: 1rem;
	&:focus {
		border-left: 3px solid ${primary};
		border-bottom: 2px solid ${primary};
		color: ${primary};
	}
`

export const FormTextArea = styled.textarea`
	background: ${light};
	color: ${secondary};
	padding-left: 16px;
	padding-top: 10px;
	outline: none;
	border-radius: 0.75rem;
	height: 80px;
	width: 100%;
	border: none;
	transition: all 0.6s ease-in-out;
	border-left: 2px solid ${secondary};
	border-bottom: 1px solid ${secondary};
	font-size: 1rem;
	resize: none;
	&:focus {
		border-left: 3px solid ${primary};
		border-bottom: 2px solid ${primary};
		color: ${primary};
	}
	@media screen and (max-width: 900px) {
		height: 60px;
	}
`

export const FormButton = styled.button`
	border-radius: 0.75rem;
	background: ${primary};
	margin-top: 1rem;
	width: 100%;
	font-size: 1.4rem;
	padding: 10px 15px;
	border: 2px solid ${secondary};
	color: ${light};
	outline: none;
	cursor: pointer;
	overflow: hidden;
	position: relative;
    transition: all 0.6s ease-in-out;
	z-index: 0;
	&:before {
		background: ${secondary};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		transition: all 0.6s ease-in-out;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		background: ${secondary};
		color: ${dark};
	}
`