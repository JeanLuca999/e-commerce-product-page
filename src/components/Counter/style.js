import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  height: 50px;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  margin-top: 1rem;
  margin-right: 10px;

  @media screen and (min-width:800px) {
    max-width: 200px;
  }
`

export const Button = styled.button `
  background-color: transparent;
  border: 0;
  color: orange;
  font-weight: bolder;
  font-size: 2.25rem;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    background-color: lightgray;
  }
`

export const CounterText = styled.span`
  color: #000;
  font-size: 1.5rem;
  font-weight: bolder;
`