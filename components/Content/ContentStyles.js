import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { light, dark, primary, secondary } from '../../data/GlobalData'


export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`
export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`
export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
        display: flex;
		flex-direction: column;
		align-items: center;
		> h1, p {
			text-align: center;
		}	
	}
`
export const TopText = styled(motion.div)`
	font-size: 1rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: ${secondary};
`
export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${primary};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`
export const Description = styled(motion.p)`
	margin-bottom: 2rem;
	line-height: 24px;
    color: ${dark};
	text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
`
export const ProjectButton = styled(motion.button)`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: ${primary};
	outline: none;
	border: 2px solid ${secondary};
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: ${light};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: ${dark};
	}
`

export const ImgWrapper = styled(motion.div)`
	display: flex;
	max-height: 600px;
	justify-content: center;
	box-shadow: 0 0 32px 4px ${dark};
	border-radius: 1rem;
	position: relative;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : primary)};
	&:before {
		width: 100%;
		height: 100%;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		background-image: url('/hero-pattern-bg.png');
		background-size: 100% auto;
		object-fit: cover;
	}
`
export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	border-radius: 1rem;
	max-width: 100%;
	object-fit: cover;
	height: 300px;
	max-height: 600px;
	z-index: 1;
`