import styled, { ThemeProvider } from "styled-components";
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

      <StyledSection id="skills">
        <TechStackPage />
      </StyledSection>

      <StyledSection id="projects">
        <ProjectsPage />
      </StyledSection>

      <ThemeProvider theme={connectPage}>
        <StyledSection id="connect">
          <ConnectPage />
        </StyledSection>
      </ThemeProvider>

      <StyledFooter>
        Built with React & Vite | Stephan Model | 2025
      </StyledFooter>
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
  height: ${(props) => props.theme.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 10px;
`;
StyledSection.defaultProps = {
  theme: {
    height: "100vh",
  },
};
const connectPage = {
  height: "85vh",
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: -10;
  z-index: 1;
  margin: 25px;
`;
