import styled from "styled-components";

export const CartIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const CartWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;

  @media screen and (min-width:800px) {
    width: 50px;
    height: 50px;
  }
`