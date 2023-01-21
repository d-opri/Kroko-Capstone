import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --fs-title: 2rem;
    --fs-subtitle: 1.4rem;
    --fs-caption: 1.2rem;
    --fs-links: 1rem;

    --clr-primary: rgba(52, 52, 52, 1);
    --clr-secondary: rgba(189, 188, 188, 1);
    --clr-accent: rgba(90, 90, 90, 1);
    --negative-balance: rgba(255, 59, 48, 1);
    --positive-balance: rgba(52, 199, 89, 1);

  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
