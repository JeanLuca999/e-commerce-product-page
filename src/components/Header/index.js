import { useState } from "react"
import Avatar from "../Avatar"
import Cart from "../Cart"
import MenuMobile from "../MenuMobile"
import { HeaderWrapper, Li, Link, Nav, Ul, LogoText } from "./style"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  return (
    <HeaderWrapper>
      <Nav>
        <MenuMobile toggleMenu={toggleMenu}/>
        <LogoText>sneakers</LogoText>
        <Ul visible={menuOpen}>
          <Li>
            <Link>Collections</Link>
          </Li>
          <Li>
            <Link>Men</Link>
          </Li>
          <Li>
            <Link>Women</Link>
          </Li>
          <Li>
            <Link>About</Link>
          </Li>
          <Li>
            <Link>Contact</Link>
          </Li>
        </Ul>
        <Cart/>
        <Avatar/>
      </Nav>
    </HeaderWrapper>
  )
}