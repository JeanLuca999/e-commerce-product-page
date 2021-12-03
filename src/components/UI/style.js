import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width:800px) {
    padding-top: 3rem;
  }
`

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  padding-right: 1rem;
  text-align: center;
`

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  max-width: 500px;
`

export const ContentWrapper = styled.div `

`

export const SneakerTitle = styled.h3`
  color: orange;
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  margin-top: 2.5rem;
`

export const ProductTitle = styled.h1`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: bolder;
  line-height: 1.2;
  margin-top: 1.5rem;
`

export const ProductText = styled.p`
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  color: #999999;
  margin-top: 2rem;
  font-weight: 500;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media screen and (min-width: 800px) {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
  }
`

export const PriceText = styled.span `
  color: #000;
  font-size: 2rem;
  font-weight: bolder;
  font-family: "Poppins",sans-serif;
  position: relative;
  display: inline-block;
  max-width: 100px;

  &::before {
    content: '50%';
    width: 50px;
    background-color: #ffecc8;
    color: #000;
    position: absolute;
    top: 50%;
    right: -80%;
    font-size: 1.25rem;
    color: orange;
    text-align: center;
    border-radius: 10%;
    transform: translateY(-50%);
  }

  @media screen and (min-width:800px) {
    &::before {
      right: -100%;
    }
  }
`

export const DiscountText = styled.span`
  color: lightgray;
  font-size: 1.5rem;
  text-decoration: line-through;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`

export const ButtonContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  justify-content: center;

  @media screen and (min-width:800px) {
    justify-content: space-between;
  }
`