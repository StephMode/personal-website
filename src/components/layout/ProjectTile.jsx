import styled from "styled-components";

export default function ProjectTile({
  projectTitle,
  projectDescription,
  projectTechnologies,
  projectImage,
}) {
  return (
    <StyledProjectCard>
      <StyledImage src={projectImage} alt="img" />
      <StyledProjectCardWrapperInside>
        <h2>{projectTitle}</h2>
        <StyledParagraph>{projectDescription}</StyledParagraph>
        <ul>
          {projectTechnologies.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
      </StyledProjectCardWrapperInside>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: var(--padding-s);
  background-color: rgba(251, 251, 251, 45%);
  border-radius: 10px;
  transition: all 0.3s linear 0.1s;
  &:hover {
    box-shadow: 5px 5px 0.75px #bcbbb5;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    height: 500px;
    padding: var(--padding-xs);
    align-items: flex-start;
    &:hover {
      box-shadow: none;
    }
  }
`;

const StyledProjectCardWrapperInside = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--padding-s);
  gap: 25px;
`;

const StyledParagraph = styled.p`
  text-align: left;
  margin: 0;
  display: block;
  width: 100%;
  word-wrap: break-word;
  font-size: var(--fontSize-paragraph);
`;

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  padding: var(--padding-s);
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
  @media screen and (max-width: 840px) {
    padding: var(--padding-xs);
  }
`;
