import Avatar from "../Avatar"
import Cart from "../Cart"
import { HeaderWrapper, Li, Link, Nav, Ul, LogoText } from "./style"

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <LogoText>sneakers</LogoText>
        <Ul>
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