import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: #000000 !important; /* Force black background */
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #root {
    background: #000000 !important; /* Root juga hitam */
    min-height: 100vh;
  }

  /* Prevent white flash during transitions */
  .page-transition-wrapper {
    background: #000000;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
