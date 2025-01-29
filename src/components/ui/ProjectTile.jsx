import styled from "styled-components";

export default function ProjectTile({
  projectTitle,
  projectDescription,
  projectTechnologies,
}) {
  return (
    <StyledProjectCard>
      <h2>{projectTitle}</h2>
      <StyledParagraph>{projectDescription}</StyledParagraph>
      <ul>
        {projectTechnologies.map((tech) => {
          return <li>{tech}</li>;
        })}
      </ul>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

const StyledParagraph = styled.p`
  text-align: left;
  margin: 00;
  padding: var(--padding-xs);
  display: block;
  width: 100%;
  max-width: 200px;
  word-wrap: break-word;
  font-size: var(--fontSize-paragraph);
  @media screen and (max-width: 840px) {
    font-size: var(--fontSize-paragraph-mobile);
  }
`;
