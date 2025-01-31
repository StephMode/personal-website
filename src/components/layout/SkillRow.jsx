import Badge from "../ui/Badge";
import styled from "styled-components";

export default function SkillRow({ skills }) {
  return (
    <StyledUnorderedList>
      {skills.map((skill) => {
        return <Badge skill={skill} badgeTheme={"skill"} />;
      })}
    </StyledUnorderedList>
  );
}

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: var(--padding-s);
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;
