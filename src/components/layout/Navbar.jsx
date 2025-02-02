import styled from "styled-components";
import Navlink from "../ui/Navlink";

//TODO:
// => then I need to just make sure that the follwing compos are also sufficiently responsive
// - Navbar (will remain a static bar on all viewports for the moment)

export default function () {
  const navbarItems = ["Home", "About", "Skills", "Projects", "Connect"];
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
