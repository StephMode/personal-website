import Button from "../ui/Button";

const socialLinks = [
  {
    iconType: "linkedIn",
    link: "https://www.linkedin.com/in/stephanmodel",
  },
  { iconType: "github", link: "https://github.com/StephMode" },
  {
    iconType: "blsky",
    link: "https://bsky.app/profile/stephmode.bsky.social",
  },
  {
    iconType: "xing",
    link: "https://www.xing.com/profile/Stephan_Model3/web_profiles?expandNeffi=true",
  },
];

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => {
        return (
          <Button
            buttonType={"socialLink"}
            link={link}
            iconType={link.iconType}
          />
        );
      })}
    </>
  );
}
