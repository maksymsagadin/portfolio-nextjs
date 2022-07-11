import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { light, dark, primary, secondary } from '../../data/GlobalData'

export const SectionWrapper = styled(motion.div)`
	display: flex;
    padding: 5rem 2rem;
    align-items: center;
	justify-content: center;
	position: relative;
	background: ${({ backgroundcolor }) => (backgroundcolor ? backgroundcolor : primary)};
	@media screen and (max-width: 768px) {
		padding: 2.5rem 0rem;
	}
	/* &:before {
		width: 100%;
		height: 100%;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		background-image: url('/hero-pattern-bg.png');
		background-size: 100% auto;
		object-fit: cover;
	} */
`

export const ContentRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
    gap: 3rem;
	flex-direction: ${({ inverse }) => (inverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
        gap: 0rem;

	}
`
export const ContentColumn = styled(motion.div)`
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
	text-align: ${({ inverse }) => (inverse ? 'left' : 'right')};
	@media screen and (max-width: 768px) {
        display: flex;
		flex-direction: column;
		align-items: center;
		> h1, p {
			text-align: center;
		}	
	}
`
export const TopText = styled(motion.div)`
	padding-top: 2rem;
	font-size: 1rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: grey;
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
    color: ${({ textinverse }) => (textinverse ? light : dark)};
	text-align: ${({ inverse }) => (inverse ? 'left' : 'right')};
`
export const ProjectButton = styled(motion.button)`
	border-radius: 0.75rem;
	background: ${primary};
	white-space: nowrap;
	padding: 10px 40px;
	font-size: 16px;
	color: ${light};
	outline: none;
	border: 2px solid ${secondary};
	cursor: pointer;
	overflow: hidden;
	position: relative;
    transition: all 0.6s ease-in-out;
	&:before {
		background: ${secondary};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
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
	justify-content: ${({ inverse }) => (inverse ? 'flex-end' : 'flex-start')};
    padding: 1rem;
	border-radius: 0.75rem;
	position: relative;
	
`
export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	border-radius: 0.75rem;
	max-width: 100%;
	object-fit: cover;
	height: 300px;
	max-height: 600px;
	z-index: 1;
`