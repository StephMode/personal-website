import styled, { ThemeProvider } from "styled-components";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPage() {
  return (
    <StyledGridContainer>
      <SectionHeading sectionName={"About"} />
      <StyledGridElement>
        <StyledGridParagraph>
          Building on my experience in sales and project management within the
          software industry, I pivoted to web development through an intensive
          bootcamp. This journey allowed me to develop technical skills, create
          portfolio projects, and build valuable connections along the way.
        </StyledGridParagraph>
      </StyledGridElement>
      <ThemeProvider theme={right}>
        <StyledGridElement>
          <StyledGridParagraph>
            Today, I work with a software engineering team at an engineering
            consultancy, focusing on specialized civil engineering software for
            energy infrastructure. My multi-faceted role combines project
            management, testing, technical writing, and user support—bridging my
            business background with technical work alongside developers.
          </StyledGridParagraph>
        </StyledGridElement>
      </ThemeProvider>
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
