import styled from "styled-components";
import ProjektLinks from "../ui/ProjektLinks";
import Badge from "../ui/Badge";

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
            return <Badge tech={tech} badgeTheme={"tech"} />;
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
  align-items: center;
  max-height: 300px;
  padding: var(--padding-s);
  background-color: var(--backgroundColor-element-light);
  border-radius: 10px;
  box-shadow: 5px 5px 0.75px #bcbbb5;
  @media screen and (max-width: 840px) {
    padding: var(--padding-xs);
  }
`;

const StyledProjectCardWrapperInside = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-s);
  gap: 25px;
  @media screen and (max-width: 800px) {
    gap: 15px;
  }
  @media screen and (max-width: 450px) {
    gap: 5px;
  }
`;

const StyledParagraph = styled.p`
  text-align: left;
  margin: 0;
  display: block;
  width: 100%;
  word-wrap: break-word;
  font-size: var(--fontSize-paragraph);
  @media screen and (max-width: 840px) {
    font-size: var(--fontSize-paragraph-mobile);
  }
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
  max-width: 250px;
  border-radius: 10px;

  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
  @media screen and (max-width: 800px) {
    max-width: 150px;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
