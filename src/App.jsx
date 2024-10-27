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
      <section className="about-me--section">
        <h3>About</h3>
        <p>
          Aspiring Front-End Developer with a background in international sales,
          project management, and tech partnerships. Currently training in web
          development at neue fische, building real-world projects.
        </p>
        <p>
          In past roles, I led sales and integration projects across Europe,
          focused on creating solutions that blend function with form
        </p>
        <p>
          Now, I’m eager to bring my technical skills and collaborative mindset
          to a development team, crafting user-centered, visually engaging
          interfaces.
        </p>
      </section>

      <section className="connect--section">
        <h3>Let's connect</h3>
        <a href="https://vite.dev" target="_blank">
          <img src={linkedInIcon} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={githubIcon} className="logo" alt="Vite logo" />
        </a>
      </section>
    </>
  );
}

export default App;
