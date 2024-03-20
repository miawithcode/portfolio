"use client";

import { motion } from "framer-motion";
import React from "react";

interface SkillItemProps {
  label: string;
  bgColor: string;
  icon: React.ReactNode;
  index: number;
}

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillItem = ({ label, bgColor, icon, index }: SkillItemProps) => {
  return (
    <motion.li
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-medium text-gray-50"
      style={{ backgroundColor: bgColor }}
    >
      {React.cloneElement(icon, { size: 24 })}
      {label}
    </motion.li>
  );
};
export default SkillItem;
