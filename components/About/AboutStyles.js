import styled from 'styled-components'
import Image from 'next/image'
import { light, dark } from '../../data/GlobalData'


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
	padding: 0 2rem;
	@media screen and (max-width: 768px) {
		padding: 0 1rem 1rem;
	}
`
export const Selfie = styled(Image)`
	border-radius: 0.75rem;
	overflow: hidden;
`
export const PullTabColumn = styled.div`
	overflow: hidden;
	display: flex;
	position: fixed;
	z-index: 1000;
	flex-direction: column;
	top: 14%;
	right: 0;
	color: ${dark} important!;
`
export const PullTab = styled.li`
	display: flex;
	align-items: center;
	opacity: 50%;
	width: 160px;
	height: 60px;
	padding-left: 1rem;
	padding-right: 2rem;
	transform: translateX(100px);
	transition: transform 600ms, opacity 600ms;
	background-color: ${({ color }) => (color ? color : light)}; // color would represent custom colors for the background of the pull tabs
	color: ${light};
	&:hover {
		transform: translateX(5px);
		opacity: 100%;
		border-top-left-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;
	}
	&:first-child {
		border-top-left-radius: 0.75rem;
	}
	&:last-child {
		border-bottom-left-radius: 0.75rem;
	}
`
export const PullTabLink = styled.a`
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
export const PullTabText = styled.p`
	font-weight: bold;
	color: ${({ color }) => (color ? color : dark)};
`