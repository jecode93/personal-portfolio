"use client";
import React from "react";
import { hero } from "@/js/data/home/home";
import ButtonComponent from "../utils/ButtonComponent";
import SocialComponent from "../utils/SocialComponent";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const unitVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Hero = () => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="show"
      id="home"
      className="w-[100%] h-[100%] text-lightestSlate"
    >
      <motion.div className="md:px-5 lg:px-32 2xl:px-80 h-screen flex flex-col justify-between">
        <motion.div className="flex flex-col px-5 tracking-wide leading-7 justify-center h-full pt-16 z-0">
          {hero.map((content, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between gap-16"
            >
              <motion.div className="flex flex-col items-start">
                <motion.div className="text-center lg:text-left mb-10">
                  <motion.p variants={unitVariants} className="md:text-lg">
                    {content.greating}
                  </motion.p>
                  <motion.div className="font-extrabold my-5 description">
                    <motion.h1
                      variants={unitVariants}
                      className="text-orange-500 text-[1.4rem] mb-3 md:text-3xl lg:text-[2.5rem] lg:mb-5 uppercase"
                    >
                      {content.title}{" "}
                      <span className="text-lightestSlate">CADET</span>
                    </motion.h1>
                    <motion.h2
                      variants={unitVariants}
                      className="text-[1.4rem] font-semibold md:text-3xl lg:text-[2.1rem]"
                    >
                      {content.subTitle}
                    </motion.h2>
                  </motion.div>
                  <motion.p
                    variants={unitVariants}
                    className="mb-5 md:text-lg description"
                  >
                    {content.description}
                  </motion.p>
                  <ButtonComponent path="/contact" text="Contact me" />
                </motion.div>

                <motion.div variants={unitVariants} className="hidden lg:flex">
                  <SocialComponent className="lg:text-3xl mr-3" />
                </motion.div>
              </motion.div>
              <motion.div variants={unitVariants} className="hidden lg:flex">
                <Image
                  src="/developer.svg"
                  width={70}
                  height={70}
                  alt={content.title}
                  className="mb-7 w-[50rem]"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* Social section */}
        <motion.div
          variants={unitVariants}
          className="socials-links lg:hidden text-left px-5 z-0 mb-10"
        >
          <SocialComponent />
        </motion.div>
        {/* End Social section */}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
