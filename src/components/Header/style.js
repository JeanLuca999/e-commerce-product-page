import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 2rem 1rem;
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  padding-bottom: 2rem;

  @media screen and (min-width: 800px) {
    align-items: center;
    border-bottom: 1px solid #42424252;
  }
`

export const LogoText = styled.h1`
  color: #000;
  font-weight: 600;
  letter-spacing: -1px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;

  @media screen and (min-width:800px) {
    font-size: 28px;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: rgb(254,125,27);
  position: absolute;
  top: 0;
  left: ${props => props.visible ? '0%' : '-100%'};
  width: 100%;
  max-width: 500px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  transition-timing-function: ease;
  transition-duration: 0.4s;

  @media screen and (min-width: 800px) {
    margin-left: 2.5rem;
    max-width: initial;
    height: initial;
    background-color: initial;
    flex-direction: row;
    position: initial;
    justify-content: initial;
  }
`

export const Li = styled.li`
  margin: 10px;
`

export const Link = styled.a`
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover, &:focus {
    color: #000;
  }

  @media screen and (min-width:800px) {
    color: #999999;

    &:hover, &:focus {
      color: #5c5c5c;
    }
  }
`