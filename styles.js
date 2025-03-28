import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-family: "Outfit", sans-serif;
  font-weight: 400;

  --text-color-primary: #171400; // smokey black
  --text-color-accent-light: rgba(251,251,251,75%); // white with alpha value
  --text-color-heading-accent: #DCD7BC; //pearl, darker shade of alabaster

  --backgroundColor-primary: #F1EFE4; // alabaster
  --backgroundColor-element-light: rgba(251, 251, 251, 65%); // white with alpha

  --boxShadow-color-primary: #2b2927; // jet-black --for non-interactive elements
  --boxShadow-color-light: #C5C4BF; // silver --for interactive elements

  --backgroundColor-badge--theme-skill: rgba(23, 20, 0, 20%);
  --backgroundColor-badge-hover--theme-skill: rgba(23, 20, 0, 5%);
  --backgroundColor-badge--theme-technology: rgba(23, 20, 0, 65%);
  --backgroundColor-badge-hover--theme-technology: rgba(23, 20, 0, 45%);

  --fontSize-title: 56px;
  --fontSize-subTitle: 46px;
  --fontSize-navBar: 24px;
  --fontSize-navBar-mobile: 16px;
  --fontSize-pageHeading: 186px;
  --fontSize-sectionHeading: 48px;
  --fontSize-sectionSubHeading: 36px;
  --fontSize-paragraph: 18px;
  --fontSize-paragraph-mobile: 14px;
  --fontSize-badge: 16px;
  --fontSize-badge-mobile: 12px;

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
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

/* Global list stylings */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.4rem;
}

@font-face {
  font-family: "Outfit";
  src: url("/public/fonts/Outfit-VariableFont_wght.ttf") format("truetype");
}

body {
  color: var(--text-color-primary);
  background-color: var(--backgroundColor-primary);
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4 {
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--text-color-primary);
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%; 
  line-height: 1.15;
  margin: 0;
  cursor: pointer;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  font-size: var(--button-font-size-main);
  padding: 0;
  border: none;
  outline: none;
  color: inherit;
  background: none;
}

`;
