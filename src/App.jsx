import { useState } from "react";
import reactLogo from "./assets/react.svg";
import linkedInIcon from "./assets/linkedIn.svg";
import githubIcon from "./assets/github.svg";
import mailLogo from "./assets/mail.svg";

import portrait from "./assets/images/portrait.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <header className="page-header--container">
        <p className="page-header--logo">// STEPHAN MODEL</p>
      </header>
      <section className="page-title--container">
        <h1 className="page-title--heading">
          Front End <br /> Developer
        </h1>
        <ul className="page-title--tags">
          <li>React</li>
          <li className="divider"> / </li>
          <li>Git & GitHub</li>
          <li className="divider"> / </li>
          <li>HTML & CSS</li>
        </ul>
      </section>
      <section className="hero-section--container">
        <img
          src={portrait}
          alt="portrait"
          width={"auto"}
          height={"auto"}
          className="hero-section--image"
        />
        <figcaption className="hero-section--tags">
          conceptual<span> / </span>
          interdisciplinary<span> / </span>
          agile
        </figcaption>
      </section>

      <section className="about-me--container">
        <h2 className="section--heading">About</h2>
        <p className="about-me--section--paragraph">
          Background in international sales, project management, and tech
          partnerships. Currently learning web development at neue fische,
          building real-world projects.
        </p>
        <p className="about-me--section--paragraph">
          Eager to bring my technical skills and collaborative mindset to a
          development team, crafting user-centered, visually engaging
          interfaces.
        </p>
      </section>

      <section className="connect-section--container">
        <h2 className="section--heading">Let's connect</h2>
        <a
          href="https://github.com/StephMode"
          target="_blank"
          className="connect-section--link"
        >
          <img
            src={githubIcon}
            className="icon"
            alt="github logo"
            height={40}
            width={40}
          />
          <span className="divider"> / </span>
          My projects & how I work
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/stephanmodel"
          target="_blank"
          className="connect-section--link"
        >
          <img
            src={linkedInIcon}
            className="icon"
            alt="linkedin logo"
            height={40}
            width={40}
          />
          <span className="divider"> / </span>
          My professional journey
        </a>
      </section>
    </>
  );
}

export default App;
