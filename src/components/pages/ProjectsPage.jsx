import styled from "styled-components";
import ProjectTile from "../ui/ProjectTile";

const projects = [
  {
    title: "rooted",
    description:
      "Digital handbook with tips on plants and plant care. Final project of the Web Development Bootcamp. Development in a team of 4 people using agile methodology.",
    technologies: ["React", "StyledComponents"],
    imageURL: "/images/project-showcase-rooted.png",
  },
  {
    title: "iro",
    description:
      "Single Page Color Palette Application. Project of the Web Development Bootcamp, in which I built a frontend in React for the first time. I am constantly developing the app further. ",
    technologies: ["React", "StyledComponents"],
    imageURL: "/images/project-showcase-iro.png",
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
  width: 800px;

  @media screen and (max-width: 840px) {
  }
`;

// const StyledProjectTileContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(400px, 1fr));
//   grid-template-rows: repeat(1, minmax(450px, 1fr));
//   border: 5px solid green;
//   gap: 10px;
//   @media screen and (max-width: 840px) {
//     grid-template-columns: repeat(1, minmax(350px, 1fr));
//     grid-template-rows: repeat(2, minmax(250px, 1fr));
//   }
// `;
