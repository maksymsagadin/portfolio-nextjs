import styled from 'styled-components'
import { SiMinutemailer } from 'react-icons/si'
import { motion } from 'framer-motion'
import { light, dark, primary, secondary } from '../../data/GlobalData'


export const HeroSection = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
`

export const ImageFilter = styled.div`
	position: absolute;
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5));
	height: 100%;
	width: 100%;
`

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: ${light};
`

export const ButtonContainer = styled.div`
	z-index: 50;
	position: relative;
	display: flex;
	height: 150px;
`

export const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`

export const HeroButton = styled(motion.button)`
	position: absolute;
	width: 250px;
	margin: 0 auto;
	padding: 15px 20px;
	bottom: calc(100vh - 100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	/* line-height: 18px; */
	/* letter-spacing: 1.5px; */
	text-transform: uppercase;
	border-radius: 25px;
	border: 2px solid ${secondary};
	background-color: ${primary};
	color: ${light};
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	overflow: hidden;
	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: ${primary};
		border-radius: 50%;
	}
	&:hover {
		box-shadow: -5px 5px 9px 3px ${dark};
		background-color: ${secondary};
		color: ${dark};
	}
	&:before {
		background: ${secondary};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		transition: all 1s ease-in-out;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 600%;
	}
`

export const ContactIcon = styled(SiMinutemailer)`
	font-size: 2.5rem;
	color: ${light};
	&:hover {
		color: ${dark};
	}
`