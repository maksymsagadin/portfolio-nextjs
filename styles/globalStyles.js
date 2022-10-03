import styled, { createGlobalStyle } from 'styled-components'
import { light, dark, primary, secondary } from '../data/GlobalData'


const GlobalStyle = createGlobalStyle`
  *{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    font-family: 'Raleway', sans-serif;
	font-weight: 400;
  }
`

export const Container = styled.div`
	width: 100%;
    position: relative;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 60px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`

export const Section = styled.section`
    position: relative;
	padding: 7rem 2rem;
	background: ${light};
	@media screen and (max-width: 940px) {
		padding: 90px 20px;
	}
`
export const Heading = styled.h1`
	font-size: clamp(2.5rem, 7vw, 4.5rem);
	padding: ${({ main }) => (main ? '4rem' : '0 0 2rem 0')};
	background-color: ${({ main }) => (main ? light : 'none')};
	color: ${({ inverse }) => (inverse ? dark : light)};
	width: 100%;
	letter-spacing: 4px;
	text-align: ${({ center }) => (center ? 'center' : 'left')};
	@media screen and (max-width: 940px) {
		padding-bottom: ${({ main }) => (main ? '0' : '2rem')};
		text-align: center;
	}
`
export const SubHeading = styled.h2`
	margin-bottom: 2rem;
	font-size: clamp(2rem, 6vw, 4rem);
	font-weight: 600;
	border-bottom: 2px solid ${secondary};
	color: ${({ inverse }) => (inverse ? dark : light )};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`
export const BodyText = styled.p`
	margin-bottom: 1.5rem;
	color: ${({ inverse }) => (inverse ? primary : light)};
	/* text-indent: 2rem; */
	white-space: break-spaces;
	font-size: clamp(1rem, 2vw, 1.3rem);
	text-align: ${({ center }) => (center ? 'center' : 'left')};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`
export const Button = styled.button`
	border-radius: 0.5rem;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: ${light};
	outline: none;
	border: 2px solid ${secondary};
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 0.6s ease-in-out;
	&:before {
		background: ${light};
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
		color: ${dark};
	}
`
export default GlobalStyle