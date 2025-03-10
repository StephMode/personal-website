import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import TechStackPage from "./components/pages/TechStackPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ConnectPage from "./components/pages/ConnectPage";

export default function App() {
  return (
    <>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <main>
        <ThemeProvider theme={homePage}>
          <StyledSection id="home">
            <HomePage />
          </StyledSection>
        </ThemeProvider>

        <StyledSection id="projects">
          <ProjectsPage />
        </StyledSection>

        <StyledSection id="skills">
          <TechStackPage />
        </StyledSection>

        <StyledSection id="about">
          <AboutPage />
        </StyledSection>

        <ThemeProvider theme={connectPage}>
          <StyledSection id="connect">
            <ConnectPage />
          </StyledSection>
        </ThemeProvider>
      </main>
      <StyledFooter>
        Built with React & Vite | Stephan Model | 2025
      </StyledFooter>
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
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
  padding-top: 40px;
  gap: 10px;
`;

StyledSection.defaultProps = {
  theme: {
    height: "",
  },
};
const homePage = {
  height: "100vh",
};
const connectPage = {
  height: "90vh",
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: -10;
  z-index: 1;
  margin: 25px;
`;
