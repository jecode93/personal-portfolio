'use client'
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

const SectionsComponent = ({ id, otherClasses, children }) => {
  return (
    <motion.section variants={variants}
      id={id}
      className={`px-5 md:px-10 lg:px-32 2xl:px-80 py-20 relative ${otherClasses}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionsComponent;
