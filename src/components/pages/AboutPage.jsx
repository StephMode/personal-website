import styled, { ThemeProvider } from "styled-components";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPage() {
  return (
    <StyledGridContainer>
      <SectionHeading sectionName={"About"} />
      <StyledGridElement>
        <StyledGridParagraph>
          I am fascinated by web technologies, the digital economy and design.
          Before pursuing web development, I had the opportunity to explore the
          venues of Software Sales, advised users and managed implementation
          projects. This experience made it clear to me that I wanted to be even
          closer to software development.
        </StyledGridParagraph>
      </StyledGridElement>
      <ThemeProvider theme={right}>
        <StyledGridElement>
          <StyledGridParagraph>
            That's why I decided to dedicate myself fully to learning web
            development and make it my profession. In doing so, I have turned my
            fascination and passion for learning and constant challenge into
            action.
          </StyledGridParagraph>
        </StyledGridElement>
      </ThemeProvider>
      <StyledGridElement>
        <StyledGridParagraph>
          Now I am highly motivated to bring my technical skills and soft skills
          to a team of developers and work on projects and products. I am a
          passionate team player and able to learn new topics quickly and
          effectively. Thanks to my professional experience, I also have strong
          communication skills, a focus on results and the ability to organize
          myself.
        </StyledGridParagraph>
      </StyledGridElement>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 600px;
  gap: 25px;
  @media screen and (max-width: 640px) {
    max-width: 400px;
  }
  @media screen and (max-width: 400px) {
    max-width: 330px;
    gap: 10px;
    grid-template-rows: repeat(3);
  }
`;

const StyledGridElement = styled.div`
  justify-self: ${(props) => props.theme.justifySelf};
  padding: var(--padding-s);
  border: 1px solid black;
  max-width: 400px;
  box-shadow: 5px 5px var(--boxShadow-color-primary);
  border-radius: 10px;
  background-color: var(--backgroundColor-element-light);
  @media screen and (max-width: 400px) {
    justify-self: start;
  }
`;
StyledGridElement.defaultProps = {
  theme: {
    justifySelf: "start",
  },
};
const right = {
  justifySelf: "end",
};

const StyledGridParagraph = styled.p`
  text-align: justify;
  margin: 10px 5px;
  display: block;
  max-width: inherit;
  word-wrap: break-word;
  font-size: var(--fontSize-paragraph);
  @media screen and (max-width: 400px) {
    font-size: var(--fontSize-paragraph-mobile);
    margin: 5px 0;
  }
`;
