import {Menu, MenuElement} from './style'

export default function MenuMobile({toggleMenu}) {
  return (
    <Menu onClick={toggleMenu}>
      <MenuElement/>
      <MenuElement/>
      <MenuElement/>
    </Menu>
  )
}