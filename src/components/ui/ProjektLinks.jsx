import styled from "styled-components";
import githubIcon from "/src/assets/github.svg";
import arrowIcon from "/src/assets/arrow-right-up-line.svg";

export default function ProjektLinks({ projectRepoLink, projectDemoLink }) {
  return (
    <StyledLinkWrapper>
      <StyledLink href={projectRepoLink}>
        <StyledIcon src={githubIcon} />
        Link to Repo
      </StyledLink>
      <StyledLink href={projectDemoLink}>
        <StyledIcon src={arrowIcon} />
        Link to Demo
      </StyledLink>
    </StyledLinkWrapper>
  );
}

const StyledLinkWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out 0.2s;
  &:hover {
    transform: translate(0px, -5px);
  }
  @media screen and (max-width: 400px) {
    font-size: var(--fontSize-badge-mobile);
  }
`;

const StyledIcon = styled.img`
  width: 24px;
`;
