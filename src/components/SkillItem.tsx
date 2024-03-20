import { motion } from "framer-motion";
import React from "react";

const SkillItem = ({ label, bgColor, icon }) => {
  return (
    <li
      key={label}
      className="flex items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-medium text-gray-50"
      style={{ backgroundColor: bgColor }}
    >
      {React.cloneElement(icon, { size: 24 })}
      {label}
    </li>
  );
};
export default SkillItem;
