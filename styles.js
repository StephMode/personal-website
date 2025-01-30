import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-family: "Outfit", sans-serif;
  font-weight: 400;

  --text-color-primary: #171400; // smokey black
  
  --backgroundColor-primary: #F1EFE4; // alabaster

  --fontSize-title: 76px;
  --fontSize-subTitle: 46px;
  --fontSize-navBar: 24px;
  --fontSize-pageHeading: 186px;
  --fontSize-sectionHeading: 48px;
  --fontSize-sectionSubHeading: 36px;
  --fontSize-paragraph: 18px;
  --fontSize-paragraph-mobile: 12px;

  --fontWeight-title: 800;
  --fontWeight-subTitle: 600;
  --fontWeight-navBar: 500;
  --fontWeight-pageHeading: 600;
  --fontWeight-sectionHeading: 500;
  --fontWeight-sectionSubHeading: 500;
  --fontWeight-paragraph: 400;

  --padding-xs: 5px;
  --padding-s: 10px;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  width: 100%;
}

/* Global list stylings */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.4rem;
}

/* Montserrat import */
@font-face {
  font-family: "Outfit";
  src: url("/public/fonts/Outfit-VariableFont_wght.ttf") format("truetype");
}

body {
  color: var(--text-color-primary);
  background-color: var(--backgroundColor-primary);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

h1, h2, h3, h4 {
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--text-color-primary);
}

`;
