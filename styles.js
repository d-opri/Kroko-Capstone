import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --fs-title: 1.8392rem;
    --fs-subtitle: 1.2rem;
    --fs-caption: 1rem;
    --fs-label: .85rem;

    
    --clr-primary: rgba(244, 246, 252, 1);
    --clr-secondary: rgba(255, 255, 255, 1);
    --clr-accent: rgba(56, 71, 189, 1);
    
    --secondary-txt: rgba(51, 64, 79, 1);
    --clr-link: rgba(56, 71, 189, 1);
    --negative-balance: rgba(235, 93, 86, 1);
    --positive-balance: rgba(75, 212, 175, 1);



  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }

  body {
    font-family: system-ui;
    background-color: var(--clr-primary);
    font-size: 1rem;
  
  }
`;
