import styled from "styled-components";
import ProjectTile from "../ui/ProjectTile";

const projects = [
  {
    title: "rooted",
    description:
      "Digital handbook with tips on plants and plant care. Final project of the Web Development Bootcamp. Development in a team of 4 people using agile methodology.",
    technologies: ["React", "StyledComponents"],
  },
  {
    title: "iro",
    description:
      "Single Page Color Palette Application. Project of the Web Development Bootcamp, in which I built a frontend in React for the first time. I am constantly developing the app further. ",
    technologies: ["React", "StyledComponents"],
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
          />
        );
      })}
    </StyledProjectTileContainer>
  );
}

const StyledProjectTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: repeat(1, minmax(330px, 1fr));
  border: 1px solid green;
`;
