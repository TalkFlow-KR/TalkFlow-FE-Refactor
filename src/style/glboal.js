import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font:inherit;
    color:inherit;
  }
  *, 
  :after, 
  :before {
    box-sizing:border-box;
    flex-shrink:0;
   }
  :root {
    -webkit-tap-highlight-color:transparent;
    -webkit-text-size-adjust:100%;
    text-size-adjust:100%;
    cursor:default;
    line-height:1.5;
    overflow-wrap:break-word;
    word-break:break-word;
    tab-size:4}
  html, 
  body {
    height:100%;
    box-sizing: border-box;
    
  }
`;

export default GlobalStyle;
