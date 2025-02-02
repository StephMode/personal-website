import styled from "styled-components";
import SocialLinks from "../layout/SocialLinks";
import SectionHeading from "../ui/SectionHeading";

export default function ConnectPage() {
  return (
    <>
      <SectionHeading sectionName={"Let's connect"} />
      <StyledGridContainer>
        <SocialLinks />
      </StyledGridContainer>
    </>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 200px;
  justify-items: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    grid-template-rows: repeat(2, minmax(150px, 1fr));
    gap: 10px;
  }
`;
