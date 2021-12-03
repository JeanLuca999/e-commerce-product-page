import { GridContainer, Img, ImgWrapper, Wrapper, ContentWrapper, SneakerTitle, ProductTitle, ProductText, PriceContainer, PriceText, DiscountText, ButtonContainer } from "./components/UI/style";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";

import sneaker from './assets/sneaker02.jpg'
import Counter from "./components/Counter";
import { useState } from "react";
import AddButton from "./components/AddButton";

function App() {

  const [count, setCount] = useState(0)
  return (
    <>
    <GlobalStyle />
    <Header />
    <main>
      <Wrapper>
        <GridContainer>

          <ImgWrapper>
            <Img alt="sneaker" src={sneaker}></Img>
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
    </main>
    </>
  )
}

export default App;
