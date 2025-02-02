import styled from "styled-components";
import ProjectTile from "../layout/ProjectTile";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <SectionHeading sectionName={"Projects"} />
      <StyledProjectTileContainer>
        {projects.map((project) => {
          return (
            <ProjectTile
              projectTitle={project.title}
              projectDescription={project.description}
              projectTechnologies={project.technologies}
              projectImage={project.imageURL}
              projectRepoLink={project.repoLinkURL}
              projectDemoLink={project.demoLinkURL}
            />
          );
        })}
      </StyledProjectTileContainer>
    </>
  );
}

const StyledProjectTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: var(--padding-s);

  max-width: 700px;
  @media screen and (max-width: 400px) {
    gap: 5px;
    padding: var(--padding-xs);
  }
`;
