"use client";
import React from "react";
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

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <motion.div variants={variants} initial="hidden" animate="show">
        <motion.h2 variants={unitVariants} className="text-lightestSlate text-[40px] md:-mb-2 md:-mt-16 font-bold tracking-widest md:text-[60px] lg:text-[90px]">
          {title}
        </motion.h2>
        <motion.div className="mb-20 flex items-center">
          <motion.div variants={unitVariants} className="w-12 mr-3 h-[1px] my-7 bg-orange-500" />
          <motion.h1 variants={unitVariants} className="font-medium text-slate text-lg md:text-xl tracking-wider">
            {text}
          </motion.h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionTitle;
