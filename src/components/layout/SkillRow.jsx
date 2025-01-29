import SkillRowBadge from "../ui/SkillRowBadge";
import styled from "styled-components";

export default function SkillRow({ skills }) {
  return (
    <StyledUnorderedList>
      {skills.map((skill) => {
        return <SkillRowBadge skill={skill} />;
        // return <ki>{skill}</ki>;
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
`;
