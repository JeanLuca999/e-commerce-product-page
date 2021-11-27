import { CartIcon, CartWrapper } from "./style"
import carticon from '../../assets/cart-icon.svg'

export default function Cart({quantity}) {
  return  ( 
    <CartWrapper>
      <CartIcon src={carticon} />
    </CartWrapper>
  )
}