import styled from "styled-components";
import Button from "../ui/Button";

const socialLinks = [
  {
    iconType: "linkedIn",
    link: "https://www.linkedin.com/in/stephanmodel",
  },
  { iconType: "github", link: "https://github.com/StephMode" },
  {
    iconType: "blsky",
    link: "https://www.linkedin.com/in/stephanmodel",
  },
  { iconType: "xing", link: "https://github.com/StephMode" },
];

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => {
        return <Button link={link} iconType={link.iconType} />;
      })}
    </>
  );
}
