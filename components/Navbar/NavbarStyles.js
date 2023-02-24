import styled from 'styled-components'
import { Container } from '../../styles/globalStyles'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import { light, dark, primary } from '../../data/GlobalData'

export const Nav = styled.nav`
	background: ${({ hide }) => (hide ? 'transparent' : 'rgba(64,81,78,0.75)')};
	margin-top: -100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 50;
	width: 100%;
`

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
`

export const NavLogo = styled.div`
	color: ${primary};
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;
	&:hover {
		cursor: pointer;
		color: ${light};
		box-shadow: -5px 5px 9px 3px ${dark};

	}
	@media screen and (max-width: 960px) {
		z-index: 50;
	}
`

export const StartLink = styled(LinkScroll)`
	color: ${light};
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	transition: all 0.4s ease;
	font-size: 3.5rem;
	&:hover {
		color: ${primary};
		cursor: pointer;
	}
`



export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		z-index: 50;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: ${dark};
	}
	> li:first-child {
		margin-left: auto;
	}
`

export const NavItem = styled.li`
	height: 55px;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`

export const NavLinks = styled(LinkScroll)`
	color: ${light};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0rem 1rem;
	height: 100%;
	transition: all 0.6s ease;
	&.active {
		@media screen and (min-width: 960px) {
			border-bottom: 2px solid ${primary};
		}
	}
	&:hover {
		color: ${primary};
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: ${primary};
		}
	}
`
export const ContactButton = styled.button`
	background-color: ${dark};
	border: none;
	font-size: 1.25rem;
	font-weight: 600;
	color: ${primary};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	transition: all 0.3s ease;
	cursor: pointer;
	&:hover {
		color: ${light};
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
	}
`