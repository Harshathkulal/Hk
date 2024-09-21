"use client";

import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { socialLinks } from "./data/socialLinks";


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
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
          
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.35, delay: 0 }}
        
      >
        {/* <Image
          src="/icon.svg"
          alt="Harshath"
          height={60}
          width={60}
          className="bg-white rounded-xl"
        /> */}
        Thanks for the visit.That’s one way to waste a minute!
      </motion.div>

      <div className="flex flex-wrap justify-center z-20">
        {socialLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0,
              scale: 0.95,
              filter: "blur(10px)", }}
            animate={{  opacity: 1,
              scale: 1,
              filter: "blur(0px)", }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.1,
              delay: 0.35 + index * 0.1,
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
      <motion.h1
        className="flex items-center justify-center z-30 text-sm text-white/60"
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
          
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay:1.25}}
        
      >
        Lets Connect and Waste Somemore time!
      </motion.h1>
    </div>
  );
};

export default Hero;
