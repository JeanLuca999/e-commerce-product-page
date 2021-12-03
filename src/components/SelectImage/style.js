import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
  justify-content: space-evenly;
`

export const ImageIcon = styled.div`
  background-color: red;
  margin: 0 10px;
  width: 90%;
  height: 100px;
  max-width: 100px;
  cursor: pointer;

  background-image: url(${props => props.path});
  background-position: top;
  background-size: cover;
  position: relative;
  z-index: 2;
  border-radius: 10px;

  &::before {
    display: ${props => props.active ? 'block' : 'none'};
    content: '';
    position: absolute;
    background-color: rgba(255,255,255,0.5);
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 3px solid rgb(254,125,27);
    border-radius: 10px;
  }
`