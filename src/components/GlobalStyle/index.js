import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 75%;

    @media screen and (min-width: 700px) {
      font-size: 100%;
    }
  }

  body {
    font-family: sans-serif;
  }
`