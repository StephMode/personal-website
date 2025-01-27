import { useState } from "react";
import reactLogo from "./assets/react.svg";
import linkedInIcon from "./assets/linkedIn.svg";
import githubIcon from "./assets/github.svg";
import mailLogo from "./assets/mail.svg";
import styled from "styled-components";
// import "./App.css";

export default function App() {
  return (
    <StyledMain>
      <header>
        <p>// STEPHAN MODEL</p>
      </header>
      <StyledSection>
        <h1>
          Front End <br /> Developer
        </h1>
        <ul>
          <li>React</li>
          <li> / </li>
          <li>Git & GitHub</li>
          <li> / </li>
          <li>HTML & CSS</li>
        </ul>
      </StyledSection>

      <StyledSection>
        <h2>About</h2>
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
      </StyledSection>

      <StyledSection>
        <h2>Let's connect</h2>
        <a href="https://github.com/StephMode" target="_blank">
          <img src={githubIcon} alt="github logo" height={40} width={40} />
          <span> / </span>
          My projects & how I work
        </a>
        <br />
        <a href="https://www.linkedin.com/in/stephanmodel" target="_blank">
          <img src={linkedInIcon} alt="linkedin logo" height={40} width={40} />
          <span> / </span>
          My professional journey
        </a>
      </StyledSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 0px 150px;
`;

const StyledSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
