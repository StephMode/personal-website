import styled from "styled-components";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import TechStackPage from "./components/pages/TechStackPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ConnectPage from "./components/pages/ConnectPage";

export default function App() {
  return (
    <main>
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

      <StyledSection id="projects">
        <ProjectsPage />
      </StyledSection>

      <StyledSection id="connect">
        <ConnectPage />
      </StyledSection>
      <StyledFooter>made by me</StyledFooter>
    </main>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
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
  overflow: hidden;
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  margin: 10px 25px;
`;
