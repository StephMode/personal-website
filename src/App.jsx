import linkedInIcon from "./assets/linkedIn.svg";
import githubIcon from "./assets/github.svg";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <StyledMain>
      <StyledHeader>
        <Navbar />
      </StyledHeader>

      <StyledSection id="home">
        <HomePage />
      </StyledSection>
      <ThemeProvider theme={contrast}>
        <StyledSection id="about">
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
      </ThemeProvider>
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
  /* padding: 0 250px; */
  background-color: ${(props) => props.theme.main};
`;
StyledSection.defaultProps = {
  theme: {
    main: "var(--backgroundColor-primary)",
  },
};
const defaultTheme = {
  main: "var(--backgroundColor-primary)",
};
const contrast = {
  main: "#dbc129",
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  margin: 10px 25px;
`;
