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

const unitVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};


const ServicesSectionCard = ({ content }) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="show" key={content.id} className="mb-20" id={content.href}>
      <motion.div variants={unitVariants} className="mb-5 flex items-center">
        <motion.div className="w-12 mr-3 border border-orange-500" />
        <motion.h1 className="font-medium text-lg md:text-xl 2xl:text-2xl tracking-wide text-orange-500 uppercase">
          {content.title}
        </motion.h1>
      </motion.div>
      <motion.div>
        <motion.p variants={unitVariants} className="text-slate mb-16 text-justify">{content.description}</motion.p>
        <motion.div variants={unitVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {content.structure.map((data) => (
            <motion.div
              key={data.id}
              className="bg-darkblue p-5 transition duration-500 border border-transparent hover:border-orange-500 hover:-translate-y-1 rounded"
            >
              <div>
                <span className="text-xl font-semibold bg-orange-500 text-blue px-2">
                  {data.id}
                </span>
                <h3 className="font-medium text-lg md:text-xl 2xl:text-2xl my-4">
                  {data["st-title"]}
                </h3>
                <p className="text-slate md:text-justify">{data["st-desc"]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesSectionCard;
