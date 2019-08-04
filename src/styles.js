import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background: #f6f5f7;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`;

export default GlobalStyles;
