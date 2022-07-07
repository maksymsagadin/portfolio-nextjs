import styled from 'styled-components'
import { light, dark, primary, secondary } from '../../data/GlobalData'

export const SkillsGrid = styled.div`
    display: grid;
	position: relative;
    gap: 2rem;
	width: 100%;
	grid-template-columns: repeat(4,2fr);
    @media screen and (max-width: 940px) {
		grid-template-columns: repeat(1, 1fr);
		/* > div:first-child {
			display: none;
		} */
	}
`
export const SkillWrapper = styled.div`
    background: linear-gradient(45deg, ${light} 60%, ${secondary} 150%);
    color: ${primary};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
	max-width: 400px;
	border-radius: 5px;
    transition: all 0.2s ease-in-out;
	box-shadow: -1px 1px 3px 1px ${dark};

    &:hover {
		box-shadow: -5px 5px 10px 3px ${dark};
		color: ${primary};

	}
`