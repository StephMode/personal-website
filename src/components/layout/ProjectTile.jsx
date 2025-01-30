import styled from "styled-components";
import ProjektLinks from "../ui/ProjektLinks";

export default function ProjectTile({
  projectTitle,
  projectDescription,
  projectTechnologies,
  projectImage,
  projectRepoLink,
  projectDemoLink,
}) {
  return (
    <StyledProjectCard>
      <StyledImageLink href={projectDemoLink}>
        <StyledImage src={projectImage} alt="img" />
      </StyledImageLink>
      <StyledProjectCardWrapperInside>
        <h2>{projectTitle}</h2>
        <StyledParagraph>{projectDescription}</StyledParagraph>
        <ul>
          {projectTechnologies.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
        <ProjektLinks
          projectRepoLink={projectRepoLink}
          projectDemoLink={projectDemoLink}
        />
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
  background-color: rgba(251, 251, 251, 65%);
  border-radius: 10px;
  transition: all 0.3s linear 0.1s;
  &:hover {
    box-shadow: 5px 5px 0.75px #bcbbb5;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    height: 520px;
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

const StyledImageLink = styled.a`
  display: inline-block;
  line-height: 0;
  padding: var(--padding-s);
  @media screen and (max-width: 840px) {
    padding: var(--padding-xs);
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 250px;
  border-radius: 10px;

  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;
