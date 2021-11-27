import styled from "styled-components";

export const AvatarIcon = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
  margin-left: 0.75rem;

  @media screen and (min-width:800px) {
    width: 70px;
    height: 70px;
  }
`