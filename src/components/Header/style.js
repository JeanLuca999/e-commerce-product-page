import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 2rem 1rem;
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 700px) {
    align-items: center;
    border-bottom: 1px solid #42424252;
    padding-bottom: 2rem;
  }
`

export const LogoText = styled.h1`
  color: #000;
  font-weight: 600;
  letter-spacing: -1px;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;

  @media screen and (min-width: 700px) {
    margin-left: 2.5rem;
  }
`

export const Li = styled.li`
  margin: 10px;
`

export const Link = styled.a`
  text-decoration: none;
  display: block;
  font-size: 1.125rem;
  color: #999999;
  font-weight: 600;
  cursor: pointer;

  &:hover, &:focus {
    color: #5c5c5c;
  }
`