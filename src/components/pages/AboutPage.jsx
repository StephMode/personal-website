import styled from "styled-components";
import SkillRow from "../layout/SkillRow";

export default function AboutPage() {
  return (
    <StyledGridContainer>
      <StyledGridElement>
        <StyledGridParagraph>
          I am fascinated by web technologies, the digital economy and design.
          Before pusuing web development, I had the opportunity to explore the
          venues of Software Sales, advised users and managed implementation
          projects. This experience made it clear to me that I wanted to be even
          closer to software development.
        </StyledGridParagraph>
        <StyledGridParagraph>
          That's why I decided to dedicate myself fully to learning web
          development and make it my profession. In doing so, I have turned my
          fascination and passion for learning and constant challenge into
          action.
        </StyledGridParagraph>
        <StyledGridParagraph>
          Now I am highly motivated to bring my technical skills and soft skills
          to a team of developers and work on projects and products.
        </StyledGridParagraph>
        <StyledGridParagraph>
          I am a passionate team player and able to learn new topics quickly and
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
  grid-template-columns: repeat(1, minmax(600px, 1fr));
  grid-template-rows: repeat(1, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(1, minmax(600px, 1fr));
    grid-template-rows: repeat(2, minmax(300px, 1fr));
  }
`;

const StyledGridElement = styled.div`
  justify-self: center;
  text-align: center;
  margin: 0;
  max-width: 600px;
`;

const StyledGridParagraph = styled.p`
  justify-self: center;
  align-self: center;
  text-align: left;
  margin: 0 0 20px 0;
  padding: var(--padding-xs);
  display: block;
  width: 100%;
  max-width: inherit;
  word-wrap: break-word;
  font-size: var(--fontSize-paragraph);
  @media screen and (max-width: 840px) {
    font-size: var(--fontSize-paragraph-mobile);
  }
`;
