import { BiLogoGmail } from "react-icons/bi";
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaGamepad,
  FaLinkedin,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

// Define the type for social links
interface SocialLink {
  href: string;
  icon: JSX.Element;
  name: string; // Use JSX.Element for icon type
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Harshathkulal",
    name: "Github",
    icon: <FaGithub size={32} />,
  },
  {
    href: "https://www.linkedin.com/in/harshath-kulal-ba078b209/",
    name: "Linkedin",
    icon: <FaLinkedin size={32} />,
  },
  {
    href: "mailto:harshathmkulal5@gmail.com",
    name: "Gmail",
    icon: <BiLogoGmail size={32} />,
  },
  {
    href: "https://x.com/Hxrshxth_K",
    name: "Twitter(X)",
    icon: <FaXTwitter size={32} />,
  },
  {
    href: "https://harshath.vercel.app/",
    name: "Portfolio",
    icon: <CgWebsite size={32} />,
  },
  {
    href: "https://discord.com/invite/9XYcBYmk",
    name: "Discord",
    icon: <FaDiscord size={32} />,
  },
  {
    href: "https://www.instagram.com/harshath_kulal/",
    name: "Instagram",
    icon: <FaInstagram size={32} />,
  },
  {
    href: "https://link.clashofclans.com/en/?action=OpenPlayerProfile&tag=8CPC8JY0L",
    name: "Clash of..",
    icon: <FaGamepad size={32} />,
  },
];
