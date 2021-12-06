import styled from "styled-components";

export const ControllsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);

  @media screen and (min-width:800px) {
    display: none;
  }
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  font-size: 1.75rem;
  font-weight: bolder;
  border-radius: 50%;
  line-height: 40px;
  transition: 0.4s ease;
  border: 0;

  &::before, &:focus {
    background-color: lightgray;
  } 
`