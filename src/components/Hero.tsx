"use client";

import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaSlack,
  FaLinkedin,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/Harshathkulal", icon: <FaGithub /> },
  { href: "mailto:harshathmkulal5@gmail.com", icon: <BiLogoGmail /> },
  { href: "https://x.com/Hxrshxth_K", icon: <FaXTwitter /> },
  { href: "https://harshath.vercel.app/", icon: <CgWebsite /> },
  { href: "https://discord.com/invite/5hSSQtrt", icon: <FaDiscord /> },
  { href: "https://www.instagram.com/harshath_kulal/", icon: <FaInstagram /> },
  {
    href: "https://app.slack.com/client/T07LA2TD19S/D07L0UPUFT8",
    icon: <FaSlack />,
  },

  {
    href: "https://www.linkedin.com/in/harshath-kulal-ba078b209/",
    icon: <FaLinkedin />,
  },
];

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="absolute inset-0 w-full h-screen"
        particleColor="#FFFFFF"
      />

      <motion.h1
        className="relative z-10 text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold"
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
        Harshath Kulal
      </motion.h1>

      <div className="flex flex-wrap justify-center">
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
              <Button
                type="button"
                variant="outline"
                className="rounded-lg hover:scale-110"
              >
                <span className="text-base text-white">{link.icon}</span>
              </Button>
            </Link>
          </motion.li>
        ))}
      </div>
    </div>
  );
};

export default Hero;
