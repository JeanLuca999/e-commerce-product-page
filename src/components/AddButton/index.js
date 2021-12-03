import {Button} from './style'

import cart from '../../assets/cart-icon-white.svg'

export default function AddButton() {
  return (
    <Button> <img src={cart} alt=""></img> Add to cart</Button>
  )
}