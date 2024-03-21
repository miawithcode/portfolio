"use client";

import { skills } from "@/lib/data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import SkillItem from "../SkillItem";
import { HandDrawCircleSVG } from "../Svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Container>
      <section className="mx-auto max-w-3xl scroll-mt-28 py-16 text-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 520, y: 150 }}
            whileInView={{ opacity: 1, x: 510, y: 20 }}
            viewport={{
              once: true,
            }}
            className="absolute hidden lg:block"
          >
            <HandDrawCircleSVG className="h-36 w-36" />
          </motion.div>

          <SectionHeading>Tech Stack</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillItem key={skill.label} index={index} {...skill} />
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};
export default Skills;
