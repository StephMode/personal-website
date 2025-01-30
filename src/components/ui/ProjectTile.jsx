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
  background-color: rgba(200, 200, 2000, 20%);
  border-radius: 10px;
`;

const StyledProjectCardWrapperInside = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px dotted pink;
  width: 100%;
  padding: var(--padding-s);
  gap: 10px;
`;

const StyledParagraph = styled.p`
  text-align: left;
  margin: 0;
  display: block;
  width: 100%;
  /* max-width: 200px; */
  word-wrap: break-word;
  font-size: var(--fontSize-paragraph);
  @media screen and (max-width: 840px) {
    font-size: var(--fontSize-paragraph-mobile);
  }
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;
