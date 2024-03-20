"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { HandDrawArrow } from "./Svg";

const SectionDivider = () => {
  return (
    <Container className="flex items-center justify-center">
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      >
        <HandDrawArrow />
      </motion.div>
    </Container>
  );
};
export default SectionDivider;
