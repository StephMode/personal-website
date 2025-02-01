import styled from "styled-components";
import SkillRow from "../layout/SkillRow";

const skillGroups = [
  {
    id: 1,
    heading: "Languages",
    paragraph:
      "I'm passionate about writing semantic, clean and concise code in these languages that form the bedrock of web technology.",
    skills: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 2,
    heading: "Technologies",
    paragraph:
      "I've gained practical experience using these technoligies to realize web development projects.",
    skills: [
      "React",
      "Git",
      "StyledComponents",
      "NextJS",
      "NodeJS",
      "npm",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
    ],
  },
  {
    id: 3,
    heading: "Tools",
    paragraph:
      "These are the tools with which I turn my ideas into code and design.",
    skills: ["Visual Studio Code", "GitHub", "Confluence", "JIRA", "Figma"],
  },
];

export default function TechStackPage() {
  return (
    <StyledGridContainer>
      {skillGroups.map((group) => {
        return (
          <StyledGridElement>
            <StyledHeadline>{group.heading}</StyledHeadline>
            <StyledParagraph>{group.paragraph}</StyledParagraph>
            <SkillRow skills={group.skills} />
          </StyledGridElement>
        );
      })}
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, minmax(200px, 1fr));
  align-items: center;
  width: 600px;
  gap: 20px;
  @media screen and (max-width: 600px) {
    max-width: 85%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 15px;
    align-items: center;
  }
`;

const StyledGridElement = styled.div`
  max-width: 80%;
  border: 1px solid black;
  box-shadow: 5px 5px;
  border-radius: 10px;
  background-color: var(--backgroundColor-element-light);
  &:nth-child(2) {
    justify-self: end;
  }
  @media screen and (max-width: 600px) {
    font-size: var(--fontSize-paragraph-mobile);
    max-width: 100%;
    justify-self: center;
  }
`;

const StyledHeadline = styled.h2`
  margin: 0 10px;
`;

const StyledParagraph = styled.p`
  margin: 0 10px;
  font-weight: 300;
`;
