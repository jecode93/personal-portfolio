'use client'
import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import { aboutMe } from "@/js/data/about/about";
import MyCard from "../utils/MyCard";
import ResumeButton from "../utils/ResumeButton";
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
    <SectionsComponent id="about-me" otherClasses="pt-32 md:pt-48">
      <SectionTitle title="About Me" text="What to Know" />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center lg:flex-row justify-between gap-10"
      >
        <motion.div className="flex justify-start lg:w-1/2">
          {aboutMe.map((about, index) => (
            <motion.div variants={unitVariants} key={index}>
              <p className="description tracking-wide text-slate text-justify mb-5">
                {about.description}
              </p>
              <div className="lg:hidden my-10">
                <ResumeButton />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={unitVariants} className="lg:w-1/2 md:p-3">
          <MyCard />
        </motion.div>
      </motion.div>
    </SectionsComponent>
  );
};

export default Hero;
