import styled, { createGlobalStyle } from 'styled-components'
import { light, dark, primary, secondary } from '../data/GlobalData'


const GlobalStyle = createGlobalStyle`
  *{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    font-family: 'Jost', sans-serif;
	font-weight: 400;
  }
`

export const Container = styled.div`
	width: 100%;
    position: relative;
	max-width: 1750px;
	margin: 0 auto;
	padding: 0 60px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`

export const Section = styled.section`
    position: relative;
	padding: 2rem;
	background: ${light};
	@media screen and (min-width: 900px) {
		padding: 4rem;
	}
	@media screen and (min-width: 2000px) {
		padding: 6rem 15rem;
	}
	@media screen and (min-width: 3000px) {
		padding: 8rem 20rem;
	}
`
export const Heading = styled.h1`
	font-size: clamp(2.5rem, 7vw, 4.5rem);
	padding: ${({ main }) => (main ? '4rem' : '1.5rem 0 1.5rem 0')};
	background-color: ${({ main }) => (main ? dark : 'none')};
	color: ${({ inverse }) => (inverse ? dark : light)};
	width: 100%;
	letter-spacing: 4px;
	text-align: ${({ center }) => (center ? 'center' : 'left')};
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
	color: ${({ inverse }) => (inverse ? primary : light)};
	font-size: clamp(1rem, 2vw, 1.3rem);
	text-align: ${({ center }) => (center ? 'center' : 'justify')};
	margin-bottom: 1rem;
	&:last-of-type {
        margin-bottom: 0;
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