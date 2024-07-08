"use client";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const unitVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ButtonComponent = ({ path, text }) => {
  return (
    <motion.div variants={unitVariants}>
      <Link
        href={path}
        className="w-fit text-xs md:text-sm mt-5 font-medium border border-lightestSlate text-lightestSlate hover:text-blue px-5 py-2 uppercase btn41-43 btn-41"
      >
        <div className="flex gap-3 items-center">
          {text}
          <FaChevronRight />
        </div>
      </Link>
    </motion.div>
  );
};

export default ButtonComponent;
