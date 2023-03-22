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
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1));
	height: 100%;
	width: 100%;
`

export const HeroName = styled.span`
	color: ${primary};
	opacity: 80%;
	font-weight: 600;
`

export const HeroTitle = styled.h3`
	margin-bottom: 2rem;
	font-size: clamp(2rem, 6vw, 4rem);
	letter-spacing: 5px;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? dark : light )};
	text-align: center;
`
export const HeroText = styled.p`
	margin-bottom: 2rem;
	font-size: clamp(1rem, 1.5vw, 4rem);
	text-align: center;
	letter-spacing: 2px;
	font-weight: 500;
	color: ${light};
`
export const ButtonContainer = styled.div`
	z-index: 50;
	position: relative;
	display: flex;
	height: 150px;
`


export const HeroButton = styled(motion.button)`
	position: absolute;
	font-size: clamp(1rem, 1vw, 1.5rem);
	width: 250px;
	margin: 0 auto;
	padding: 15px 20px;
	bottom: calc(100vh - 100px);
	right: 50%;
	bottom: 50%;
	transform: translate(50%);
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 0.75rem;
	border: 2px solid ${secondary};
	background-color: ${primary};
	color: ${dark};
	cursor: pointer;
	overflow: hidden;
	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: ${primary};
		color: ${dark};
		border-radius: 50%;
		transition: all 0s ease-in-out;
	}
	&:hover {
		box-shadow: -5px 5px 9px 3px ${primary};
		background-color: ${secondary};
		color: ${light};
		transition: all 0.6s ease-in-out;
	}
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
		height: 600%;
	}
`

export const ContactIcon = styled(SiMinutemailer)`
	font-size: 2.5rem;
	transition: all 0.6s ease-in-out;
	color: ${dark};
	&:hover {
		color: ${light};
	}
`