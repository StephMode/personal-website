import styled from "styled-components";
import ProjectTile from "../layout/ProjectTile";

const projects = [
  {
    title: "rooted",
    description:
      "Digital handbook with tips on plants and plant care. Final project of the Web Development Bootcamp. Development in a team of 4 people using agile methodology.",
    technologies: ["React", "StyledComponents"],
    imageURL: "/images/project-showcase-rooted.png",
    repoLinkURL: "https://github.com/StephMode/plant-pal",
    demoLinkURL: "https://rooted-capstone.vercel.app/",
  },
  {
    title: "iro",
    description:
      "Single Page Color Palette Application. Project of the Web Development Bootcamp, in which I built a frontend in React for the first time. I am constantly developing the app further. ",
    technologies: ["React", "StyledComponents"],
    imageURL: "/images/project-showcase-iro.png",
    repoLinkURL: "https://github.com/StephMode/iro",
    demoLinkURL: "https://iro-app.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
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
  );
}

const StyledProjectTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-evenly;
  align-items: flex-start;

  max-width: 750px;
`;
