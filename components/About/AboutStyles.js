import styled from 'styled-components'
import { light, dark, primary, secondary } from '../../data/GlobalData'


export const InfoRow = styled.div`
	display: grid;
	align-items: start;
	position: relative;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-columns: 2rem;
	@media screen and (max-width: 940px) {
		grid-template-columns: repeat(1, 1fr);
		> div:first-child {
			display: none;
		}
	}
`

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 940px) {
		align-items: center;
	}
`


export const InfoHeading = styled.h2`
	margin-bottom: 2rem;
	font-size: clamp(2rem, 7vw, 3rem);
	font-weight: 600;
	border-bottom: 2px solid ${secondary};
	color: ${({ inverse }) => (inverse ? dark : light )};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`

export const InfoDesc = styled.div`
	margin-bottom: 1.5rem;
	color: ${({ inverse }) => (inverse ? primary : light)};
	font-size: clamp(1rem, 2vw, 1.3rem);
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`

export const InfoWrapper = styled.div`
	padding: 0 3rem;
	max-width: 540px;
	@media screen and (max-width: 768px) {
		padding: 1rem;
	}
`
