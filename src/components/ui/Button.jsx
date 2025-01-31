import styled from "styled-components";
import linkedInIcon from "/src/assets/linkedIn.svg";
import githubIcon from "/src/assets/github.svg";
import blueskyIcon from "/src/assets/bluesky-fill.svg";
import xingIcon from "/src/assets/xing-fill.svg";

export default function Button({ link, iconType }) {
  const buttonLinkIcons = {
    labels: [
      { labelID: "linkedIn", buttonIcon: linkedInIcon },
      { labelID: "github", buttonIcon: githubIcon },
      { labelID: "blsky", buttonIcon: blueskyIcon },
      { labelID: "xing", buttonIcon: xingIcon },
    ],
    returnIcon() {
      const buttonIconFinder = this.labels.find(
        (label) => label.labelID === iconType
      );
      return buttonIconFinder ? buttonIconFinder.buttonIcon : "";
    },
  };
  return (
    <button>
      <a href={link.link}>
        <img src={buttonLinkIcons.returnIcon()} height={60} />
      </a>
    </button>
  );
}
