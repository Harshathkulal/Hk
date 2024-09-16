"use client";

import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import Image from "next/image";
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
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const socialLinks = [
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
    href: "https://supercell.com/en/games/clashofclans/",
    icon: <FaGamepad size={48} />,
  },

  {
    href: "https://www.linkedin.com/in/harshath-kulal-ba078b209/",
    icon: <FaLinkedin size={48} />,
  },
];

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center pt-8 w-full h-screen bg-black overflow-hidden gap-6">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={30}
        className="absolute inset-0 w-full h-screen"
        particleColor="#FFFFFF"
      />

      <motion.div
        className="flex item center z-30 text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image
          src="/icon.svg"
          alt="Harshath"
          height={60}
          width={60}
          className="bg-white rounded-xl"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center z-20">
        {socialLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.1,
              delay: 0.1 + index * 0.1,
            }}
          >
            <Link
              key={index}
              href={link.href}
              className="flex w-full p-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverBorderGradient
                containerClassName="rounded-lg"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span className="text-base text-white">{link.icon}</span>
              </HoverBorderGradient>
            </Link>
          </motion.li>
        ))}
      </div>
    </div>
  );
};

export default Hero;
