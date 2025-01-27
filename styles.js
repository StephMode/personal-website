import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;

  --main-font-color--diesel: #18000a;
  --main-bg-color--westar: #e1dfdd;

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
  font-family: "Montserrat";
  src: url("/public/fonts/Montserrat-VariableFont_wght.ttf") format("truetype");
}

body {
  color: var(--main-font-color--diesel);
  background-color: var(--main-bg-color--westar);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
`;
