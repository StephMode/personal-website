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
      <h1>Stephan Model</h1>
      <h2>Front End Developer</h2>
      <img src={portrait} alt="portrait" width={330} height={"auto"} />
      <p>
        conceptual<span> / </span>
        interdisciplinary<span> / </span>
        agile
      </p>

      <section className="about-me--section">
        <h3>About</h3>
        <p>
          Background in international sales, project management, and tech
          partnerships. Currently learning web development at neue fische,
          building real-world projects.
        </p>
        <p>
          Eager to bring my technical skills and collaborative mindset to a
          development team, crafting user-centered, visually engaging
          interfaces.
        </p>
      </section>

      <section className="connect--section">
        <h3>Let's connect</h3>
        <a href="https://github.com/StephMode" target="_blank">
          <img
            src={githubIcon}
            className="logo"
            alt="Vite logo"
            height={40}
            width={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/stephanmodel" target="_blank">
          <img
            src={linkedInIcon}
            className="logo"
            alt="Vite logo"
            height={40}
            width={40}
          />
        </a>
      </section>
    </>
  );
}

export default App;
