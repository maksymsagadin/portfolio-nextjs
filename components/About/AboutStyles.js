import styled from 'styled-components'
import Image from 'next/image'
import { light, dark, primary, secondary } from '../../data/GlobalData'


export const Row = styled.div`
	display: grid;
	align-items: start;
	position: relative;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	@media screen and (max-width: 940px) {
		grid-template-columns: repeat(1, 1fr);
		> div:first-child {
			margin-bottom: 2rem;
		}
	}
`
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 940px) {
		align-items: center;
	}
`
export const Wrapper = styled.div`
	padding: 0 3rem;
	max-width: 540px;
	@media screen and (max-width: 768px) {
		padding: 1rem;
	}
`
export const Selfie = styled(Image)`
	border-radius: 0.75rem;
	overflow: hidden;
`