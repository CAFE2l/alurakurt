import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  html,
  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
    
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
