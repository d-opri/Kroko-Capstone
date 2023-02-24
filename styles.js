import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --fs-title: 1.5rem;
    --fs-subtitle: 1.2rem;
    --fs-caption: 1rem;
    --fs-link: .85rem;
    --fs-label: .85rem;

    
    --clr-primary: rgba(23, 22, 27, 1);
    --clr-secondary: rgba(31, 31, 35, 1);
    --clr-accent: rgba(244, 195, 230, 1);
    --clr-hover: rgba(233, 150, 209, 1);
    

    --txt-primary: rgba(244, 246, 252, 1);
    --txt-secondary: rgba(51, 64, 79, 1);
    --txt-link: rgba(194, 222, 246, 1);
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
    font-family: 'Poppins', sans-serif;
    background-color: var(--clr-primary);
    font-size: 1rem;
  
  
  }
`;
