import styled from "styled-components";

export default function SkillRowBadge({ skill }) {
  return <StyledListItem>{skill}</StyledListItem>;
}

const StyledListItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;
