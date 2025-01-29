import styled from "styled-components";
import Navlink from "../ui/Navlink";

export default function () {
  const navbarItems = ["Home", "About", "Techstack", "Projects", "Connect"];
  const generateNavLink = (navItem) => "#" + navItem.toLowerCase();

  return (
    <StyledNavList>
      {navbarItems.map((item) => (
        <li>
          <Navlink linkText={item} linkId={generateNavLink(item)} />
        </li>
      ))}
    </StyledNavList>
  );
}

const StyledNavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: var(--padding-s);
`;
