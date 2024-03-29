import React, { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { ImMoveDown } from 'react-icons/im'
import { IconContext} from 'react-icons/'
import {
	Nav,
	NavbarContainer,
	NavLogo,
  StartLink,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles'
import { animateScroll as scroll } from 'react-scroll'
import { navbarData } from '/data/NavbarData.js'
import logo from '/public/Mlogo.png'


const Navbar = ({ hide }) => {
    const [show, setShow] = useState(false)
    const offset = -80
    const duration = 950

    return (
      <Nav hide={hide}>
			  <NavbarContainer>
          <NavLogo >
            <Image src={logo} alt="Logo" priority height={75} width={75} quality={100} onClick={scroll.scrollToTop}/>
          </NavLogo>
          {hide && (
            <StartLink to="about" offset={-50} smooth={true} duration={duration}>
              <ImMoveDown/>
            </StartLink>
          )}
          {!hide && (
            <>
              <IconContext.Provider value={{ color: 'white' }}>
                <MobileIcon onClick={() => setShow((prevShow) => !prevShow)}>
                  {show ? <FaTimes /> : <CgMenuRight />}
                </MobileIcon>
              </IconContext.Provider>
              <NavMenu hide={hide} show={show}>
                {navbarData.map((el, index) => (
                  <NavItem key={index}>
                    <NavLinks
                      spy={true}
                      duration={duration}
                      smooth={true}
                      exact='true'
                      offset={offset}
                      onClick={() => setShow(false)}
                      to={el.to}
                    >
                      {el.text}
                    </NavLinks>
                  </NavItem>
                ))}
              </NavMenu>
            </>
          )}
        </NavbarContainer>
      </Nav>
    )
}

export default Navbar