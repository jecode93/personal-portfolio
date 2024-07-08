'use client'
import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import { hero } from "@/js/data/services/hero";
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
    <SectionsComponent id="services" otherClasses="pt-32 md:pt-48 -mb-20">
      <SectionTitle title="Services" text="What I Build" />
      <motion.div variants={variants} initial="hidden" animate="show" className="-mt-7">
        {hero.map((data) => (
          <motion.div key={data}>
            <motion.p variants={unitVariants} className="tracking-wide text-slate text-justify description">
              {data.services}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </SectionsComponent>
  );
};

export default Hero;
