import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  font-size: 1.075rem;
  font-weight: bolder;
  background-color: rgb(254,125,27);
  box-shadow: 0px 5px 10px rgba(254,125,27, 0.7);
  min-height: 60px;
  max-width: 500px;
  width: 100%;
  border: 0;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.05);
  }
  
  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }


  @media screen and (min-width:800px) {
    max-width: 320px;
  }
  `