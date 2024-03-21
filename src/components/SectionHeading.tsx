"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="mb-8 text-center text-3xl font-semibold capitalize md:text-4xl"
    >
      {children}
    </motion.h2>
  );
};
export default SectionHeading;
