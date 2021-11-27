import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  z-index: 4;
  min-width: 24px;
  min-height: 24px;
  margin-right: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`

export const MenuElement = styled.div`
  width:100%;
  height: 3px;
  margin-top: 3px;
  background-color: #000;

  &:nth-of-type(1) {
    margin-top: 0;
  }
`