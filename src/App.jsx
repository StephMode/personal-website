import linkedInIcon from "./assets/linkedIn.svg";
import githubIcon from "./assets/github.svg";
import styled from "styled-components";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import TechStackPage from "./components/pages/TechStackPage";

export default function App() {
  return (
    <StyledMain>
      <StyledHeader>
        <Navbar />
      </StyledHeader>

      <StyledSection id="home">
        <HomePage />
      </StyledSection>

      <StyledSection id="about">
        <AboutPage />
      </StyledSection>

      <StyledSection id="techstack">
        <TechStackPage />
      </StyledSection>

      <StyledSection id="connect">
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
      <StyledFooter>made by me</StyledFooter>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* padding: 0px 150px; */
`;

const StyledHeader = styled.header`
  /* border: 1px solid green; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--backgroundColor-primary);
`;

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  margin: 10px 25px;
`;
