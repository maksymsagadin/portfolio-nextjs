import styled from 'styled-components'
import { light, dark, primary, secondary } from '../../data/GlobalData'

export const SkillsGrid = styled.div`
    display: grid;
	position: relative;
	padding-bottom: 9rem;
    gap: 2rem;
	width: 100%;
	grid-template-columns: repeat(4,2fr);
    @media screen and (max-width: 940px) {
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		padding-bottom: 2rem;
		gap: 1rem;
	}
	@media screen and (max-width: 475px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
export const SkillWrapper = styled.div`
    background: linear-gradient(45deg, ${light} 60%, ${secondary} 150%);
    color: ${primary};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
	max-width: 350px;
	border-radius: 5px;
    transition: all 0.5s ease-in-out;
	box-shadow: -1px 1px 3px 1px ${dark};
	white-space: nowrap;
    &:hover {
		color: ${dark};
	}
`
export const SkillText = styled.p`
	padding-left: 0.5rem;
`