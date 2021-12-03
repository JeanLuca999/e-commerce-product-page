import { ImageIcon, Wrapper } from "./style";

import img1 from '../../assets/sneaker01.jpg'
import img2 from '../../assets/sneaker02.jpg'
import img3 from '../../assets/sneaker03.jpg'
import { useState } from "react/cjs/react.development";

export default function SelectImage({img01, img02, img03, changeImage}) {

  const [currentSelected, setCurrentSelected] = useState([true, false, false])

  function handleClick(img, array) {
    changeImage(img)
    setCurrentSelected([...array])
  }

  return (
    <Wrapper>

      <ImageIcon active={currentSelected[0]} path={img1} onClick={() => handleClick(img01, [true, false, false])}></ImageIcon>

      <ImageIcon active={currentSelected[1]} path={img2} onClick={() => handleClick(img02, [false, true, false])}></ImageIcon>

      <ImageIcon active={currentSelected[2]} path={img3} onClick={() => handleClick(img03, [false, false, true])}></ImageIcon>
    </Wrapper>
  )
}