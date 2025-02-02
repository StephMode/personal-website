import styled from "styled-components";

export default function SectionHeading({ sectionName }) {
  return <StyledHeading>{sectionName}</StyledHeading>;
}

const StyledHeading = styled.h1`
  text-align: center;
  text-shadow: 3.5px 3.5px 0 black;
  color: #dcd7bc;
  font-size: var(--fontSize-sectionHeading);
`;
