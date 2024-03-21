"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { HandDrawArrowSVG } from "./Svg";

const SectionDivider = () => {
  return (
    <Container className="flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, y: -50 }}
        animate={{ scale:1, opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
        }}
      >
        <HandDrawArrowSVG />
      </motion.div>
    </Container>
  );
};
export default SectionDivider;
