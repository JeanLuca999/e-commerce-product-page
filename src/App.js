import { Main, GridContainer, Img, ImgWrapper, Wrapper, ContentWrapper, SneakerTitle, ProductTitle, ProductText, PriceContainer, PriceText, DiscountText, ButtonContainer } from "./components/UI/style";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";

import Counter from "./components/Counter";
import { useState } from "react";
import AddButton from "./components/AddButton";
import SelectImage from "./components/SelectImage";

import sneaker01 from './assets/sneaker01.jpg'
import sneaker02 from './assets/sneaker02.jpg'
import sneaker03 from './assets/sneaker03.jpg' 

function App() {

  const [count, setCount] = useState(0)
  const [currentImg, setCurrentImg] = useState(sneaker01)

  function changeImage(img) {
    setCurrentImg(img)
  }


  return (
    <>
    <GlobalStyle />
    <Header />
    <Main>
      <Wrapper>
        <GridContainer>

          <ImgWrapper>
          
            <Img alt="sneaker" src={currentImg}></Img>
            <SelectImage changeImage={changeImage} img01={sneaker01} img02={sneaker02} img03={sneaker03}/>

          </ImgWrapper>

          <ContentWrapper>
            <SneakerTitle>sneaker company</SneakerTitle>
            <ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
            <ProductText>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubbler outer sole. they'll withstand everything the weather can offer.</ProductText>

            <PriceContainer>
              <PriceText>$125.00</PriceText>
              <DiscountText>$250.00</DiscountText>
            </PriceContainer>

            <ButtonContainer>
              <Counter count={count} setCount={setCount}/>
              <AddButton />
            </ButtonContainer>

          </ContentWrapper>
        </GridContainer>
      </Wrapper>
    </Main>
    </>
  )
}

export default App;
