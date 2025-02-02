import styled from "styled-components";
import linkedInIcon from "/src/assets/linkedIn.svg";
import githubIcon from "/src/assets/github.svg";
import blueskyIcon from "/src/assets/bluesky-fill.svg";
import xingIcon from "/src/assets/xing-fill.svg";

export default function Button({ buttonType, link, iconType }) {
  const buttonIconDictionary = {
    icons: [
      { iconID: "linkedIn", buttonIcon: linkedInIcon },
      { iconID: "github", buttonIcon: githubIcon },
      { iconID: "blsky", buttonIcon: blueskyIcon },
      { iconID: "xing", buttonIcon: xingIcon },
    ],
    returnIcon() {
      const buttonIconFinder = this.icons.find(
        (icon) => icon.iconID === iconType
      );
      return buttonIconFinder ? buttonIconFinder.buttonIcon : "";
    },
  };

  return (
    <button>
      {buttonType === "socialLink" && (
        <a href={link.link}>
          <StyledIcon src={buttonIconDictionary.returnIcon()} />
        </a>
      )}
    </button>
  );
}

const StyledIcon = styled.img`
  height: 125px;
  background-color: var(--backgroundColor-element-light);
  border-radius: 10px;
  padding: var(--padding-s);
  box-shadow: 0px 5px 0.25px var(--boxShadow-color-light);
  transition: all 0.15s linear 0.1s;
  &:hover {
    transform: translate(0px, 5px);
    box-shadow: none;
  }
  @media screen and (max-width: 840px) {
    height: 85px;
  }
`;
