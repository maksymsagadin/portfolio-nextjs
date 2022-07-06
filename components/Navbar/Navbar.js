import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiInkSwirl } from 'react-icons/gi'
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

const Navbar = ({ hide }) => {
    const [show, setShow] = useState(false);
    return (
      <Nav hide={hide}>
			  <NavbarContainer>
          <NavLogo >
            <IconContext.Provider value={{ color: 'white' }}>
              <GiInkSwirl onClick={scroll.scrollToTop} size='2.5rem' />
            </IconContext.Provider>
          </NavLogo>
          {hide && (
            <StartLink to="about" offset={0} smooth={true} duration={950}>
              <ImMoveDown/>
            </StartLink>
          )}
          {!hide && (
            <>
              <IconContext.Provider value={{ color: 'white' }}>
                <MobileIcon onClick={() => setShow(!show)}>
                  {show ? <FaTimes /> : <CgMenuRight />}
                </MobileIcon>
              </IconContext.Provider>
              <NavMenu hide={hide} show={show}>
                {navbarData.map((el, index) => (
                  <NavItem key={index}>
                    <NavLinks
                      spy={el.spy}
                      duration={el.duration}
                      smooth={el.smooth}
                      exact={el.exact}
                      offset={el.offset}
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