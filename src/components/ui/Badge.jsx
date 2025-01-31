import styled, { ThemeProvider } from "styled-components";

export default function Badge({ skill, tech, badgeTheme }) {
  return (
    <ThemeProvider theme={badgeTheme === "skill" ? SkillBadge : TechBadge}>
      <StyledListItem>{skill || tech}</StyledListItem>
    </ThemeProvider>
  );
}

const StyledListItem = styled.li`
  background-color: var(${(props) => props.theme.backgroundColor});
  color: var(${(props) => props.theme.color});
  padding: ${(props) => props.theme.padding};
  border-radius: 10px;
  font-weight: 300;
  transition: all 0.2s linear 0.1s;
  &:hover {
    background-color: var(${(props) => props.theme.hoverColor});
  }
`;
StyledListItem.defaultProps = {
  theme: {
    backgroundColor: "--backgroundColor-badge--theme-skill",
    color: "--text-color-primary",
    padding: "5px 20px",
    hoverColor: "--backgroundColor-badge-hover--theme-skill",
  },
};
const SkillBadge = {
  backgroundColor: "--backgroundColor-badge--theme-skill",
  color: "--text-color-primary",
  padding: "5px 20px",
  hoverColor: "--backgroundColor-badge-hover--theme-skill",
};
const TechBadge = {
  backgroundColor: "--backgroundColor-badge--theme-technology",
  color: "--text-color-accent-light",
  padding: "2.5px 10px",
  hoverColor: "--backgroundColor-badge-hover--theme-technology",
};
