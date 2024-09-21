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
  icon: JSX.Element; // Use JSX.Element for icon type
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/Harshathkulal", icon: <FaGithub size={48} /> },
  { href: "mailto:harshathmkulal5@gmail.com", icon: <BiLogoGmail size={48} /> },
  { href: "https://x.com/Hxrshxth_K", icon: <FaXTwitter size={48} /> },
  { href: "https://harshath.vercel.app/", icon: <CgWebsite size={48} /> },
  {
    href: "https://discord.com/invite/9XYcBYmk",
    icon: <FaDiscord size={48} />,
  },
  {
    href: "https://www.instagram.com/harshath_kulal/",
    icon: <FaInstagram size={48} />,
  },
  {
    href: "https://link.clashofclans.com/en/?action=OpenPlayerProfile&tag=8CPC8JY0L",
    icon: <FaGamepad size={48} />,
  },
  {
    href: "https://www.linkedin.com/in/harshath-kulal-ba078b209/",
    icon: <FaLinkedin size={48} />,
  },
];
