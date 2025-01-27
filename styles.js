import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-family: "Outfit", sans-serif;
  font-weight: 400;

  --text-color-primary: #171400; // smokey black
  
  --backgroundColor-primary: #F1EFE4; // alabaster

  --fontSize-title: 104;
  --fontSize-subTitle: 70;
  --fontSize-navBar: 24;
  --fontSize-pageHeading: 186;
  --fontSize-sectionHeading: 48;
  --fontSize-sectionSubHeading: 36;
  --fontSize-paragraph: 18;

  --fontWeight-title: 800;
  --fontWeight-subTitle: 600;
  --fontWeight-navBar: 500;
  --fontWeight-pageHeading: 600;
  --fontWeight-sectionHeading: 500;
  --fontWeight-sectionSubHeading: 500;
  --fontWeight-paragraph: 400;



  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
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
  color: var(--main-font-color--diesel);
  background-color: var(--main-bg-color--westar);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
`;
