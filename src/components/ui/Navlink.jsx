import styled from "styled-components";

export default function Navlink({ linkText, linkId }) {
  return <StyledLink href={linkId}>{linkText}</StyledLink>;
}

const StyledLink = styled.a`
  font-size: var(--fontSize-navBar);
  text-decoration: none;
  color: var(--text-color-primary);
  padding: var(--padding-xs);
  width: 200px;
  transition: all 0.3s linear 0.1s;
  &:hover {
    text-shadow: 2px 2px 0.2px #bcbbb5;
  }
`;
