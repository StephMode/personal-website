import styled from "styled-components";
import SkillRow from "../layout/SkillRow";

const skillGroups = [
  { id: 1, heading: "Languages", skills: ["JavaScript", "HTML5", "CSS3"] },
  {
    id: 2,
    heading: "Technologies",
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
    skills: ["Visual Studio Code", "GitHub", "Confluence", "JIRA", "Figma"],
  },
];

export default function TechStackPage() {
  return (
    <StyledGridContainer>
      <StyledGridElement>
        {skillGroups.map((group) => {
          return (
            <>
              <h2>{group.heading}</h2>
              <SkillRow skills={group.skills} />
            </>
          );
        })}
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
