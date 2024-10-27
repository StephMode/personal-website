import { useState } from "react";
import reactLogo from "./assets/react.svg";
import linkedInIcon from "./assets/linkedIn.svg";
import githubIcon from "./assets/github.svg";
import mailLogo from "./assets/mail.svg";

import viteLogo from "/vite.svg";
import portrait from "./assets/images/portrait.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <img src={portrait} alt="portrait" width={460} height={328} />
      <p>
        conceptual<span> / </span>
        interdisciplinary<span> / </span>
        agile
      </p>
      <h1>Stephan Model</h1>
      <h2>Front End Developer</h2>
      <h3>About</h3>
      <p>Bullet</p>
      <p>Bullet</p>
      <p>Bullet</p>

      <h3>Let's connect</h3>
      <a href="https://vite.dev" target="_blank">
        <img src={linkedInIcon} className="logo" alt="Vite logo" />
      </a>
      <a href="https://vite.dev" target="_blank">
        <img src={githubIcon} className="logo" alt="Vite logo" />
      </a>
    </>
  );
}

export default App;
