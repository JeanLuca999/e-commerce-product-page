import { Button, ControllsContainer } from "./style";

export default function MobileSelectImage({setCurrentImg,currentImg, array}) {

  function clickToRight() {
    if(currentImg === array[0]) {
      setCurrentImg(array[1])
    } else if (currentImg === array[1]) {
      setCurrentImg(array[2])
    } else if (currentImg === array[2]) {
      setCurrentImg(array[0])
    }
  }

  function clickToLeft() {
    if(currentImg === array[0]) {
      setCurrentImg(array[2])
    } else if (currentImg === array[1]) {
      setCurrentImg(array[0])
    } else if (currentImg === array[2]) {
      setCurrentImg(array[0])
    }
  }

  return (
    <ControllsContainer>
      <Button onClick={clickToLeft}>&lt;</Button>
      <Button onClick={clickToRight}>&gt;</Button>
    </ControllsContainer>
  )
}